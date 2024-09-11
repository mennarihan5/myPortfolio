import styles from './styles.module.scss';
import ConnectBtn from '../ConnectBtn/connectBtn';
import heroImg from '../../assets/content-structure-concept-illustration.png';
import img from '../../assets/m010t0520_f_shape_element_31aug22.png';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className={styles['hero-container']}>
        <div className={styles['left-side']}>
          <div className={styles['text-wrapper']}>
            <div className={styles.title}>
              <span className={styles.name}> MENNA RIHAN,</span> 
              <br />
              <br />
             <p>frontend developer.</p>
            </div>
            <p className={styles.subtitle}>
              I’m a Front-End Web Developer with expertise in crafting responsive, pixel-perfect interfaces that prioritize a seamless and intuitive user experience. 
              I’m dedicated to building web solutions that are both visually appealing and highly functional.
            </p>
          </div>
          <div className={styles['btns-wrapper']}>
              <Link to='contact' smooth={true} duration={500}>
                <ConnectBtn className={styles['connect-btn']}>
                  Connect Now!
                </ConnectBtn>
              </Link> 
              <ConnectBtn className={styles['resume-btn']}>
                <a href="/files/Menna-Rihan-CV.pdf" target="_blank" rel="noopener noreferrer" className={styles['resume-btn']}>
                  My Resume
                </a>
              </ConnectBtn>
          </div>
        </div>
    </section>
  )
}

export default Hero;