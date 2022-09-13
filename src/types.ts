export interface PlayerBattlesResponse {
  player: string;
  battles: BattleHistory[];
}

export interface BattleHistory {
  battle_queue_id_1: string;
  battle_queue_id_2: string;
  player_1_rating_initial: number;
  player_2_rating_initial: number;
  winner: string;
  player_1_rating_final: number;
  player_2_rating_final: number;
  details: string;
  player_1: string;
  player_2: string;
  created_date: Date;
  match_type: string;
  mana_cap: number;
  current_streak: number;
  ruleset: string;
  inactive: string;
  settings: string;
  block_num: number;
  rshares: number;
  dec_info: string;
  leaderboard: number;
  reward_dec: string;
  reward_sps?: any;
  format: string;
}

export interface OutstandingMatchResponse {
  id: string;
  created_block_num: number;
  expiration_block_num: number;
  player: string;
  team_hash?: any;
  match_type: string;
  mana_cap: number;
  opponent: string;
  match_block_num: number;
  status: number;
  reveal_tx?: any;
  reveal_block_id?: any;
  team?: any;
  summoner_level?: any;
  ruleset: string;
  inactive: string;
  opponent_player: string;
  opponent_team_hash: string;
  submit_expiration_block_num: number;
  settings: string;
  app?: any;
  created_date: Date;
  expiration_date: Date;
  match_date: Date;
  submit_expiration_date: Date;
  recent_opponents: string;
  is_critical: boolean;

  /* brawl */
  brawl_id?: string;
  tournament_id?: string;
  tournament_format?: string;
}

export interface SplinterlandsSettings {
  dec_price: number;
  sps_price: number;
  maintenance_mode: boolean;
  starter_editions: number[];
}

export interface TournamentInfo {
  id: string;
  created_by: string;
  created_date: Date;
  created_block: number;
  name: string;
  description: string;
  start_date: Date;
  status: number;
  current_round: number;
  sponsor_name: string;
  sponsor_logo_url: string;
  min_entrants: number;
  max_entrants?: any;
  entry_fee: string;
  total_prizes_usd: number;
  data: string;
  sponsor_logo_url_med: string;
  sponsor_logo_url_lg: string;
  payment?: any;
  sponsor_url: string;
  checkin_msg_sent: boolean;
  format: string;
  payment_data: string;
  password_pub_key?: any;
  sub_format?: any;
  require_kyc: boolean;
}

export interface PlayerBattleData {
  name: string;
  join_date: Date;
  rating: number;
  battles: number;
  wins: number;
  current_streak: number;
  longest_streak: number;
  max_rating: number;
  max_rank: number;
  champion_points: number;
  capture_rate: number;
  last_reward_block: number;
  last_reward_time: Date;
  guild: string;
  guild_name: string;
  guild_motto: string;
  guild_data: string;
  guild_level: number;
  guild_quest_lodge_level: number;
  starter_pack_purchase: boolean;
  avatar_id: number;
  display_name?: any;
  title_pre?: any;
  title_post: string;
  collection_power: number;
  league: number;
  adv_msg_sent: boolean;
  alt_name?: any;
}

export interface BattleResult extends BattleHistory {
  player_1_data: PlayerBattleData;
  player_2_data: PlayerBattleData;
}

export interface BattleDetails {
  loser: string;
  winner: string;
  type: string;
  team1: BattleTeam;
  team2: BattleTeam;
}

export interface BattleTeam {
  color: string;
  monsters: CollectionCard[];
  summoner: CollectionCard;
  player: string;
  rating: number;
}

export interface CollectionCard {
  player?: string;
  uid?: string;
  card_detail_id: number;
  gold: boolean;
  edition: number;
  level: number;
}

export enum CardColor {
  BLACK = 'Black',
  BLUE = 'Blue',
  GOLD = 'Gold',
  GRAY = 'Gray',
  GREEN = 'Green',
  RED = 'Red',
  WHITE = 'White',
}

export enum CardType {
  SUMMONER = 'Summoner',
  MONSTER = 'Monster',
}

export interface CardStats {
  abilities: Ability[] | Ability[][] | undefined;
  mana: number | number[];
  attack: number | number[];
  ranged: number | number[];
  magic: number | number[];
  armor: number | number[];
  health: number | number[];
  speed: number | number[];
}

export interface CardDetailDistribution {
  card_detail_id: number;
  gold: boolean;
  edition: number;
  num_cards: string;
  total_xp: string;
  num_burned: string;
  total_burned_xp?: string;
}

export interface CardDetail {
  // 1 indexed.
  id: number;
  name: string;
  color: CardColor;
  type: CardType;
  rarity: number;
  is_starter: boolean;
  editions: string;
  stats: CardStats;
  drop_rate: number;
  sub_type: any;
  created_block_num: any;
  last_update_tx: string | null;
  total_printed: number;
  is_promo: boolean;
  tier: any;
  distribution: CardDetailDistribution[];
}

export interface PlayerCardDetail {
  player: string;
  uid: string;
  card_detail_id: number;
  xp: number;
  gold: boolean;
  edition: number;
  market_id?: string;
  buy_price?: any;
  market_listing_type?: string;
  market_listing_status?: number;
  market_created_date?: string;
  last_used_block?: number;
  last_used_player: string;
  last_used_date?: Date;
  last_transferred_block?: number;
  last_transferred_date?: Date;
  alpha_xp?: number;
  delegated_to: string;
  delegation_tx: string;
  skin: string;
  delegated_to_display_name: string;
  display_name?: any;
  lock_days?: number;
  unlock_date?: any;
  level: number;
}

export interface PlayerCollectionCardResponse {
  player: string;
  cards: PlayerCardDetail[];
}

export interface PlayerQuest {
  id: string;
  player: string;
  created_date: string;
  created_block: number;
  name: string;
  total_items: number;
  completed_items: number;
  claim_trx_id?: string;
  claim_date?: string;
  reward_qty: number;
  refresh_trx_id?: any;
  rewards?: string;
  league: number;
}

export interface BatEventList {
  id: string;
  bat: number;
}

export interface Ruleset {
  active: boolean;
  name: string;
  description: string;
  type: string;
  invalid: string[];
  weight?: number;
}

export interface Battles {
  asset_url: string;
  default_expiration_seconds: number;
  reveal_blocks: number;
  win_streak_wins: number;
  rulesets: Ruleset[];
}

export interface LeaderboardPrizes {
  Novice: any[];
  Bronze: number[];
  Silver: number[];
  Gold: number[];
  Diamond: number[];
  Champion: number[];
}

export interface League {
  name: string;
  group: string;
  league_limit: number;
  level: number;
  min_rating: number;
  min_power: number;
  season_rating_reset: number;
}

export interface Dec {
  pool_cut_pct: number;
  tokens_per_block: number;
  gold_burn_bonus_2: number;
  curve_constant: number;
  beta_bonus: number;
  curve_reduction: number;
  eth_withdrawal_fee: number;
  start_block: number;
  reduction_blocks: number;
  reduction_pct: number;
  pool_size_blocks: number;
  ecr_regen_rate: number;
  ecr_reduction_rate: number;
  alpha_bonus: number;
  gold_bonus: number;
  streak_bonus: number;
  streak_bonus_max: number;
  burn_rate: number[];
  untamed_burn_rate: number[];
  alpha_burn_bonus: number;
  promo_burn_bonus: number;
  gold_burn_bonus: number;
  max_burn_bonus: number;
  orbs_available: number;
  orb_cost: number;
  dice_available: number;
  dice_cost: number;
  mystery_potion_blocks: number;
  prize_pool_account: string;
}

export interface GuildHall {
  symbol: string;
  levels: number[];
  member_limit: number[];
}

export interface QuestLodge {
  symbol: string;
  levels: number[];
}

export interface Cost {
  symbol: string;
  levels: number[];
}

export interface Arena {
  cost: Cost[];
}

export interface Cost2 {
  symbol: string;
  levels: number[];
}

export interface Barracks {
  cost: Cost2[];
}

export interface Cost3 {
  symbol: string;
  levels: number[];
}

export interface GuildShop {
  cost: Cost3[];
}

export interface Guilds {
  brawl_staggered_start_interval: number;
  current_fray_edition: number;
  guild_hall: GuildHall;
  quest_lodge: QuestLodge;
  rank_names: string[];
  shop_discount_pct: number[];
  dec_bonus_pct: number[];
  creation_fee: number;
  arena: Arena;
  merit_multiplier: number[];
  barracks: Barracks;
  guild_shop: GuildShop;
  merit_constant: number;
  max_brawl_size: number;
  brawl_prep_duration: number;
  crown_multiplier: number[];
  brawl_combat_duration: number;
  brawl_results_duration: number;
  brawl_cycle_end_offset: number;
  crown_split_pct: number[];
}

export interface Networks {
  eth: string;
  bsc: string;
}

export interface SupportedCurrency {
  name: string;
  currency: string;
  type: string;
  tournament_enabled: boolean;
  payment_enabled: boolean;
  usd_value: number;
  precision: number;
  contract_address: string;
  payment_address: string;
  networks: Networks;
  token_id: string;
  asset_name: string;
  symbol: string;
}

export interface LandSale {
  plot_price: number;
  tract_price: number;
  region_price: number;
  plots_available: number;
  plot_plots: number;
  tract_plots: number;
  region_plots: number;
  start_date: Date;
}

export interface Airdrop {
  name: string;
  id: number;
  chance: number;
  gold_guarantee: number;
  claim_date: Date;
  gold_chance?: number;
}

export interface ChaosLegion {
  pack_price: number;
  pre_sale_end: Date;
  pre_sale_start: Date;
  voucher_drop_rate: number;
  main_sale_start: Date;
  voucher_drop_start: Date;
  sale2_end: Date;
  sale3_start: Date;
  voucher_drop_duration: number;
  airdrops: Airdrop[];
}

export interface Bonus {
  min: number;
  bonus_pct: number;
}

export interface Potion {
  id: string;
  name: string;
  item_id: number;
  price_per_charge: number;
  value: number;
  bonuses: Bonus[];
}

export interface StakingRewards {
  tokens_per_block: number;
  reduction_blocks: number;
  reduction_pct: number;
  start_block: number;
}

export interface Sps {
  unstaking_periods: number;
  unstaking_interval_seconds: number;
  staking_rewards: StakingRewards;
  staking_rewards_acc_sps_per_share: number;
  staking_rewards_last_reward_block: number;
}

export interface Season {
  id: number;
  name: string;
  ends: Date;
  reward_packs: string[];
  reset_block_num?: any;
}

export interface BrawlCycle {
  id: number;
  name: string;
  start: Date;
  status: number;
  reset_block_num?: any;
  end: Date;
}

export interface Data {
  color: string;
  action: string;
  splinter: string;
  value: string;
}

export interface SettingsQuest {
  name: string;
  active: boolean;
  type: string;
  description: string;
  objective: string;
  objective_short: string;
  objective_type: string;
  item_total: number;
  reward_qty: number;
  min_rating: number;
  match_types: string[];
  reward_qty_by_league: number[];
  data: Data;
  icon: string;
}

export interface Cost4 {
  symbol: string;
  amount: number;
}

export interface GuildStoreItem {
  name: string;
  short_desc: string;
  unlock_level: number;
  cost: Cost4;
  icon: string;
  icon_sm: string;
  color: string;
  unit_of_purchase: string;
  symbol: string;
  plural: string;
}

export interface ChainProps {
  time: Date;
  ref_block_num: number;
  ref_block_id: string;
  ref_block_prefix: number;
}

export interface Ssc {
  rpc_url: string;
  chain_id: string;
  hive_rpc_url: string;
  hive_chain_id: string;
  alpha_token: string;
  beta_token: string;
  pack_holding_account: string;
}

export interface CardHoldingAccount {
  blockchainName: string;
  accountName: string;
}

export interface DEC {
  enabled: boolean;
  game_wallet: string;
  min_amount: number;
  fee_pct: number;
}

export interface SPS {
  enabled: boolean;
  game_wallet: string;
  min_amount: number;
  fee_pct: number;
}

export interface Bsc {
  DEC: DEC;
  SPS: SPS;
}

export interface DEC2 {
  enabled: boolean;
  game_wallet: string;
  min_amount: number;
  fee_pct: number;
}

export interface SPS2 {
  enabled: boolean;
  game_wallet: string;
  min_amount: number;
  fee_pct: number;
}

export interface Ethereum {
  DEC: DEC2;
  SPS: SPS2;
}

export interface Bridge {
  bsc: Bsc;
  ethereum: Ethereum;
}

export interface Abi {
  status: string;
  message: string;
  result: string;
}

export interface Cards {
  abi: Abi;
  address: string;
}

export interface Abi2 {
  status: string;
  message: string;
  result: string;
}

export interface Crystals {
  abi: Abi2;
  address: string;
}

export interface Abi3 {
  status: string;
  message: string;
  result: string;
}

export interface Payments {
  abi: Abi3;
  address: string;
}

export interface Contracts {
  cards: Cards;
  crystals: Crystals;
  payments: Payments;
}

export interface Ethereum2 {
  withdrawal_fee: number;
  sps_withdrawal_fee: number;
  contracts: Contracts;
}

export interface Token {
  account: string;
}

export interface Atomicassets {
  account: string;
}

export interface External {
  token: Token;
  atomicassets: Atomicassets;
}

export interface Wax {
  login_enabled: boolean;
  client_id: string;
  auth_url: string;
  external: External;
}

export interface SpsAirdrop {
  start_date: Date;
  current_airdrop_day: number;
  sps_per_day: number;
}

export interface SplinterlandsSettings {
  asset_url: string;
  gold_percent: number;
  starter_pack_price: number;
  booster_pack_price: number;
  market_fee: number;
  num_editions: number;
  core_editions: number[];
  starter_editions: number[];
  soulbound_editions: number[];
  event_creation_whitelist: string[];
  bat_event_list: BatEventList[];
  event_entry_fee_required: number;
  max_event_entrants: number;
  account: string;
  stats: boolean;
  rarity_pcts: number[];
  xp_levels: number[][];
  alpha_xp: number[];
  gold_xp: number[];
  beta_xp: number[];
  beta_gold_xp: number[];
  combine_rates: number[][];
  combine_rates_gold: number[][];
  battles: Battles;
  multi_lb_start_season: number;
  leaderboard_prizes: LeaderboardPrizes;
  leagues: League[];
  dec: Dec;
  guilds: Guilds;
  barracks_perks: any[][];
  frays: any[][];
  supported_currencies: SupportedCurrency[];
  transfer_cooldown_blocks: number;
  untamed_edition_date: Date;
  active_auth_ops: string[];
  version: string;
  config_version: number;
  land_sale: LandSale;
  chaos_legion: ChaosLegion;
  potions: Potion[];
  promotions: string[];
  sps: Sps;
  battles_disabled: number;
  blocks_are_behind: boolean;
  rpc_nodes: string[];
  dec_price: number;
  sps_price: number;
  maintenance_mode: boolean;
  season: Season;
  brawl_cycle: BrawlCycle;
  quests: SettingsQuest[];
  guild_store_items: GuildStoreItem[];
  last_block: number;
  timestamp: number;
  chain_props: ChainProps;
  circle_payments_enabled: number;
  transak_payments_enabled: number;
  zendesk_enabled: number;
  dec_max_buy_amount: number;
  sps_max_buy_amount: number;
  paypal_acct: string;
  paypal_merchant_id: string;
  paypal_client_id: string;
  paypal_sandbox: boolean;
  ssc: Ssc;
  card_holding_accounts: CardHoldingAccount[];
  bridge: Bridge;
  ethereum: Ethereum2;
  wax: Wax;
  sps_airdrop: SpsAirdrop;
  api_ops: string[];
}

export interface Crest {
  banner: string;
  decal: string;
}

export interface Data {
  crest: Crest;
}

export interface GuildHall {
  level: number;
  contributions: number;
}

export interface QuestLodge {
  level: number;
  contributions: number;
}

export interface Arena {
  level: number;
  contrib_dec: number;
  contrib_crowns: number;
}

export interface Barracks {
  level: number;
  contrib_dec: number;
  contrib_crowns: number;
  perks: number[];
  away_blocked_cards: number[];
}

export interface GuildShop {
  level: number;
  contrib_dec: number;
  contrib_crowns: number;
}

export interface Buildings {
  guild_hall: GuildHall;
  quest_lodge: QuestLodge;
  arena: Arena;
  barracks: Barracks;
  guild_shop: GuildShop;
}

export interface TournamentData {
  duration_blocks: number;
  multiple_rounds: boolean;
  cp_min: number;
  spsp_min: number;
  group_size: number;
  create_team_seconds: number;
  challenge_level: number;
  guilds: string[];
  crown_pot: number;
}

export interface Guild {
  id: string;
  name: string;
  owner: string;
  created_date: string;
  membership_type: string;
  language: string;
  motto: string;
  description: string;
  data: Data;
  level: number;
  buildings: Buildings;
  quest_lodge_level: number;
  brawl_status: number;
  crowns: number;
  brawl_level: number;
  tournament_id: string;
  spy_uses: number;
  spy_active: boolean;
  tournament_status: number;
  tournament_data: TournamentData;
}

export interface PlayerDetailInfo {
  name: string;
  join_date: Date;
  rating: number;
  battles: number;
  wins: number;
  current_streak: number;
  longest_streak: number;
  max_rating: number;
  max_rank: number;
  champion_points: number;
  capture_rate: number;
  last_reward_block: number;
  guild: Guild;
  starter_pack_purchase: boolean;
  avatar_id: number;
  display_name?: any;
  title_pre?: any;
  title_post: string;
  collection_power: number;
  league: number;
  adv_msg_sent: boolean;
  is_banned: boolean;
  season_details: {};
}

//https://api2.splinterlands.com/market/for_rent_grouped
export interface ForRentGroupedCard {
  card_detail_id: number;
  gold: boolean;
  edition: number;
  qty: number;
  low_price_bcx: number;
  low_price: number;
  high_price: number;
  level: number;
  mana: number;
}

export interface ForRentCardDetailed {
  fee_percent: number;
  uid: string;
  seller: string;
  card_detail_id: number;
  xp: number;
  gold: boolean;
  edition: number;
  buy_price: string;
  currency: string;
  desc?: any;
  type: string;
  market_id: string;
  last_transferred_block?: any;
  last_transferred_date?: any;
  last_used_block: number;
  last_used_date: Date;
  last_used_player: string;
}

export interface ForSaleGroupedCard {
  card_detail_id: number;
  gold: boolean;
  edition: number;
  qty: number;
  low_price_bcx: number;
  low_price: number;
  high_price: number;
  level: number;
  mana: number;
}

export interface ForSaleDetailedCard {
  fee_percent: number;
  uid: string;
  seller: string;
  card_detail_id: number;
  xp: number;
  gold: boolean;
  edition: number;
  buy_price: string;
  currency: string;
  desc?: any;
  type: string;
  market_id: string;
  last_transferred_block?: number;
  last_transferred_date?: Date;
  last_used_block?: number;
  last_used_date?: Date;
  last_used_player: string;
}

export interface ActiveRental {
  id: number;
  sell_trx_id: string;
  seller: string;
  num_cards: number;
  buy_price: string;
  fee_percent: number;
  market_item_id: number;
  rental_tx: string;
  rental_date: Date;
  renter: string;
  status: number;
  market_account: string;
  rental_days: number;
  next_rental_payment: Date;
  payment_currency: string;
  payment_amount: string;
  escrow_currency: string;
  escrow_amount: string;
  paid_amount: string;
  cancel_tx: string;
  cancel_player: string;
  cancel_date?: Date;
  card_id: string;
  card_detail_id: number;
  gold: boolean;
  xp: number;
  edition: number;
}

export interface GuildMemberResponse {
  guild_id: string;
  player: string;
  rank: number;
  join_date: string;
  status: string;
  data: string;
  rating: number;
  modern_rating: number;
  avatar_id: number;
  league: number;
  modern_league: number;
  collection_power: number;
  starter_pack_purchase: boolean;
  is_online: boolean;
}

export interface GuildMemberContributions {
  arena: GuildPaymentInfo;
  barracks: GuildPaymentInfo;
  guild_hall: number;
  guild_shop: GuildPaymentInfo;
  quest_lodge: number;
}

export interface GuildMemberData {
  contributions: GuildMemberContributions;
}

export interface GuildPaymentInfo {
  DEC: number;
  CROWN: number;
}

export enum Ability {
  AFFLICTION = 'Affliction',
  AMPLIFY = 'Amplify',
  BACKFIRE = 'Backfire',
  BLAST = 'Blast',
  BLIND = 'Blind',
  BLOODLUST = 'Bloodlust',
  CAMOUFLAGE = 'Camouflage',
  CLEANSE = 'Cleanse',
  CLOSE_RANGE = 'Close Range',
  CRIPPLE = 'Cripple',
  DEATHBLOW = 'Deathblow',
  DEMORALIZE = 'Demoralize',
  DISPEL = 'Dispel',
  DIVINE_SHIELD = 'Divine Shield',
  DODGE = 'Dodge',
  DOUBLE_STRIKE = 'Double Strike',
  ENRAGE = 'Enrage',
  FLYING = 'Flying',
  FORCEFIELD = 'Forcefield',
  GIANT_KILLER = 'Giant Killer',
  HALVING = 'Halving',
  HEADWINDS = 'Headwinds',
  HEAL = 'Heal',
  IMMUNITY = 'Immunity',
  INSPIRE = 'Inspire',
  KNOCK_OUT = 'Knock Out',
  LAST_STAND = 'Last Stand',
  LIFE_LEECH = 'Life Leech',
  MAGIC_REFLECT = 'Magic Reflect',
  OPPORTUNITY = 'Opportunity',
  OPPRESS = 'Oppress',
  PHASE = 'Phase',
  PIERCING = 'Piercing',
  POISON = 'Poison',
  PROTECT = 'Protect',
  REACH = 'Reach',
  RECHARGE = 'Recharge',
  REDEMPTION = 'Redemption',
  REFLECTION_SHIELD = 'Reflection Shield',
  REPAIR = 'Repair',
  RESURRECT = 'Resurrect',
  RETALIATE = 'Retaliate',
  RETURN_FIRE = 'Return Fire',
  RUST = 'Rust',
  SCATTERSHOT = 'Scattershot',
  SCAVENGER = 'Scavenger',
  SHATTER = 'Shatter',
  SHIELD = 'Shield',
  SILENCE = 'Silence',
  SLOW = 'Slow',
  SNARE = 'Snare',
  SNEAK = 'Sneak',
  SNIPE = 'Snipe',
  STRENGTHEN = 'Strengthen',
  STUN = 'Stun',
  SWIFTNESS = 'Swiftness',
  TANK_HEAL = 'Tank Heal',
  TAUNT = 'Taunt',
  THORNS = 'Thorns',
  TRAMPLE = 'Trample',
  TRIAGE = 'Triage',
  TRUE_STRIKE = 'True Strike',
  VOID = 'Void',
  VOID_ARMOR = 'Void Armor',
  WEAKEN = 'Weaken',
  /* Ruleset Ability */
  MELEE_MAYHEM = 'Melee Mayhem',
}
