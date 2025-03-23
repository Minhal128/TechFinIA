import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TechFinIA',
  description: 'TechFinIA is the website especially design to solve the financial Issue using technologies created by Minhal Rizvi',
  generator: 'Minhal',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
