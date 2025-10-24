"use client";

import {useTranslations} from 'next-intl';

export function FooterTerminal() {
  const t = useTranslations('footer');

  return (
    <footer className="py-8 px-6 md:px-12 border-t border-foreground">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© 2024 Idris. {t('copyright')}</p>
        <p>{t('builtWith')}</p>
      </div>
    </footer>
  );
}
