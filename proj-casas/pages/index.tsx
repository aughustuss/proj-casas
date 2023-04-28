import Banner from "@/components/Banner"
import Header from "@/components/Header"
import Houses from "@/components/Houses"
import Search from "@/components/Search"


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div className="w-full">
          <Banner />
        </div>
        <div className="w-5/6 mx-auto">
          <Search />
        </div>
        <div className="w-5/6 mx-auto py-16">
          <Houses />
        </div>
      </main>
    </>
  )
}
