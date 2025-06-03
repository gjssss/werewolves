import { GamePhase } from '../type';

const gameState = {
  round: 1,
  phase: GamePhase.NIGHT,
};

export function getGameState() {
  return gameState;
}
