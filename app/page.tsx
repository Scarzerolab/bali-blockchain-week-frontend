import Hero from '@/components/main/Hero'
import Speakers from '@/components/main/Speakers'
import Navbar from '@/components/navbar/Navbar'
import About from '@/components/main/About'
import Gallery from '@/components/main/Gallery'
import Sponsor from '@/components/main/Sponsor'
import Footer from '@/components/Footer'
import { ReactLenis } from '@/utils/lenis'
import FullscreenNav from '@/components/navbar/FullscreenNav'


const page = () => {


  return (
    <ReactLenis root>
      <Navbar />
      <FullscreenNav/>
      <Hero />
      <Speakers />
      <About/>
      <Gallery/>
      <Sponsor/>
      <Footer/>
    </ReactLenis>
  )
}

export default page