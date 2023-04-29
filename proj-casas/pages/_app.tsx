import { HouseContextProvider } from '@/contexts/Housecontext'
import { SideBarProvider } from '@/contexts/Sidebarcontext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HouseContextProvider>
      <SideBarProvider>
        <Component {...pageProps} />
      </SideBarProvider>
    </HouseContextProvider>
  )
}
