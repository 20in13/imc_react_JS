import styles from './App.module.css'
import poweredImage from './assets/powered.png'

const App = () => {
  return (
    <div className={styles.main}>


      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="Adult Chupacabra" width={150} />
        </div>

      </header>

      



      <div className={styles.container}>

        <div className={styles.leftSide}>
          <h1>Calculo de IMC</h1>
          <p>O IMC (Índice de Massa Corporal) é reconhecido pela Organização Mundial da Saúde (OMS) como um padrão internacional que avalia se as pessoas, entre 20 e 59 anos, estão com peso ideal ou em excesso, em relação a sua altura. No entanto, vale lembrar que o resultado não indica como está o estado nutricional. </p>

          <input type="number"
          placeholder="informe sua altura. EX 1.50 (em metros)"
          />
          <input type="number"
          placeholder='informe seu peso. EX 50.3'
          />
          <button>Calcular</button>          
        </div>





        <div className={styles.rightSide}>
          joinha
        </div>

      </div>


    </div>
  )
}

export default App;