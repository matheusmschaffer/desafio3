import styles from './Projects.module.css'
import Project from '../elements/Project'
import imagem1 from '../imgs/project1.svg'

function Projects() {
    return (
        <div id="projects" className={styles.projects}>
            <h3>Projetos</h3>
            <Project img={imagem1} title='Título do projeto' description='Descricao do projeto' />
        </div>
    )
} export default Projects