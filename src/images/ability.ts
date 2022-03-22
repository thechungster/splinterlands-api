/*
Generate using
var str = 'export const ABILITY_IMAGE = {'
window.abilities.forEach((ability) => {
    var key = ability.name.toUpperCase().split(' ').join('_');
    var name = ability.name.toLowerCase().split(' ').join('-');
    str += key + ':' + `'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_${name}.png',`;
    str += '\n';
})
copy(str);
*/
export const ABILITY_IMAGE = {
  AFFLICTION: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_affliction.png',
  AMPLIFY: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_amplify.png',
  BACKFIRE: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_backfire.png',
  BLAST: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_blast.png',
  BLIND: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_blind.png',
  BLOODLUST: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_bloodlust.png',
  CAMOUFLAGE: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_camouflage.png',
  CLEANSE: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_cleanse.png',
  CLOSE_RANGE: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_close-range.png',
  CRIPPLE: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_cripple.png',
  DEATHBLOW: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_deathblow.png',
  DEMORALIZE: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_demoralize.png',
  DISPEL: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_dispel.png',
  DIVINE_SHIELD: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_divine-shield.png',
  DODGE: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_dodge.png',
  DOUBLE_STRIKE: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_double-strike.png',
  ENRAGE: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_enrage.png',
  FLYING: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_flying.png',
  FORCEFIELD: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_forcefield.png',
  GIANT_KILLER: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_giant-killer.png',
  HALVING: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_halving.png',
  HEADWINDS: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_headwinds.png',
  HEAL: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_heal.png',
  IMMUNITY: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_immunity.png',
  INSPIRE: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_inspire.png',
  KNOCK_OUT: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_knock-out.png',
  LAST_STAND: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_last-stand.png',
  LIFE_LEECH: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_life-leech.png',
  MAGIC_REFLECT: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_magic-reflect.png',
  OPPORTUNITY: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_opportunity.png',
  OPPRESS: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_oppress.png',
  PHASE: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_phase.png',
  PIERCING: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_piercing.png',
  POISON: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_poison.png',
  PROTECT: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_protect.png',
  REACH: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_reach.png',
  RECHARGE: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_recharge.png',
  REDEMPTION: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_redemption.png',
  REPAIR: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_repair.png',
  RESURRECT: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_resurrect.png',
  RETALIATE: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_retaliate.png',
  RETURN_FIRE: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_return-fire.png',
  RUST: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_rust.png',
  SCATTERSHOT: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_scattershot.png',
  SCAVENGER: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_scavenger.png',
  SHATTER: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_shatter.png',
  SHIELD: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_shield.png',
  SILENCE: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_silence.png',
  SLOW: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_slow.png',
  SNARE: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_snare.png',
  SNEAK: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_sneak.png',
  SNIPE: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_snipe.png',
  STRENGTHEN: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_strengthen.png',
  STUN: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_stun.png',
  SWIFTNESS: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_swiftness.png',
  TANK_HEAL: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_tank-heal.png',
  TAUNT: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_taunt.png',
  THORNS: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_thorns.png',
  TRAMPLE: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_trample.png',
  TRIAGE: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_triage.png',
  TRUE_STRIKE: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_true-strike.png',
  VOID: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_void.png',
  VOID_ARMOR: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_void-armor.png',
  WEAKEN: 'https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_weaken.png',
};

export function getAbilityImage(abilityName: string): string {
  const ability = abilityName.split(' ').join('_').toUpperCase();
  // @ts-ignore
  return ABILITY_IMAGE[ability] || '';
}
