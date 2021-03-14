import { useContext, useEffect, useState } from "react";
import { ChallengesContext } from "../context/ChallengesContext";

let countdownTimeOut: NodeJS.Timeout;

export default function Countdown() {
  const { startNewChallenge } = useContext(ChallengesContext);

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountDown() {
    clearTimeout(countdownTimeOut);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeOut = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (time === 0) {
      setIsActive(false);
      setHasFinished(true);
      startNewChallenge();
    }
  }, [isActive, time]);

  return (
    <div>
      <div className="countdown-container">
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>

      {hasFinished ? (
        <button
          disabled={true}
          className="countdown-button-disable"
          onClick={resetCountDown}
        >
          Ciclo encerrado
        </button>
      ) : (
        <>
          {isActive ? (
            <button
              type="button"
              role="button"
              className="countdown-button-active"
              onClick={resetCountDown}
            >
              Finalizar ciclo atual
            </button>
          ) : (
            <button
              type="button"
              role="button"
              className="countdown-button"
              onClick={startCountdown}
            >
              Iniciar um novo ciclo
            </button>
          )}
        </>
      )}
    </div>
  );
}
