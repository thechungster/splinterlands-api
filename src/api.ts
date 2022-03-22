import {
  BattleResult,
  CardDetail,
  OutstandingMatchResponse,
  PlayerBattlesResponse,
  PlayerCollectionCardResponse,
  PlayerDetailInfo,
  SplinterlandsSettings,
} from './types';

const DEFAULT_API_URL = 'https://api2.splinterlands.com';

const GET_ALL_CARDS_ENDPOINT = 'cards/get_details';
const GET_COLLECTION_ENDPOINT = 'cards/collection/';
const GET_BATTLES_ENDPOINT = 'battle/history?player=';
const GET_QUEST_ENDPOINT = 'players/quests?username=';
const GET_SINGLE_BATTLE_ENDPOINT = 'battle/result?id=';
const OUTSTANDING_MATCH_ENDPOINT = 'players/outstanding_match?username=';
const CARD_DETAILS_ENDPOINT = 'cards/find?ids=';
const SETTINGS_ENDPOINT = 'settings';
const GET_PLAYER_DETAILS_ENDPOINT = 'players/details?name=';

/**
 * Returns the past 50 battles from the user.
 * https://api2.splinterlands.com/battle/history?player=bubke
 */
export async function getPlayerBattles(player: string): Promise<PlayerBattlesResponse> {
  return await makeApiGetRequest(GET_BATTLES_ENDPOINT + player).then((response) => response.json());
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
 * https://api2.splinterlands.com/players/quests?username=bubke
 */
export async function getPlayerDetails(username: string): Promise<PlayerDetailInfo> {
  return await makeApiGetRequest(GET_PLAYER_DETAILS_ENDPOINT + username).then((response) => response.json());
}

/**
 * Returns the details of all cards.
 * https://api2.splinterlands.com/cards/get_details
 */
export async function getAllCardDetails(): Promise<CardDetail[]> {
  return makeApiGetRequest(GET_ALL_CARDS_ENDPOINT).then((response) => response.json());
}

/**
 * Returns the details of the given cards uids.
 * https://api2.splinterlands.com/cards/find?ids=PLACEHOLDER,PLACEHOLDER
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
  return await makeApiGetRequest(GET_SINGLE_BATTLE_ENDPOINT + battleId).then((response) => response.json());
}

/**
 * Returns the current match info of
 * https://api2.splinterlands.com/players/outstanding_match?username=bubke
 */
export async function getOutstandingMatch(player: string): Promise<OutstandingMatchResponse | null> {
  return await makeApiGetRequest(OUTSTANDING_MATCH_ENDPOINT + player).then((response) => response.json());
}

/**
 * Returns the settings from the Splinterlands.
 * https://api2.splinterlands.com/settings
 */
export async function getSettings(): Promise<SplinterlandsSettings> {
  return await makeApiGetRequest(SETTINGS_ENDPOINT).then((response) => response.json());
}

const makeApiGetRequest = async (endpoint: string) => {
  return await fetch(DEFAULT_API_URL + endpoint);
};
