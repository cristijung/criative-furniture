import ItemMenu from "../../atoms/itemMenu/ItemMenu";


export default function MenuBar() {
    return(
        <>
        <div>
            <ItemMenu to='/'>Home</ItemMenu>            
            <ItemMenu to='/gallery'>Gallery</ItemMenu>            
            <ItemMenu to='/planned'>Planned Environment</ItemMenu>            
            <ItemMenu to='/about'>About Us</ItemMenu>            
        </div>
        
        </>
    )
}