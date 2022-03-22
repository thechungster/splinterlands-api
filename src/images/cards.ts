import * as cards from '../cards.json';
import { CardDetail } from '../types';

const NEW_REWARD_CARD_ID_START = 330;
const IMAGE_BASE_URL = 'https://d36mxiodymuqjm.cloudfront.net/';

const CARD_SETS = [
  'cards_v2.2',
  'cards_beta',
  'cards_v2.2',
  'cards_beta',
  'cards_untamed',
  'cards_untamed',
  'cards_gladiator',
  'cards_chaos',
];
const CARD_EDITIONS = ['alpha', 'beta', 'promo', 'reward', 'untamed', 'dice', 'gladius', 'chaos'];

export function getCardImageBaseById(cardId: number, gold = false) {
  if (cardId > cards.length) {
    throw new Error('This card is not yet supported. Please make an issue request for the package');
  }
  const cardDetail = cards[cardId - 1] as CardDetail;
  const allEditions = cardDetail.editions.split(',');
  const edition = Number(allEditions[allEditions.length - 1]);
  const cardName = cardDetail.name;

  return getCardImageBaseByCardInfo(cardName, edition, cardId, gold);
}

export function getCardImageLevelById(cardId: number, level: number, isGold = false) {
  if (cardId > cards.length) {
    throw new Error('This card is not yet supported. Please make an issue request for the package');
  }
  const cardDetail = cards[cardId - 1] as CardDetail;
  const allEditions = cardDetail.editions.split(',');
  const edition = Number(allEditions[allEditions.length - 1]);
  const cardName = cardDetail.name;

  getCardImagLevelByCardInfo(cardName, edition, level, isGold);
}

function getCardImageBaseByCardInfo(cardName: string, edition: number, id: number, gold = false): string {
  const extension = id > NEW_REWARD_CARD_ID_START ? '.jpg' : '.png';
  let url = `${IMAGE_BASE_URL}${CARD_SETS[edition]}/${cardName}`;
  if (gold) {
    url += '_gold';
  }
  url += extension;
  return encodeURI(url);
}

function getCardImagLevelByCardInfo(name: string, edition: number, level: number, isGold = false) {
  const cardEdition = CARD_EDITIONS[edition];
  const gold = isGold ? '_gold' : '';
  const url = `${IMAGE_BASE_URL}cards_by_level/${cardEdition}/${name}_lv${level}${gold}.png`;
  return encodeURI(url);
}
