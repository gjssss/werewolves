// 游戏角色类型
export enum CharacterRole {
  VILLAGER = '村民',
  WEREWOLF = '狼人',
  SEER = '预言家',
  WITCH = '女巫',
}

// 游戏阶段
export enum GamePhase {
  NIGHT = 'night',
  DAY_DISCUSSION = 'day_discussion',
  DAY_VOTE = 'day_vote',
  GAME_OVER = 'game_over',
}
