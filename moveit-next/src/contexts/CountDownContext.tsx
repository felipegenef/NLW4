import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengesContext } from "./ChallengesContext";
interface ContDownContextData{
    minutes:number,
    seconds:number,
    hasFinished:boolean,
    isActive:boolean,
    startCountDown:()=>void,
    resetCountDown:()=>void

}
interface CountDownProviderProps{
    children:ReactNode
}
export const CountDownContext=createContext({}as ContDownContextData);

export function CountDownProvider({children}:CountDownProviderProps){
    const {startNewChallenge}=useContext(ChallengesContext); 
    const [isActive ,setIsActive] = useState(false);
    const [hasFinished, sethasFinished] = useState(false);
    const [time ,setTime] = useState(25*60); // tempo em minutos
    const minutes=Math.floor(time/60);//arredondar para baixo
    const seconds=Math.floor(time%60);
    function startCountDown(){
        setIsActive(true);
    }
     //variavel para administrar os timeouts
     let countDownTimeOut:NodeJS.Timeout;
    function resetCountDown(){
        //para a execução e limpa todos os timeouts passados
        clearTimeout(countDownTimeOut);
        setIsActive(false);
        setTime(25*60)
        sethasFinished(false)
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
return(
<CountDownContext.Provider value ={{
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountDown,
    resetCountDown
}}>
    {children}
</CountDownContext.Provider>)
}