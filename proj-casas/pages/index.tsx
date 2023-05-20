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
      <main className="font-poppins overflow-x-hidden tracking-wide">
        <div className="container mx-auto px-8 md:px-0">
          <Banner />
        </div>
        <div className="container mx-auto px-8 md:px-0">
          <Roombanner/>
        </div>
        <div className="container mx-auto px-8 md:px-0">
          <Carousel/>
        </div>
        <div className="container mx-auto px-8 md:px-0">
          <History/>
        </div>
        <div className="container mx-auto px-8 sm:px-0">
          <Search />
        </div>
        <div className="container mx-auto px-8 md:px-0 py-16">
          <Houses />
        </div>
        <div className="container mx-auto px-8 md:px-0 pb-16">
          <Contato/>
        </div>
      </main>
      <Footer/>
    </>
  )
}
