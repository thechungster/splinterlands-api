/*
 * Generate this by going to https://api2.splinterlands.com/settings and running
    var output = '';
    window.json.battles.rulesets.forEach((rule) => {
    var ruleName = rule.name.replace(' &', '').replaceAll(' ', '-').replaceAll('’','').toLowerCase();
    var rulesetUrl = `https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_${ruleName}_150.png`;
    var variableRule = rule.name.replace(' &', '_').split(' ').join('_').toUpperCase();
    var str = `${variableRule}:'${rulesetUrl}',\n`
    output+= str;
    });
    copy(output);
    output;
 */

export const RULESET_IMAGE = {
  STANDARD: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_standard_150.png',
  BACK_TO_BASICS:
    'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_back-to-basics_150.png',
  SILENCED_SUMMONERS:
    'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_silenced-summoners_150.png',
  AIM_TRUE: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_aim-true_150.png',
  SUPER_SNEAK: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_super-sneak_150.png',
  WEAK_MAGIC: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_weak-magic_150.png',
  UNPROTECTED: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_unprotected_150.png',
  TARGET_PRACTICE:
    'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_target-practice_150.png',
  FOG_OF_WAR: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_fog-of-war_150.png',
  ARMORED_UP: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_armored-up_150.png',
  HEALED_OUT: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_healed-out_150.png',
  EARTHQUAKE: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_earthquake_150.png',
  REVERSE_SPEED:
    'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_reverse-speed_150.png',
  CLOSE_RANGE: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_close-range_150.png',
  HEAVY_HITTERS:
    'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_heavy-hitters_150.png',
  EQUALIZER: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_equalizer_150.png',
  KEEP_YOUR_DISTANCE:
    'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_keep-your-distance_150.png',
  LOST_LEGENDARIES:
    'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_lost-legendaries_150.png',
  MELEE_MAYHEM: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_melee-mayhem_150.png',
  TAKING_SIDES: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_taking-sides_150.png',
  RISE_OF_THE_COMMONS:
    'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_rise-of-the-commons_150.png',
  UP_CLOSE__PERSONAL:
    'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_up-close-personal_150.png',
  BROKEN_ARROWS:
    'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_broken-arrows_150.png',
  LITTLE_LEAGUE:
    'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_little-league_150.png',
  LOST_MAGIC: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_lost-magic_150.png',
  EVEN_STEVENS: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_even-stevens_150.png',
  ODD_ONES_OUT: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_odd-ones-out_150.png',
  NOXIOUS_FUMES:
    'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_noxious-fumes_150.png',
  STAMPEDE: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_stampede_150.png',
  EQUAL_OPPORTUNITY:
    'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_equal-opportunity_150.png',
  BRIAR_PATCH: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_briar-patch_150.png',
  THORNS: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_thorns_150.png',
  EXPLOSIVE_WEAPONRY:
    'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_explosive-weaponry_150.png',
  MAGIC_REFLECT:
    'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_magic-reflect_150.png',
  COUNTERSPELL: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_counterspell_150.png',
  HOLY_PROTECTION:
    'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_holy-protection_150.png',
  RETURN_FIRE: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_return-fire_150.png',
  FIRE__REGRET: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_fire-regret_150.png',
  SPREADING_FURY:
    'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_spreading-fury_150.png',
  WHAT_DOESNT_KILL_YOU:
    'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_what-doesn-t-kill-you_150.png',
  TIS_BUT_SCRATCHES:
    'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_tis-but-scratches_150.png',
  UP_TO_ELEVEN: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_up-to-eleven_150.png',
  AIMLESS: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_aimless_150.png',
  FEROCITY: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_ferocity_150.png',
  GOING_THE_DISTANCE:
    'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_going-the-distance_150.png',
  WANDS_OUT: 'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_wands-out_150.png',
};

export function getRulesetImage(ruleset: string) {
  if (!ruleset) {
    return '';
  }
  const upper = ruleset.replace(' &', '_').replace('’', '').split(' ').join('_').toUpperCase();
  // @ts-ignore
  return RULESET_IMAGE[upper] || '';
}
