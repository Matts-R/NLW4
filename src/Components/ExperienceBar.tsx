import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";

export default function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  let percentToNextLevel = Math.round(
    (currentExperience * 100) / experienceToNextLevel
  );

  return (
    <header className="experience-bar">
      <span>0 exp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }}></div>

        <span
          className="current-experience"
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </span>
      </div>
      <span>{experienceToNextLevel} exp</span>
    </header>
  );
}
