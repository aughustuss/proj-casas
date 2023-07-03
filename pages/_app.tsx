import { HouseContextProvider } from '@/contexts/Housecontext'
import { SessionProvider } from 'next-auth/react'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

export default function App({ Component, pageProps: {session, ...pageProps}, }: AppProps) {
  useEffect(() => {
    require("preline")
  }, [])
  return (
    <SessionProvider session={session}>
      <HouseContextProvider>
          <Component {...pageProps} />
      </HouseContextProvider>
    </SessionProvider>
  )
}
