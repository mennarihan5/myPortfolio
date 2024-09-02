import styles from './styles.module.scss';
import ConnectBtn from '../ConnectBtn/connectBtn';
import heroImg from '../../assets/gradient-homepage-illustration.png';

const Hero = () => {
  return (
    <div className={styles['hero-container']}>
        <div className={styles['left-side']}>
          <div className={styles['text-wrapper']}>
            <h2 className={styles.title}>
              <span className={styles.name}>I'm Menna Rihan,</span> frontend developer.
            </h2>
            <p className={styles.subtitle}>
              I’m a Front-End Web Developer with expertise in crafting responsive, pixel-perfect interfaces that prioritize a seamless and intuitive user experience. 
              I’m dedicated to building web solutions that are both visually appealing and highly functional.
            </p>
          </div>
          <div className={styles['btns-wrapper']}>
              <ConnectBtn className={styles['connect-btn']}>
                Connect Now!
              </ConnectBtn>
              <ConnectBtn className={styles['resume-btn']}>
                My resume
              </ConnectBtn>
          </div>
        </div>
        <div className={styles['right-side']}>
          <div className={styles['img-wrapper']}>
            <img src={heroImg} alt="Hero" />
            <p>We're creating something amazing!</p>
          </div>
        </div>
    </div>
  )
}

export default Hero;