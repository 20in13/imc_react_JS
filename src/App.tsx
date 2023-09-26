import React, { useState } from 'react';
import styles from './App.module.css'
import poweredImage from './assets/powered.png'
import { levels, calculateImc, Level } from './assets/helpers/imc';
import { GridItem } from './components/GridItem/Index';
import leftarrow from './assets/leftarrow.png'

const App = () => {

  const [weight, setWeihgt] = useState(0);
  const [height, setHeight] = useState(0);
  const [toShow, setToShow] = useState<Level | null>(null)

  const handleCalc = ()  => {
    if (weight && height){
        setToShow( calculateImc (height, weight) );
    }
    else{
      alert('Informe o Peso e a Altura')
    }
  }

  const handleBack = () => {
    setToShow(null);
    setHeight(0);
    setWeihgt(0);
  }


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
          /* ? = RETORNAR */
          value={height > 0 ? height : ''} 
          onChange={ t => setHeight(parseFloat(t.target.value)) }

          />
          <input
          type="number"
          placeholder='informe seu peso. EX 50.3 (em kilo)'
          value={weight > 0 ? weight : ''} 
          onChange={t => setWeihgt(parseFloat(t.target.value))}
          />

          <button onClick={ handleCalc }>Calcular</button> 
                   
      </div>

        <div className={styles.rightSide}>
          {!toShow &&
            <div className={styles.grid}>
            {levels.map((item, key) => (
              <GridItem item={item} /> 
            
            ))} 
          </div>
          }
          {toShow &&
          <div className={styles.rightBig}>
            <div className={styles.rightArrow} onClick={handleBack}>
              <img src={leftarrow} alt="seta" width={25} />
            </div>
            <GridItem item={toShow} />
          </div>
          }
        </div>

      </div>


    </div>
  )
}

export default App;