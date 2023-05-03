import { HouseContextProvider } from '@/contexts/Housecontext'
import { SessionProvider } from 'next-auth/react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <HouseContextProvider>
          <Component {...pageProps} />
      </HouseContextProvider>
    </SessionProvider>
  )
}
