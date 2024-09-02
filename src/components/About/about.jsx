import styles from './about.module.scss';
import reactLogo from '../../assets/-HPXhG__react.svg';
import nextLogo from '../../assets/next-js-svgrepo-com.svg';
import jsLogo from '../../assets/javascript-logo-svgrepo-com.svg';
import tailwind from '../../assets/tailwindcss-svgrepo-com.svg';
import sass from '../../assets/sass-svgrepo-com.svg';
import bootstrap from '../../assets/bootstrap-svgrepo-com.svg';
import css from '../../assets/css-3-logo-svgrepo-com.svg';
import html from '../../assets/html-5-logo-svgrepo-com.svg';

const About = () => {
  return (
    <div className={styles['about-container']}>
      <h2 className={styles.title}>About me</h2>
      <div className={styles.text}>
        I am a motivated Frontend Developer with a strong foundation in web development. Although I am early in my career, I have already gained valuable experience by working on several projects that have helped me develop a solid understanding of frontend technologies.
        <br />
        <br />
        My passion for frontend development drives me to continuously learn and improve, and I approach each project with enthusiasm and dedication, eager to contribute to the success and growth of the teams I work with.
      </div>
      <div className={styles.skills}>
        <img src={reactLogo} alt='React Logo' />
        <img src={nextLogo} alt='Next Logo' />
        <img src={jsLogo} alt='JS Logo' />
        <img src={tailwind} alt='Tailwind Logo' />
        <img src={bootstrap} alt='Bootstrap Logo' />
        <img src={sass} alt='SASS Logo' />
        <img src={css} alt='CSS Logo' />
        <img src={html} alt='html Logo' />
      </div>
    </div>
  )
}

export default About;