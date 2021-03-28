import { GetServerSideProps } from "next";
import React from "react";
import ChallengeBox from "../Components/ChallengeBox";
import CompletedChallenges from "../Components/CompletedChallenges";
import Countdown from "../Components/Countdown";
import ExperienceBar from "../Components/ExperienceBar";
import Profile from "../Components/Profile";
import { ChallengesProvider } from "../context/ChallengesContext";
import { CountdownProvider } from "../context/CountdownContext";

interface User {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { level, currentExperience, challengesCompleted } = context.req.cookies;

  const user: User = {
    level: Number(level),
    currentExperience: Number(currentExperience),
    challengesCompleted: Number(challengesCompleted),
  };

  return {
    props: user,
  };
};

export default function Home(props: User) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <div className="container">
        <title>Move.it - Home</title>

        <ExperienceBar />

        <CountdownProvider>
          <section>
            <div>
              <Profile></Profile>
              <CompletedChallenges></CompletedChallenges>
              <Countdown></Countdown>
            </div>
            <div>
              <ChallengeBox></ChallengeBox>
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  );
}
