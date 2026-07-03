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

  return result.trim();
}
