import '../src/styles/globals.css'
import { ReduxProvider } from 'store/Provider'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Fast-Delivery',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" sizes="any" />
            </Head>
            <html lang="en">
                <body className={inter.className}>
                    <ReduxProvider>{children}</ReduxProvider>
                </body>
            </html>
        </>
    )
}
