import styles from './styles.module.scss';
import projectsData from './projectsData';

const Projects = () => {
  return (
    <div className={styles['projects-container']}>
        <h2 className={styles.title}>My Projects</h2>
        <div className={styles['projects-wrapper']}>
            {
                projectsData.map((project) => (
                    <div className={styles.project} key={project.id}>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <img src={project.img} alt={project.desc} />
                            <p>{project.desc}</p>
                        </a>
                    </div>
                ) )
            }
        </div>
    </div>
  )
}

export default Projects;