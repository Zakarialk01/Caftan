import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from "../components/Hero";
import Advantages from "../components/Advantages";
import Bestproducts from "../components/Bestproducts/Bestproducts";
import Cta from "../components/Cta";
import Faq from "../components/Faq/Faq"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Hero />
   <Bestproducts />
   <Advantages />
 <Cta />
 <Faq />
   </>
  )
}
