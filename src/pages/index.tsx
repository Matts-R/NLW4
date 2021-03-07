import CompletedChallenges from "../Components/CompletedChallenges";
import Countdown from "../Components/Countdown";
import ExperienceBar from "../Components/ExperienceBar";
import Profile from "../Components/Profile";

export default function Home() {
  return (
    <div className="container">
      <title>Move.it - Home</title>

      <ExperienceBar />

      <section>
        <div>
          <Profile></Profile>
          <CompletedChallenges></CompletedChallenges>
          <Countdown></Countdown>
        </div>
        <div></div>
      </section>
    </div>
  );
}
