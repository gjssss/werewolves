import { CharacterRole } from '../type';
import { AbstractCharacter } from './abstract';

export class WolfCharacter extends AbstractCharacter {
  constructor(id: string, name: string) {
    super(id, name, CharacterRole.WEREWOLF);
  }
}
