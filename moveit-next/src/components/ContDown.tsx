import { useState,useEffect, useContext } from 'react';
import {ChallengesContext} from '../contexts/ChallengesContext'
import styles from '../styles/components/ContDown.module.css';
export default function ContDown() {
    const {startNewChallenge}=useContext(ChallengesContext); 
    const [isActive ,setIsActive] = useState(false);
    const [hasFinished, sethasFinished] = useState(false);
    const [time ,setTime] = useState(0.05*60); // tempo em minutos
    const minutes=Math.floor(time/60);//arredondar para baixo
    const seconds=Math.floor(time%60);
    //variavel para administrar os timeouts
    let countDownTimeOut:NodeJS.Timeout;
    /**
     * verifica se tem somente um caracter e adiciona "0" se for o caso
     * após isso ele separa em dois itens o número (ex:"25"=["2","5"])
     */
    const [minuteLeft,minuteRight]=String(minutes).padStart(2,'0').split('');
    const [secondLeft,secondRight]=String(seconds).padStart(2,'0').split('');
    
    function startCountDown(){
        setIsActive(true);
    }
    function resetCountDown(){
        //para a execução e limpa todos os timeouts passados
        clearTimeout(countDownTimeOut);
        setIsActive(false);
        setTime(25*60)
    }
    useEffect(() => {
     if(isActive&&time>0){
       countDownTimeOut=  setTimeout(()=>{
             setTime(time-1);
         },1000);
     }
     else if(isActive &&time===0){
        sethasFinished(true);
        setIsActive(false);
        startNewChallenge()
     }
    }, [isActive,time])
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
