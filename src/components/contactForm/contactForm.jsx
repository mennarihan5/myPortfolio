import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './styles.module.scss';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_s9p181j', 'template_mt4xf6h', form.current, {
        publicKey: 'weU5rQWAqsWO3dO1o',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  return (
    <form className={styles.form} ref={form} onSubmit={sendEmail}>
      <label className={styles.name}>Name</label>
      <input className={styles['name-input']} type="text" name="from_name" />
      <label className={styles.email}>Email</label>
      <input className={styles['email-input']} type="email" name="user_email" />
      <label className={styles.msg}>Message</label>
      <textarea className={styles.text} name="message" />
      <input className={styles['submit-btn']} type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;