import Cookies from "js-cookie";
import { createContext, ReactNode, useEffect, useState } from "react";
import challenges from "../../MOCK_DATA.json"; //Só para testes
import LevelUpModal from "../Components/LevelUpModal";

interface Challenge {
  type: String;
  description: String;
  amount: Number;
}

interface ChallengesContextData {
  level: number;
  currentExperience: number;
  challengesCompleted: number;
  experienceToNextLevel: number;
  levelUp: () => void;
  startNewChallenge: () => void;
  resetChallenge: () => void;
  completeChallenge: () => void;
  setModalVisible: () => void;
  activeChallenge: Challenge;
}

interface ChallengesProviderProps {
  children: ReactNode;
  level: number;
  currentExperience: number;
  challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({
  children,
  ...rest
}: ChallengesProviderProps) {
  const [level, setLevel] = useState(rest.level ?? 1);
  const [currentExperience, setCurrentExperience] = useState(
    rest.currentExperience ?? 0
  );
  const [challengesCompleted, setChallengesCompleted] = useState(
    rest.challengesCompleted ?? 0
  );

  const [activeChallenge, setActiveChallenge] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  useEffect(() => {
    Cookies.set("level", String(level));
    Cookies.set("currentExperience", String(currentExperience));
    Cookies.set("challengesCompleted", String(challengesCompleted));
  }, [level, currentExperience, challengesCompleted]);

  function levelUp(): void {
    setLevel(level + 1);
    setModalVisible();
  }

  function setModalVisible() {
    setIsModalOpen(false);
  }

  function startNewChallenge(): void {
    const challengeIndex: number = Math.floor(
      Math.random() * challenges.length
    );
    const challenge: Challenge = challenges[challengeIndex];

    setActiveChallenge(challenge);

    sendNewChallengeAlert(challenge.amount);
  }

  function sendNewChallengeAlert(quantityPoints: Number): void {
    if (Notification.permission === "granted") {
      new Notification("Novo desafio !!", {
        body: `Valendo ${quantityPoints} pontos`,
      });
    }
  }

  function resetChallenge(): void {
    setActiveChallenge(null);
  }

  function completeChallenge(): void {
    if (!activeChallenge) {
      return;
    }

    const currentChallengeXpAmount: number = activeChallenge.amount;

    let finalExperience: number = currentExperience + currentChallengeXpAmount;

    if (finalExperience >= experienceToNextLevel) {
      finalExperience -= experienceToNextLevel;
      levelUp();
    }

    setCurrentExperience(finalExperience);
    setActiveChallenge(null);
    setChallengesCompleted(challengesCompleted + 1);
  }

  return (
    <ChallengesContext.Provider
      value={{
        level,
        currentExperience,
        experienceToNextLevel,
        activeChallenge,
        challengesCompleted,
        levelUp,
        startNewChallenge,
        resetChallenge,
        completeChallenge,
        setModalVisible,
      }}
    >
      {children}
      {isModalOpen && <LevelUpModal></LevelUpModal>}
    </ChallengesContext.Provider>
  );
}
