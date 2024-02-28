import styles from './Project.module.css'


function Project({ img, title, description }) {
    return (
        <div className={styles.project}>
            <img src={img} />
            <div className={styles.description}>
                <h2>{title}</h2>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
} export default Project