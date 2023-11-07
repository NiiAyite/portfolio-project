import { About } from './About/About'
import { Contact } from './Contact/Contact'
import { Footer } from './Footer/Footer'
import { Hero } from './Hero/Hero'
import { Navbar } from './Navbar/Navbar'
import { Websites } from './Websites/Websites'

function App() {
return (
    <div className='h-[100%] bg-zinc-950 text-zinc-100'>
      <Navbar />
      <Hero />
      <Websites />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
