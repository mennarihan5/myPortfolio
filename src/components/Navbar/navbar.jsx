import styles from './styles.module.scss';
import { useState } from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles['navbar-wrapper']}>
        <div className={styles.hamburger} onClick={handleToggle}>
          {isOpen ? <IoCloseSharp className={styles.close} /> : <GiHamburgerMenu />}
        </div>
        <ul className={`${styles.navbar} ${isOpen ? styles['navbar-open'] : ''}`}>
          <li>
            <Link to="home" smooth={true} duration={500} onClick={handleToggle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} onClick={handleToggle}>
              About
            </Link>
          </li>
          <li>
            <Link to="services" smooth={true} duration={500} onClick={handleToggle}>
              Services
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} onClick={handleToggle}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} onClick={handleToggle}>
              Contact
            </Link>
          </li>
        </ul>
    </div>
  )
}

export default Navbar;