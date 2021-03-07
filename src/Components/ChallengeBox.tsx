export default function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className="challenge-box-container">
      {hasActiveChallenge ? (
        <div className="active-challenge-box">
          <header>Ganhe 400 xp </header>

          <main>
            <img src="/Icons/swords.png" alt="" />
            <strong>Novo Desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos</p>
          </main>

          <footer>
            <button type="button" role="button" className="button-completed">
              Completado
            </button>
            <button type="button" role="button" className="button-failed">
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
