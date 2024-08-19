import Logo from '../Logo/logo';
import Navbar from '../Navbar/navbar';
import ConnectBtn from '../ConnectBtn/connectBtn';
import styles from './styles.module.scss';

const Header = () => {
  return (
    <div className={styles['header-container']}>
        <div className={styles['logo-wrapper']}>
          <Logo />
        </div>
        <div className={styles['navbar-wrapper']}>
          <Navbar />
        </div>
        <div className={styles['connect-btn-wrapper']}>
          <ConnectBtn />
        </div>
    </div>
  )
}

export default Header;