import styles from './styles.module.scss';
import Logo from '../Logo/logo';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  return (
    <div className={styles['footer-container']}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles['footer-wrapper']}>
        <p>© 2024 Menna Rihan. All rights reserved.</p>
        <div className={styles['footer-menu']}>
          <RouterLink to='terms' className={styles.links}>Term of Services</RouterLink>
          <RouterLink to ='/privacy' className={styles.links}>Privacy Policy</RouterLink>
          <ScrollLink to='projects' className={styles['projects-link']} smooth={true} duration={500}>
            My Projects
          </ScrollLink>
        </div>
      </div>
    </div>
  )
}

export default Footer;