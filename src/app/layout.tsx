import type { Metadata } from 'next'

import StyledComponentsRegistry from '@/lib/registry'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Won Games',
  description: 'The best Game Store in the world!',
  icons: '/img/icon-512.png'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
