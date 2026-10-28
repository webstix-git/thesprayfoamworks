function findMatchingCloseDiv(html: string, openIdx: number): number {
  const tagRegex = /<(\/?)div\b[^>]*>/gi;
  tagRegex.lastIndex = openIdx;
  let depth = 0;
  let match: RegExpExecArray | null;

  while ((match = tagRegex.exec(html)) !== null) {
    if (match[1] === '/') {
      depth -= 1;
      if (depth === 0) {
        return tagRegex.lastIndex;
      }
    } else {
      depth += 1;
    }
  }

  return -1;
}

/** Remove embedded header/footer from exported HTML pages. */
export function stripSiteChrome(html: string): string {
  let result = html.replace(/<header\s+id="siteHeader"[\s\S]*?<\/header>/i, '');

  const footerComment = /<!--\s*footer\s*-->/i.exec(result);
  if (footerComment?.index !== undefined) {
    const footerStart = footerComment.index;
    const divStart = result.indexOf('<div', footerStart);
    if (divStart !== -1) {
      const endIdx = findMatchingCloseDiv(result, divStart);
      if (endIdx !== -1) {
        result = result.slice(0, footerStart) + result.slice(endIdx);
      }
    }
  }

  return optimizeEmbeddedImages(result.trim());
}

/**
 * The legacy page content is rendered from HTML strings, so those images do
 * not pass through Next's image component. Keep the first hero frame eager,
 * but defer every other embedded image until it is near the viewport.
 */
function optimizeEmbeddedImages(html: string): string {
  let firstHeroSeen = false;

  return html.replace(/<img\b[^>]*>/gi, (tag) => {
    const isHero = /class=["'][^"']*\bsfw-hero-slide\b/i.test(tag);
    const isFirstHero = isHero && !firstHeroSeen;

    if (isHero) {
      firstHeroSeen = true;
    }

    let optimized = tag;
    if (!/\sloading\s*=/i.test(optimized)) {
      optimized = optimized.replace(/\s*\/?>(\s*)$/i, ` loading="${isFirstHero ? 'eager' : 'lazy'}"$&`);
    }
    if (!/\sdecoding\s*=/i.test(optimized)) {
      optimized = optimized.replace(/\s*\/?>(\s*)$/i, ' decoding="async"$&');
    }
    if (isFirstHero && !/\sfetchpriority\s*=/i.test(optimized)) {
      optimized = optimized.replace(/\s*\/?>(\s*)$/i, ' fetchpriority="high"$&');
    }

    return optimized;
  });
}
