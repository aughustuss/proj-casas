import Banner from "@/components/Banner"
import Carousel from "@/components/Carousel"
import Contato from "@/components/Contato"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import History from "@/components/History"
import Houses from "@/components/Houses"
import Roombanner from "@/components/Roombanner"
import Search from "@/components/Search"


export default function Home() {
  return (
    <>
      <Header />
      <main className="font-poppins overflow-x-hidden tracking-wide container mx-auto px-4 lg:px-0">
        <div className="w-full">
          <Banner />
        </div>
        <div className="w-full">
          <Roombanner/>
        </div>
        <div className="w-full">
          <Carousel/>
        </div>
        <div className="w-full">
          <History/>
        </div>
        <div className="w-full">
          <Search />
        </div>
        <div className="w-full py-16">
          <Houses />
        </div>
        <div className="w-full pb-16">
          <Contato/>
        </div>
      </main>
      <Footer/>
    </>
  )
}
