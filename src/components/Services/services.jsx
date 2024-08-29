import styles from './styles.module.scss';

const Services = () => {
  return (
    <div className={styles['services-wrapper']}>
      <h2 className={styles.title}>My Services</h2>
      <div className={styles['services-wrapper']}>
        <div className={styles.service}>Service 1</div>
        <div className={styles.service}>Service 1</div>
        <div className={styles.service}>Service 1</div>
      </div>
    </div>
  )
}

export default Services;