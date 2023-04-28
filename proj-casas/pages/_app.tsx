import { HouseContextProvider } from '@/contexts/Housecontext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HouseContextProvider>
      <Component {...pageProps} />
    </HouseContextProvider>
  )
}
