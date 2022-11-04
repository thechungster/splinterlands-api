import {
  ActiveRental,
  BattleResult,
  CardDetail,
  ForRentGroupedCard,
  ForSaleDetailedCard,
  ForSaleGroupedCard,
  GuildMemberResponse,
  OutstandingMatchResponse,
  PlayerBattlesResponse,
  PlayerCollectionCardResponse,
  PlayerDetailInfo,
  SplinterlandsSettings,
} from './types';

const DEFAULT_API_URL = 'https://api2.splinterlands.com/';

const GET_ALL_CARDS_ENDPOINT = 'cards/get_details';
const GET_COLLECTION_ENDPOINT = 'cards/collection/';
const GET_BATTLES_ENDPOINT = 'battle/history?player=';
const GET_QUEST_ENDPOINT = 'players/quests?username=';
const GET_SINGLE_BATTLE_ENDPOINT = 'battle/result?id=';
const OUTSTANDING_MATCH_ENDPOINT = 'players/outstanding_match?username=';
const CARD_DETAILS_ENDPOINT = 'cards/find?ids=';
const SETTINGS_ENDPOINT = 'settings';
const GET_PLAYER_DETAILS_ENDPOINT = 'players/details?name=';
const FOR_RENT_GROUPED_ENDPOINT = 'market/for_rent_grouped';
const FOR_RENT_BY_CARD_ENDPOINT = 'market/for_rent_by_card';
const ACTIVE_RENTALS_ENDPOINT = 'market/active_rentals?owner=';
const FOR_SALE_GROUPED_ENDPOINT = 'market/for_sale_grouped';
const FOR_SALE_BY_CARD_ENDPOINT = 'market/for_sale_by_card';
const GUILD_MEMBERS_ENDPOINT = 'guilds/members?guild_id=';

/**
 * Returns the past 50 battles from the user.
 * https://api2.splinterlands.com/battle/history?player=bubke
 */
export async function getPlayerBattles(player: string, format?: string): Promise<PlayerBattlesResponse> {
  const postFix = format ? `&format=${format}` : '';
  return (await makeApiGetRequest(GET_BATTLES_ENDPOINT + player + postFix).then((response) =>
    response.json()
  )) as Promise<PlayerBattlesResponse>;
}

/**
 * Returns the player quest information
 * https://api2.splinterlands.com/players/quests?username=bubke
 */
export async function getPlayerQuest(player: string) {
  return await makeApiGetRequest(GET_QUEST_ENDPOINT + player).then((response) => response.json());
}

/**
 * Returns the information of a player
 * https://api2.splinterlands.com/players/details?name=bubke
 */
export async function getPlayerDetails(player: string): Promise<PlayerDetailInfo> {
  return (await makeApiGetRequest(GET_PLAYER_DETAILS_ENDPOINT + player).then((response) =>
    response.json()
  )) as Promise<PlayerDetailInfo>;
}

/**
 * Returns the details of all cards.
 * https://api2.splinterlands.com/cards/get_details
 */
export async function getAllCardDetails(): Promise<CardDetail[]> {
  return makeApiGetRequest(GET_ALL_CARDS_ENDPOINT).then((response) => response.json()) as Promise<CardDetail[]>;
}

/**
 * Returns the details of the given cards uids.
 * https://api2.splinterlands.com/cards/find?ids=C4-159-5PENLDCX68,C7-401-KHC7OS88PS
 */
export async function getCardDetailsFromUid(cards: string[]) {
  const cardsStr = cards.join(',');
  return await makeApiGetRequest(CARD_DETAILS_ENDPOINT + cardsStr).then((response) => response.json());
}

/**
 * Returns the details of cards that the player has.
 * https://api2.splinterlands.com/cards/collection/bubke
 */
export async function getPlayerCollectionCards(player: string): Promise<PlayerCollectionCardResponse> {
  const playerCardResponse = (await makeApiGetRequest(GET_COLLECTION_ENDPOINT + player).then((response) =>
    response.json()
  )) as PlayerCollectionCardResponse;
  return playerCardResponse;
}

/**
 * Returns the results of a historical battle by battleId.
 * https://api2.splinterlands.com/battle/result?id=sm_gyjLSvXAUyhWfBhJOymA
 */
export async function getSingleBattle(battleId: string): Promise<BattleResult> {
  return (await makeApiGetRequest(GET_SINGLE_BATTLE_ENDPOINT + battleId).then((response) =>
    response.json()
  )) as Promise<BattleResult>;
}

/**
 * Returns the current match info of
 * https://api2.splinterlands.com/players/outstanding_match?username=bubke&token=accessToken
 */
export async function getOutstandingMatch(
  player: string,
  accessToken: string
): Promise<OutstandingMatchResponse | null> {
  return (await makeApiGetRequest(OUTSTANDING_MATCH_ENDPOINT + player + `&token=${accessToken}`).then((response) =>
    response.json()
  )) as Promise<OutstandingMatchResponse | null>;
}

/**
 * Returns the settings from the Splinterlands.
 * https://api2.splinterlands.com/settings
 */
export async function getSettings(): Promise<SplinterlandsSettings> {
  return (await makeApiGetRequest(SETTINGS_ENDPOINT).then((response) =>
    response.json()
  )) as Promise<SplinterlandsSettings>;
}

/**
 * Returns the summary of all cards that are for rent.
 * https://api2.splinterlands.com/market/for_rent_grouped
 */
export async function getForRentCardSummary(): Promise<ForRentGroupedCard[]> {
  return await makeApiGetRequest(FOR_RENT_GROUPED_ENDPOINT).then((response) => response.json());
}

/**
 * Returns the summary of all cards that are for rent.
 * https://api2.splinterlands.com/market/for_rent_by_card?card_detail_id=205&gold=false&edition=2
 */
export async function getForRentByCard(cardId: number, edition: number, gold: boolean): Promise<ForRentGroupedCard[]> {
  return await makeApiGetRequest(
    FOR_RENT_BY_CARD_ENDPOINT + `?card_detail_id=${cardId}&gold=${gold}&edition=${edition}`
  ).then((response) => response.json());
}

/**
 * Returns the all active rentals by username
 * https://api2.splinterlands.com/market/active_rentals?owner=bubke
 */
export async function getActiveRentals(owner: string): Promise<ActiveRental[]> {
  return await makeApiGetRequest(ACTIVE_RENTALS_ENDPOINT + owner).then((response) => response.json());
}

/**
 * Returns the summary of all cards that are for sale.
 * https://api2.splinterlands.com/market/for_sale_grouped
 */
export async function getForSaleGrouped(): Promise<ForSaleGroupedCard[]> {
  return await makeApiGetRequest(FOR_SALE_GROUPED_ENDPOINT).then((response) => response.json());
}

/**
 * Returns the detailed market for sale information by card
 * https://api2.splinterlands.com/market/for_sale_by_card?card_detail_id=334&gold=false&edition=3
 */
export async function getForSaleByCard(cardId: number, edition: number, gold: boolean): Promise<ForSaleDetailedCard[]> {
  return await makeApiGetRequest(
    FOR_SALE_BY_CARD_ENDPOINT + `?card_detail_id=${cardId}&gold=${gold}&edition=${edition}`
  ).then((response) => response.json());
}

/**
 * Returns the member information for a guild.
 * https://api2.splinterlands.com/guilds/members?guild_id=36f92c816a25becbdc351abbc82c0ac62ea532d5
 */
export async function getGuildMembers(guildId: string): Promise<GuildMemberResponse> {
  return await makeApiGetRequest(GUILD_MEMBERS_ENDPOINT + guildId).then((response) => response.json());
}

const makeApiGetRequest = async (endpoint: string) => {
  return await fetch(DEFAULT_API_URL + endpoint);
};
