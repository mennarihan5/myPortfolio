import Header from "../components/Header/header";
import Hero from "../components/Hero/hero";
import About from '../components/About/about';
import Services from '../components/Services/services';
import Projects from '../components/Projects/projects';
import Footer from '../components/Footer/footer';
import Contact from "../components/Contact/contact";
import PrivacyPolicy from '../pages/Privacy/privacy';
import TermsOfService from '../pages/Terms/terms';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styles from './styles.module.scss';
import ScrollToTop from "../components/ScrollToTop/scrollToTop";


const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={
          <main>
            <Header />
            <Hero />
              <section className={styles.section} id="about"><About /></section>
              <section className={styles.section} id="services"><Services /></section>
              <section className={styles.section} id="projects"><Projects /></section>
              <section className={styles.section} id="contact"><Contact /></section>
            <Footer />
          </main>
        } />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </Router>
  )
}

export default App;