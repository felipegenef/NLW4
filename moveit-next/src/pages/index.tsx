import CompletedChallenges from '../components/CompletedChallenges';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import CountDown from '../components/ContDown';
import styles from '../styles/pages/Home.module.css'
import Head from 'next/head';
import {GetServerSideProps} from 'next'
import ChallengeBox from '../components/ChallengeBox';
import {CountDownProvider}from '../contexts/CountDownContext'
import {ChallengesProvider}from '../contexts/ChallengesContext'
interface HomeProps{
  level:number,
  currentExperience:number,
  challengesCompleted:number
}
export default function Home(props:HomeProps) {
const {
  level,
  currentExperience,
  challengesCompleted
}=props;
  return (
    <ChallengesProvider
     level={level}
     currentExperience={currentExperience}
     challengesCompleted={challengesCompleted}>
<div className={styles.container}>
   <Head>
     <title>Inicio | move.it</title>
   </Head>
      <ExperienceBar/>
      <CountDownProvider>
      <section>
        <div>
        <Profile/>
        <CompletedChallenges/>
        <CountDown/>
        </div>
        <div>
        <ChallengeBox/>
        </div>
      </section>
      </CountDownProvider>
    </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx)=>{
  const {level,currentExperience,challengesCompleted} =ctx.req.cookies
  return {
    props:{
      level:Number(level),
      currentExperience:Number(currentExperience),
      challengesCompleted:Number(challengesCompleted)
    }
  }
}