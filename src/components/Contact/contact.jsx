import styles from './styles.module.scss';
import contactData from './contactData'
import ContactForm from '../contactForm/contactForm';

const Contact = () => {
  return (
    <div className={styles['contact-container']}>
      <h2 className={styles.title}>Get in touch</h2>
      <div className={styles['contact-wrapper']}>
        <div className={styles['contact-info']}>
          <h3 className={styles['contact-title']}>Contact me!</h3>
          <p className={styles['contact-text']}>
            I’m open to new projects and would love to hear from you about any work you have in mind. <br />
            Feel free to reach out at any time if you’re interested in collaborating or discussing potential opportunities.
          </p>
          {
            contactData.map((data) => {
              return (
                <div className={styles['contact-data']} key={data.id}>
                  <div className={styles.icon}>{data.icon}</div>
                  <a href={data.link}>
                    <p className={styles.data}>{data.data}</p>
                  </a>
                </div>
              )
            })
          }
        </div>
        <div className={styles['contact-form']}>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default Contact;