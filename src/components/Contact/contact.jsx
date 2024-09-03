import styles from './styles.module.scss';
import contactData from './contactData'
import ContactForm from '../contactForm/contactForm';

const Contact = () => {
  return (
    <div className={styles['contact-container']}>
      <h2 className={styles.title}>Get in touch</h2>
      <div className={styles['contact-info']}>
        <h3 className={styles['contact-title']}>Contact me!</h3>
        <p className={styles['contact-text']}>
          I'm currently avaliable to take on new projects, 
          so feel free to send me a message about anything that you want me to work on. 
          You can contact anytime.
        </p>
        {
          contactData.map((data) => {
            return (
              <div className={styles['contact-data']} key={data.id}>
                <div className={styles.icon}>{data.icon}</div>
                <p className={styles.data}>{data.data}</p>
              </div>
            )
          })
        }
      </div>
      <div className={styles['contact-form']}>
        <ContactForm />
      </div>
    </div>
  )
}

export default Contact;