import Header from "../components/Header/header";
import Hero from "../components/Hero/hero";
import About from '../components/About/about';
import Services from '../components/Services/services';
import Projects from '../components/Projects/projects';
import Footer from '../components/Footer/footer';
import Contact from "../components/Contact/contact";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App;