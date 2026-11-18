'use client';

import { useEffect, useId, useRef, useState } from 'react';

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  );
}

function SearchForm({
  inputId,
  defaultQuery = '',
  autoFocus = false,
  placeholder,
}: {
  inputId: string;
  defaultQuery?: string;
  autoFocus?: boolean;
  placeholder: string;
}) {
  const [query, setQuery] = useState(defaultQuery);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setQuery(defaultQuery);
  }, [defaultQuery]);

  useEffect(() => {
    if (autoFocus) {
      inputRef.current?.focus();
    }
  }, [autoFocus]);

  return (
    <form role="search" action="/search" method="get" className="sfw-site-search-form">
      <label className="sfw-site-search-label" htmlFor={inputId}>
        Search pages
      </label>
      <div className="sfw-site-search-field">
        <input
          ref={inputRef}
          id={inputId}
          name="q"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
          autoComplete="off"
        />
        <button type="submit" className="sfw-site-search-submit" aria-label="Search">
          <SearchIcon />
        </button>
      </div>
    </form>
  );
}

export function SiteSearch({
  defaultQuery = '',
  autoFocus = false,
}: {
  defaultQuery?: string;
  autoFocus?: boolean;
}) {
  const inputId = useId();

  return (
    <div className="sfw-site-search sfw-site-search-page">
      <SearchForm
        inputId={inputId}
        defaultQuery={defaultQuery}
        autoFocus={autoFocus}
        placeholder="Search pages, services, and locations"
      />
    </div>
  );
}

export function HeaderSearch({ className = '' }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputId = useId();

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (target && rootRef.current && !rootRef.current.contains(target)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <div className={`sfw-header-search ${className}`.trim()} ref={rootRef}>
      <button
        type="button"
        className="sfw-header-search-toggle"
        aria-label={open ? 'Close search' : 'Open search'}
        aria-expanded={open}
        aria-controls={open ? `${inputId}-panel` : undefined}
        onClick={() => setOpen((value) => !value)}
      >
        <SearchIcon />
      </button>

      {open ? (
        <div className="sfw-header-search-panel" id={`${inputId}-panel`}>
          <SearchForm inputId={inputId} autoFocus placeholder="Search…" />
        </div>
      ) : null}
    </div>
  );
}
