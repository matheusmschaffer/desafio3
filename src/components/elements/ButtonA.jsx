import styles from './ButtonA.module.css'

function ButtonA({ link, text }) {
    return (
        <div>
            <a href={link} download>
                <button className={styles.btnA} >{text}</button>
            </a>
        </div>
    )
} export default ButtonA