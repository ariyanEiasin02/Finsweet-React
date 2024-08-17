import Banner from "./components/Banner/Banner"
import Blog from "./components/Blog/Blog"
import Clients from "./components/Clients/Clients"
import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"
import Frequently from "./components/Frequently/Frequently"
import Navbar from "./components/Navbar/Navbar"
import Porject from "./components/Project/Porject"
import Websites from "./components/Websites/Websites "
import Work from "./components/Work/Work"


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Work></Work>
    <Porject></Porject>
    <Features></Features>
    <Clients></Clients>
    <Frequently></Frequently>
    <Websites></Websites>
    <Blog></Blog>
    <Footer></Footer>
    </>
  )
}

export default App
