import styles from './styles.module.scss';

const Navbar = () => {
  return (
    <div className={styles['navbar-wrapper']}>
        <ul className={styles.navbar}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar;