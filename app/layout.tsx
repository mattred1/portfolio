import type { Metadata, Viewport } from 'next'
import './globals.css'
import { Header } from './header'
import { Footer } from './footer'
import { ThemeProvider } from 'next-themes'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://matthewredinger.com'),
  alternates: {
    canonical: '/',
  },
  title: 'Matt Redinger',
  description:
    "Matthew Redinger's website, built with Next.js, React and Motion-Primitives.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`bg-white tracking-tight antialiased dark:bg-zinc-950`}>
        <ThemeProvider
          enableSystem={true}
          attribute="class"
          storageKey="theme"
          defaultTheme="system"
        >
          <div className="flex min-h-screen flex-col">
            <div className="relative mx-auto w-full max-w-3xl flex-1 px-4 pt-20">
              <Header />
              {children}
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
