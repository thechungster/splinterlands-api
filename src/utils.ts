import * as cards from './cards.json';
import { CardDetail } from 'splinterlands-types';

export function getCardDetail(cardId: number): CardDetail {
  if (cardId > cards.length) {
    throw new Error('This card is not yet supported. Please make an issue request for the package');
  }
  return cards[cardId - 1] as CardDetail;
}
