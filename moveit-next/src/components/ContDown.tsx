import { useState,useEffect } from 'react';
import styles from '../styles/components/ContDown.module.css';
export default function ContDown() {
    const [active ,setActive] = useState(false);
    const [time ,setTime] = useState(25*60); // tempo em minutos
    const minutes=Math.floor(time/60);//arredondar para baixo
    const seconds=Math.floor(time%60);
    /**
     * verifica se tem somente um caracter e adiciona "0" se for o caso
     * após isso ele separa em dois itens o número (ex:"25"=["2","5"])
     */
    const [minuteLeft,minuteRight]=String(minutes).padStart(2,'0').split('');
    const [secondLeft,secondRight]=String(seconds).padStart(2,'0').split('');
    function startCountDown(){
        setActive(true);
    }
    useEffect(() => {
     if(active&&time>0){
         setTimeout(()=>{
             setTime(time-1);
         },1000);
     }
    }, [active,time])
    return (
        <div>
            <div className={styles.contDownContainer}>
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
            <button type="button" onClick={startCountDown} className={styles.countDownButton}>
                Iniciar um ciclo
            </button>
        </div>
       
    )
}
