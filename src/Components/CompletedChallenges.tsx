import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";

export default function CompletedChallenges() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className="completedChallengesContainer">
      <span>Desafios Completos</span>
      <span> {level}</span>
    </div>
  );
}
