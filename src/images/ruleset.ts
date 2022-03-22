/*
 * Generate this by going to https://api2.splinterlands.com/settings and running
 var output = '';
    window.json.battles.rulesets.forEach((rule) => {
    var ruleName = rule.name.replace(' &', '').replaceAll(' ', '-').toLowerCase();
    var rulesetUrl = `https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_${ruleName}_150.png`;
    var variableRule = rule.name.replace(' &', '_').replaceAll(' ', '_').toUpperCase();
    var str = `export const RULESET_${variableRule}_IMAGE = '${rulesetUrl}';`
    output+= str;
    output += '\n'
    });
copy(output)
 */

export const RULESET_STANDARD_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_standard_150.png';
export const RULESET_BACK_TO_BASICS_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_back-to-basics_150.png';
export const RULESET_SILENCED_SUMMONERS_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_silenced-summoners_150.png';
export const RULESET_AIM_TRUE_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_aim-true_150.png';
export const RULESET_SUPER_SNEAK_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_super-sneak_150.png';
export const RULESET_WEAK_MAGIC_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_weak-magic_150.png';
export const RULESET_UNPROTECTED_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_unprotected_150.png';
export const RULESET_TARGET_PRACTICE_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_target-practice_150.png';
export const RULESET_FOG_OF_WAR_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_fog-of-war_150.png';
export const RULESET_ARMORED_UP_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_armored-up_150.png';
export const RULESET_HEALED_OUT_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_healed-out_150.png';
export const RULESET_EARTHQUAKE_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_earthquake_150.png';
export const RULESET_REVERSE_SPEED_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_reverse-speed_150.png';
export const RULESET_CLOSE_RANGE_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_close-range_150.png';
export const RULESET_HEAVY_HITTERS_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_heavy-hitters_150.png';
export const RULESET_EQUALIZER_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_equalizer_150.png';
export const RULESET_KEEP_YOUR_DISTANCE_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_keep-your-distance_150.png';
export const RULESET_LOST_LEGENDARIES_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_lost-legendaries_150.png';
export const RULESET_MELEE_MAYHEM_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_melee-mayhem_150.png';
export const RULESET_TAKING_SIDES_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_taking-sides_150.png';
export const RULESET_RISE_OF_THE_COMMONS_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_rise-of-the-commons_150.png';
export const RULESET_UP_CLOSE__PERSONAL_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_up-close-personal_150.png';
export const RULESET_BROKEN_ARROWS_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_broken-arrows_150.png';
export const RULESET_LITTLE_LEAGUE_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_little-league_150.png';
export const RULESET_LOST_MAGIC_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_lost-magic_150.png';
export const RULESET_EVEN_STEVENS_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_even-stevens_150.png';
export const RULESET_ODD_ONES_OUT_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_odd-ones-out_150.png';
export const RULESET_NOXIOUS_FUMES_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_noxious-fumes_150.png';
export const RULESET_STAMPEDE_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_stampede_150.png';
export const RULESET_EQUAL_OPPORTUNITY_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_equal-opportunity_150.png';
export const RULESET_EXPLOSIVE_WEAPONRY_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_explosive-weaponry_150.png';
export const RULESET_HOLY_PROTECTION_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_holy-protection_150.png';
export const RULESET_SPREADING_FURY_IMAGE =
  'https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_spreading-fury_150.png';
