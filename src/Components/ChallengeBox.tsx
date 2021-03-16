import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";
import { CountdownContext } from "../context/CountdownContex";

export default function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );

  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded(): void {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed(): void {
    resetChallenge();
    resetCountdown();
  }

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
            <button
              type="button"
              role="button"
              className="button-completed"
              onClick={handleChallengeSucceeded}
            >
              Completado
            </button>
            <button
              type="button"
              role="button"
              className="button-failed"
              onClick={handleChallengeFailed}
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
