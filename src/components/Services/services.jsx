import styles from './styles.module.scss';
import WebDev from '../../assets/html-coding-svgrepo-com.svg?react';
import Design from '../../assets/art-palette-svgrepo-com.svg?react';
import Consult from '../../assets/chat-talk-svgrepo-com.svg?react';


const Services = () => {
  return (
    <section className={styles['services-container']}>
      <h2 className={styles.title}>My Services</h2>
      <div className={styles['services-wrapper']}>
        <div className={styles.service}>
          <p>Web Development</p>
          <WebDev />
        </div>
        <div className={styles.service}>
          <p>Web Design</p>
          <Design />
        </div>
        <div className={styles.service}>
          <p>Consultations</p>
          <Consult className={styles.consult} />
        </div>
      </div>
    </section>
  )
}

export default Services;