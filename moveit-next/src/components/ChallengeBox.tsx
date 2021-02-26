import {useContext} from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/ChallengeBox.module.css'

export default function ChallengeBox() {
   const {activeChallenge,resetChallenge,completeChallange}=useContext(ChallengesContext); 
   const{resetCountDown}=useContext(CountDownContext); 
  function handleChallengeSucceeded(){
      completeChallange();
      resetCountDown();

   }
   function handleChallengeFaild(){
    resetChallenge()
    resetCountDown()
    }
    return (
        <div className={styles.challengeBoxContainer}>

            {/*                        CHALLENGE ACTIVE                      */}

            {activeChallenge&&
            <div className={styles.challengeActive}>
                <header>Ganhe {activeChallenge.amount} xp</header>
                <main>
                    <img src={`icons/${activeChallenge.type}.svg`}/>
                    <strong>Novo desafio</strong>
                    <p>
                    {activeChallenge.description}
                    </p>
                </main>
                <footer>
                        <button 
                        type="button" 
                        className={styles.challengeFaildButton}
                        onClick={handleChallengeFaild}
                        >
                            Falhei
                        </button>
                        <button 
                        type="button" 
                        className={styles.challengeSuccededButton}
                        onClick={handleChallengeSucceeded}
                        >
                            Completei
                        </button>
                    </footer>
            </div>}

             {/*                       CHALLENGE NOT ACTIVE                  */}

            {!activeChallenge&&
            <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio.</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level up"/>
                    Avance de level completando desafios.
                </p>
            </div>}
        </div>
    )
}
