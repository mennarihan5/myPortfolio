import styles from './styles.module.scss';
import logo from '../../assets/Rihan logo-transparent-NoTrademark.png';

const Logo = () => {
  return (
    <div className={styles['logo-wrapper']}>
        <img src={logo} alt="Logo" />
    </div>
  )
}

export default Logo;