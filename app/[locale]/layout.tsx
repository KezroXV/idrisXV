import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Geist_Mono } from "next/font/google";
import { ThemeWrapper } from "@/components/theme-wrapper";
import { LanguageToggle } from "@/components/language-toggle";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client side is the simplest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <body className={`${geistMono.variable} font-mono antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <ThemeWrapper>
            <LanguageToggle />
            {children}
          </ThemeWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
