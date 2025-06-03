import type { AbstractCharacter } from '../role/abstract';
import type { CharacterRole, GamePhase } from '../type';

interface GameRuleOption {
  id: string;
  name: string;
  role: CharacterRole;
  [key: string]: unknown;
}

export function buildGameRulePrompt(option: GameRuleOption) {
  return `
  请你作为一个玩家参加狼人杀的游戏，你的角色是${option.role}，你的名字是${option.name}，你的id是${option.id}。
  `;
}

interface GameStatusOption {
  round: number;
  phase: GamePhase;
  players: AbstractCharacter[];
  [key: string]: unknown;
}

export function buildGameStatusPrompt(option: GameStatusOption) {
  return `
  现在是第${option.round}轮，当前阶段是${option.phase}，玩家有${option.players.length}个，分别是：
  ${option.players.map(player => `- id: ${player.id}, name: ${player.name}, role: ${player.role}`).join('\n')}
  `;
}
