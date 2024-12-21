import type { Metadata } from 'next'
// import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { cn } from '@/lib/utils'
import { ModalProvider } from '@/components/providers/modal-provider'
import { SocketProvider } from '@/components/providers/socket-provider'
import QueryProvidedr from '@/components/providers/query-provider'
import LandingPage from '@/components/landing'


// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Discord | Generic Conversetion',
  description: 'Best Platform For Gaming Community',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn("bg-white dark:bg-[#313338]")} >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey='discord-project'
          >
            <SocketProvider>
              <ModalProvider />
              <QueryProvidedr>
              {children}
              </QueryProvidedr>
            </SocketProvider>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
    
  )
}
