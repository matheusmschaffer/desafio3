import { FaFacebookSquare, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footer}>
            <ul>
                <li><a href="http://www.facebook.com/omatheus99" target="_blank"><FaFacebookSquare size={30} /></a></li>
                <li><a href="http://www.instagram.com/omatheus99" target="_blank"><FaInstagram size={30} /></a></li>
                <li><a href='https://github.com/matheusmschaffer' target='_blank'><FaGithub size={30} /></a></li>
                <li><a href='https://www.linkedin.com/in/matheus-martins-schaffer-54b4961b8/' target='_blank'><FaLinkedin size={30} /></a></li>
            </ul>
            <p>Copyright ©2030 All rights reserved</p>
        </div>
    )
} export default Footer