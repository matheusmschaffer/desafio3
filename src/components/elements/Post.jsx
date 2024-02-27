import styles from './Post.module.css'

function Post({ title, date, subject, description }) {
    return (
        <div className={styles.post}>
            <h2>{title}</h2>
            <div>
                <p>{date}</p><p>{subject}</p><br />
            </div>
            <p>{description}</p>

        </div>
    )
} export default Post