import styles from './styles.module.scss';

const Services = () => {
  return (
    <div className={styles['services-container']}>
      <h2 className={styles.title}>My Services</h2>
      <div className={styles['services-wrapper']}>
        <div className={styles.service}>Web Development</div>
        <div className={styles.service}>Web Design</div>
        <div className={styles.service}>Consultations</div>
      </div>
    </div>
  )
}

export default Services;