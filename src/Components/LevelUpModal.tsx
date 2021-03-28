import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";

export default function LevelUpModal() {
  const { level, setModalVisible } = useContext(ChallengesContext);

  return (
    <div className="overlay">
      <div className="level-up-container">
        <strong>NÍVEL</strong>
        <header>{level}</header>
        <strong>Parábens</strong>
        <p>Você alcançou um novo level.</p>

        <button onClick={setModalVisible} type="button" role="button">
          <img src="/Icons/close.svg" alt="Close modal icon" />
        </button>
      </div>
    </div>
  );
}
