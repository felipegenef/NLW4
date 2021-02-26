import { useContext } from 'react';
import { CountDownContext } from '../contexts/CountDownContext'
import styles from '../styles/components/ContDown.module.css';
export default function ContDown() {
   
    const {
        minutes,
        seconds,
        hasFinished,
        resetCountDown,
        isActive,
        startCountDown}=useContext(CountDownContext); 
    /**
     * verifica se tem somente um caracter e adiciona "0" se for o caso
     * após isso ele separa em dois itens o número (ex:"25"=["2","5"])
     */
    const [minuteLeft,minuteRight]=String(minutes).padStart(2,'0').split('');
    const [secondLeft,secondRight]=String(seconds).padStart(2,'0').split('');
    
   
    return (
        <div>
            <div className={styles.contDownContainer}>
                 {/*                        Clock                            */}
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>
            {/*                    Botão Ciclo Encerrado                     */}

            {hasFinished &&
            <button  disabled  className={styles.countDownButton}>
                Ciclo encerrado
            </button>}

             {/*                   Botão abandonar ciclo                     */}

           {isActive&&!hasFinished&&
            <button type="button" onClick={resetCountDown} className={`${styles.countDownButton} ${styles.countDownButtonActive}`}>
                Abandonar ciclo
            </button>}

            {/*                   Botão iniciar um ciclo                     */}

            {!isActive && !hasFinished&&
            <button type="button" onClick={startCountDown} className={styles.countDownButton}>
                Iniciar um ciclo
            </button>}
        </div>
       
    )
}
