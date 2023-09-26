import { Level, calculateImc } from '../../assets/helpers/imc';
import styles from './gridItem.module.css'
import upImage from '../../assets/up.png';
import downImage from '../../assets/down.png'

type Props = {
    item: Level
}

export const GridItem = ({item} : Props) => { 
    return(
        <div className={styles.main} style={{backgroundColor: item.color}}>
           <div className={styles.gridIcon}>
            <img src={ item.icon === 'up' ? upImage : downImage} width='30' />
           </div>
           {item.yourImc &&
                <div className={styles.yourImc}>Seu IMC é: {item.yourImc.toFixed(2) }</div>
           }
           <div className={styles.gridTitle}>{item.title}</div>
           <div className={styles.gridInfo}>
            <>
                IMC esta entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
            </>
           </div>
        </div>
    )
}