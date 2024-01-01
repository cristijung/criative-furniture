import ItemMenu from "../../atoms/itemMenu/ItemMenu";
import UrlMenu from "../../atoms/urlMenu/UrlMenu";
import styles from './MenuBar.module.scss';


export default function MenuBar() {
    return(
        <>
        <section className={styles.section}>        
            <ItemMenu to='/'>| Home</ItemMenu>            
            <ItemMenu to='/gallery'>Gallery</ItemMenu>            
            <ItemMenu to='/planned'>Planned Environment</ItemMenu>            
            <ItemMenu to='/about'>About Us</ItemMenu>            
            <UrlMenu to='/'>criativefurniture.net</UrlMenu>     
        </section>
        </>
    )
}