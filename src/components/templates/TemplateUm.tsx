import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from './TemplateUm.module.scss';

import MenuBar from "../molecules/menuBar/MenuBar";
import Home from "../pages/home/home";
import Gallery from "../pages/gallery/gallery";
import Planned from "../pages/planned/planned";
import About from "../pages/about/about";
import Error from "../pages/error";

function TemplateUm() {
    return(
        <>
        
        <div className={styles.corpo}>
        <BrowserRouter>
            <MenuBar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/gallery' element={<Gallery/>}/>
                <Route path='planned' element={<Planned/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='*' element={<Error/>}/>
            </Routes>
        </BrowserRouter>
      </div>
      
        </>
    )
}

export default TemplateUm