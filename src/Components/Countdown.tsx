import { useEffect, useState } from "react";

export default function Countdown() {
  const [time, setTime] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  const [buttonMessage, setButtonMessage] = useState("Iniciar um novo ciclo");

  function startCountdown() {
    setIsActive(true);
    setButtonMessage("Encerrar ciclo atual");
  }

  useEffect(() => {
    if (isActive && time > 0) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
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
      <button
        type="button"
        role="button"
        className="countdown-button"
        onClick={startCountdown}
      >
        {buttonMessage}
      </button>
    </div>
  );
}