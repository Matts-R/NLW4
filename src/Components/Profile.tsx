import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";

export default function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className="profile-container">
      <img src="https://github.com/Matts-R.png" alt="Profile Image" />
      <div>
        <strong>Matheus Henrique</strong>

        <p>
          <img src="/Icons/levelUp.png" alt="level up icon" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
