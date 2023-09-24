import Image from 'next/image'
import NavBar from './components/navBar/navBar'
import HeroMain from './components/heroSection/heroMain'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-16">
   <NavBar/>
   <HeroMain/>
    </main>
  )
}
