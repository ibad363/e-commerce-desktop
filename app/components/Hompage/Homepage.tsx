import { CardData } from "@/app/utils/types"
import Blog from "./Blog"
import Hero from "./Hero"
import Instagram from "./Instagram"
import NewArrival from "./NewArrival"
import TopPicks from "./TopPicks"

const Homepage = ({products}: {products:CardData[]}) => {
  return (
    <>
      <Hero />
      <TopPicks products={products} />
      <NewArrival />
      <Blog />
      <Instagram />
    </>
  )
}

export default Homepage