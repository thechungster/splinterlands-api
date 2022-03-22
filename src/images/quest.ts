export const QUEST_IMAGE = {
  EARTH: 'https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/quests/btn_round_earth_active.svg',
  FIRE: 'https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/quests/btn_round_fire_active.svg',
  DEATH: 'https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/quests/btn_round_death_active.svg',
  LIFE: 'https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/quests/btn_round_life_active.svg',
  WATER: 'https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/quests/btn_round_water_active.svg',
  DRAGON: 'https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/quests/btn_round_dragon_active.svg',
  NEUTRAL: 'https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/quests/btn_round_neutral_active.svg',
  SNIPE: 'https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/quests/btn_round_snipe_active.svg',
  SNEAK: 'https://d36mxiodymuqjm.cloudfront.net/website/ui_elements/quests/btn_round_sneak_active.svg',
};

export function getQuestImage(quest: string): string {
  const upper = quest.toUpperCase();
  // @ts-ignore
  return QUEST_IMAGE[upper] || '';
}
