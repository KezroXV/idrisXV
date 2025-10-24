"use client";

import {useLocale} from 'next-intl';
import {useRouter, usePathname} from '@/i18n/routing';
import {useEffect, useRef} from 'react';

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const scrollPositionRef = useRef(0);

  const toggleLanguage = () => {
    // Save current scroll position
    scrollPositionRef.current = window.scrollY;

    const nextLocale = locale === 'en' ? 'fr' : 'en';
    router.replace(pathname, {locale: nextLocale});
  };

  useEffect(() => {
    // Restore scroll position after navigation
    if (scrollPositionRef.current > 0) {
      setTimeout(() => {
        window.scrollTo(0, scrollPositionRef.current);
        scrollPositionRef.current = 0;
      }, 100);
    }
  }, [locale]);

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-20 z-50 border border-foreground bg-background px-3 py-2 hover:bg-foreground hover:text-background transition-colors text-xs font-medium"
      aria-label="Toggle language"
    >
      {locale === "en" ? "FR" : "EN"}
    </button>
  );
}
