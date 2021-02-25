import {createContext, useState,ReactNode} from 'react';
import challenges from '../../../challenges.json'
interface ChallengesProviderProps{
    children:ReactNode
}
interface challenge{
    type:'body'|'eye',
    description:string,
    ammount:number
}
interface ChallengesContextData{
        level:number,
        challengesCompleted:number,
        currentExperience:number,
        activeChallenge:challenge,
        experienceToNextLevel:number
        levelUp:()=>void,
        resetChallenge:()=>void,
        startNewChallenge:()=>void
}
export const ChallengesContext=createContext({}as ChallengesContextData);

export function ChallengesProvider({children}:ChallengesProviderProps){
    const [level, setlevel] = useState(1);
    const [currentExperience, setcurrentExperience] = useState(0);
    const [challengesCompleted, setchallengesCompleted] = useState(0);
    const [activeChallenge, setactiveChallenge] = useState(null);
    const experienceToNextLevel=Math.pow((level+1)*4,2);
function levelUp(){
  setlevel(level+1);
}
function resetChallenge(){
    setactiveChallenge(null);
}
function startNewChallenge(){
const randomChallengeIndex=Math.floor(Math.random()*challenges.length)
const challenge= challenges[randomChallengeIndex];
setactiveChallenge(challenge);
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
        experienceToNextLevel
        }}>
    {children}
    </ChallengesContext.Provider>
    )
}