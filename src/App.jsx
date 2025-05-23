import './App.css'
import About from './components/About'
import Blog from './components/Blog'
import Home from './components/Home'
import MyFooter from './components/MyFooter'
import Navbar from './components/Navbar'
import NewsLetter from './components/NewsLetter'
import Product from './components/Product'
import Services from './components/Services'

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <About />
      <Product />
      <Blog />
      <NewsLetter />
      <MyFooter />
    </>
  )
}

export default App
