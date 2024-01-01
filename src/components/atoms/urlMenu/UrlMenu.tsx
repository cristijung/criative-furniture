import { Link } from "react-router-dom";
import { UrlMenuProps } from "../../../types/interfaces";
import styles from './UrlMenu.module.scss'

export default function UrlMenu({ children, to}: UrlMenuProps) {
    return (
        <>
        <Link to={to} className={styles.menu}>
            {children}
        </Link>
        
        </>
    )
}