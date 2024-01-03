import styles from "./Home.module.scss";
import imagem from '../../../assets/tela-home.png';


export default function Home() {
  return (
    <>
    <section className="content">
      <div className={styles.container}>
        <div className={styles.textContainer}>      
        <div className={styles.criative}>CRIATIVE</div>        
        <div className={styles.interior}>INTERIOR</div>
        </div>
        <div className={styles.imgContainer}> 
          <img src={imagem} alt='imagem'/>         
        </div>
        <div className={styles.teste}>Teste</div>
      </div>          
    </section>    
    </>
  );
}
