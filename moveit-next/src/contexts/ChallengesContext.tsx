import {createContext, useState,ReactNode, useEffect} from 'react';
import challenges from '../../challenges.json'
import Cookies from 'js-cookie'
import LevelUpModal from '../components/LevelUpModal';
interface ChallengesProviderProps{
    children:ReactNode,
    level:number,
    currentExperience:number,
    challengesCompleted:number
}
interface challenge{
    type:'body'|'eye',
    description:string,
    amount:number
}
interface ChallengesContextData{
        level:number,
        challengesCompleted:number,
        currentExperience:number,
        activeChallenge:challenge,
        experienceToNextLevel:number
        levelUp:()=>void,
        resetChallenge:()=>void,
        startNewChallenge:()=>void,
        completeChallange:()=>void,
        closeLevelUpModal:()=>void
}
export const ChallengesContext=createContext({}as ChallengesContextData);

export function ChallengesProvider({children,...rest}:ChallengesProviderProps){
    const [level, setlevel] = useState(rest.level??1);
    const [currentExperience, setcurrentExperience] = useState(rest.currentExperience??0);
    const [challengesCompleted, setchallengesCompleted] = useState(rest.challengesCompleted??0);
    const [activeChallenge, setactiveChallenge] = useState(null);
    const [isLevelUpModalOpen, setisLevelUpModalOpen] = useState(false);
    const experienceToNextLevel=Math.pow((level+1)*4,2);
function levelUp(){
  setlevel(level+1);
  setisLevelUpModalOpen(true);
}
function closeLevelUpModal(){
    setisLevelUpModalOpen(false);
}
function resetChallenge(){
    setactiveChallenge(null);
}
//como array esta vazio ele serve como um componnent did mount
useEffect(() => {
    Notification.requestPermission();
}, [])
//ativa sempre que se altera
useEffect(() => {
  Cookies.set('level',String(level));
  Cookies.set('currentExperience',String(currentExperience));
  Cookies.set('challengesCompleted',String(challengesCompleted));

}, [level,currentExperience,challengesCompleted]);

function startNewChallenge(){

const randomChallengeIndex=Math.floor(Math.random()*challenges.length)
const challenge= challenges[randomChallengeIndex];

setactiveChallenge(challenge);

/**
 * Se tiver permissão toca audio com a notificação.
 */
new Audio('/notification.mp3').play();
/**
 * Se tiver permissão mostra titulo com emoji e quantidade de xp do 
 * proximo desafio, caso contrario pede permissão.
 * 
 */
if(Notification.permission==='granted'){
   new Notification('Novo desafio!',{
        body:`Valendo ${challenge.amount}xp`,
        icon:'/emoji2.png'
      });
}else{
    Notification.requestPermission(); 
}

}
function completeChallange(){
    if(!activeChallenge){
        return;
    }
    const {amount}=activeChallenge;
    let finalExperience =currentExperience+amount;
    if(finalExperience>=experienceToNextLevel){
        finalExperience=finalExperience-experienceToNextLevel;
        levelUp()
    }
    setcurrentExperience(finalExperience);
    setactiveChallenge(null);
    setchallengesCompleted(challengesCompleted+1);
}
    return ( 
    <ChallengesContext.Provider 
    value={{
        level,
        levelUp,
        challengesCompleted,
        currentExperience,
        startNewChallenge,
        resetChallenge,
        activeChallenge,
        experienceToNextLevel,
        completeChallange,
        closeLevelUpModal
        }}>
    {children}
    {isLevelUpModalOpen&&<LevelUpModal/>}
    </ChallengesContext.Provider>
    )
}