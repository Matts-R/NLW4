import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

  return (
    <div className="challenge-box-container">
      {activeChallenge ? (
        <div className="active-challenge-box">
          <header>Ganhe {activeChallenge.amount} xp </header>

          <main>
            <img src="/Icons/swords.png" alt="" />
            <strong>Novo Desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button type="button" role="button" className="button-completed">
              Completado
            </button>
            <button
              type="button"
              role="button"
              className="button-failed"
              onClick={resetChallenge}
            >
              Falhado
            </button>
          </footer>
        </div>
      ) : (
        <div className="inactive-challenge-box">
          <strong>Finalize um ciclo para receber novos desafios</strong>
          <p>
            <img src="/Icons/save.png" alt="level up image" />
            Avance de level completando desafios.
          </p>
        </div>
      )}
    </div>
  );
}
