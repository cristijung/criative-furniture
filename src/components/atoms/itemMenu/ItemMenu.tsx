import { Link } from "react-router-dom";
import { ItemMenuProps } from "../../../types/interfaces";
import styles from './ItemMenu.module.scss'

export default function ItemMenu({ children, to}: ItemMenuProps) {
    return (
        <>
        <Link to={to} className={styles.menu}>
            {children} | 
        </Link>
        
        </>
    )
}