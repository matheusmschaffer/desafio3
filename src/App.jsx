import './App.css'
import Blog from './components/sections/Blog.jsx';
import Navbar from './components/sections/Navbar.jsx';
import Presentation from './components/sections/Presentation.jsx';
import Projects from './components/sections/Projects.jsx'
import Footer from './components/sections/Footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Presentation />
      <Blog />
      <Projects />
      <Footer />
    </>
  )
}

export default App
