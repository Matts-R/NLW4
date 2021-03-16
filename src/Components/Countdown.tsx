import { useContext } from "react";
import { CountdownContext } from "../context/CountdownContex";

export default function Countdown() {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    startCountdown,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

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
          onClick={resetCountdown}
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
              onClick={resetCountdown}
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
