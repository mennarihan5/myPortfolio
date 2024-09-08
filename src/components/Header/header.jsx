import Logo from '../Logo/logo';
import Navbar from '../Navbar/navbar';
import ConnectBtn from '../ConnectBtn/connectBtn';
import styles from './styles.module.scss';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className={styles['header-container']}>
        <div className={styles['logo-wrapper']}>
          <Logo />
        </div>
        <section className={styles['navbar-wrapper']}>
          <Navbar />
        </section>
        <section className={styles['connect-btn-wrapper']}>
          <Link to='contact' smooth={true} duration={500}>
            <ConnectBtn className={styles.btn}>
              Connect Now! 
            </ConnectBtn> 
          </Link> 
        </section>
    </header>
  )
}

export default Header;