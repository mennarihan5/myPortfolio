import styles from './styles.module.scss';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className={styles['navbar-wrapper']}>
        <ul className={styles.navbar}>
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500}>
              Services
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
    </div>
  )
}

export default Navbar;