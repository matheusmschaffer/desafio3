import styles from './Navbar.module.css'
import Nav from 'react-bootstrap/Nav';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <ul>
                <li><Nav.Link href='#projects'>Projetos</Nav.Link></li>
                <li><Nav.Link href='#blog'>Blog</Nav.Link></li>
                <li>Contato</li>
            </ul>
        </div>
    )
} export default Navbar