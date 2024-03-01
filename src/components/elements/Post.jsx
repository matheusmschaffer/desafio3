import styles from './Post.module.css'

function Post({ title, date, subject, description, link }) {
    return (
        <div className={styles.post}>
            <a href={link} target='_blank'>
                <h2>{title}</h2>
                <div>
                    <p>{date}</p><p>{subject}</p><br />
                </div>
                <p>{description}</p>
            </a>
        </div>
    )
} export default Post