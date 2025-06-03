import { DecisionEngine } from '../decision/decisionEngine';
import { MemoryManager } from '../memory/memoryManager';
import { buildGameRulePrompt, buildGameStatusPrompt } from '../prompt/gamerule';
import type { CharacterRole } from '../type';

export abstract class AbstractCharacter {
  public isLive = true;
  private memoryManager: MemoryManager;
  private decisionEngine: DecisionEngine;

  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly role: CharacterRole,
  ) {
    this.memoryManager = new MemoryManager();
    this.decisionEngine = new DecisionEngine();
  }

  public getGameRulePrompt() {
    return `
    ${buildGameRulePrompt({
      id: this.id,
      name: this.name,
      role: this.role,
    })}
    `;
  }
}
