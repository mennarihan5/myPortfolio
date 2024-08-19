import styles from './styles.module.scss';
import logo from '../../assets/Rihan logo-White Transparent.png';

const Logo = () => {
  return (
    <div className={styles['logo-wrapper']}>
        <img src={logo} alt="Logo" />
    </div>
  )
}

export default Logo;