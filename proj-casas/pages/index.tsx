import Banner from "@/components/Banner"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Houses from "@/components/Houses"
import Roombanner from "@/components/Roombanner"
import Search from "@/components/Search"
import Sidebar from "@/components/Sidebar"


export default function Home() {
  return (
    <>
      <Header />
      <Sidebar/>
      <main className="font-roboto">
        <div className="w-full">
          <Banner />
        </div>
        <div className="w-full">
          <Roombanner/>
        </div>
        <div className="w-5/6 mx-auto">
          <Search />
        </div>
        <div className="w-5/6 mx-auto py-16">
          <Houses />
        </div>
      </main>
      <Footer/>
    </>
  )
}
