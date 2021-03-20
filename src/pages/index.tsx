import React from "react";
import ChallengeBox from "../Components/ChallengeBox";
import CompletedChallenges from "../Components/CompletedChallenges";
import Countdown from "../Components/Countdown";
import ExperienceBar from "../Components/ExperienceBar";
import Profile from "../Components/Profile";
import { CountdownProvider } from "../context/CountdownContext";

export default function Home() {
  return (
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
  );
}
