import { createContext, ReactNode, useState } from "react";
import challenges from "../../MOCK_DATA.json"; //Só para testes

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
  activeChallenge: Challenge;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(0);
  const [currentExperience, setCurrentExperience] = useState(0);
  const [challengesCompleted, setChallengesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  function levelUp(): void {
    setLevel(level + 1);
  }

  function startNewChallenge(): void {
    const challengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[challengeIndex];

    setActiveChallenge(challenge);
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
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
