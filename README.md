# Splinterlands Web API

Web package for the Splinterlands API.

Has common API calls and simple methods to obtain images from Splinterlands, such as cards, rulesets, and abilities.

[NPM Package](https://www.npmjs.com/package/splinterlands-web-api)

# Installing

`npm i splinterlands-web-api`

# Documentation

- [API](#api-calls)
- [Images](#images)

# API calls

These are the current api calls that are supported.

- [Splinterlands](#splinterlands)
- [Player](#player)
- [Card](#card)
- [Battle](#battle)
- [Market](#market)
  - [Rental](#rental)
  - [For Sale](#for-sale)

## Splinterlands

- `getSettings()`
  - https://api2.splinterlands.com/settings

## Player

- `getPlayerBattles(username)`
  - https://api2.splinterlands.com/battle/history?player=bubke
- `getPlayerQuest(username)`
  - https://api2.splinterlands.com/players/quests?username=bubke
- `getPlayerDetails(username)`
  - https://api2.splinterlands.com/players/details?name=bubke
- `getPlayerCollectionCards(username)`
  - https://api2.splinterlands.com/cards/collection/bubke

### Cards

- `getAllCardDetails()`
  - https://api2.splinterlands.com/cards/get_details
- `getCardDetailsFromUid([cardId1, cardId2])`
  - https://api2.splinterlands.com/cards/find?ids=C4-159-5PENLDCX68,C7-401-KHC7OS88PS

## Battle

- `getSingleBattle(battleId)`
  - https://api2.splinterlands.com/battle/result?id=sm_gyjLSvXAUyhWfBhJOymA
- `getOutstandingMatch(username)`
  - https://api2.splinterlands.com/players/outstanding_match?username=bubke

## Market

### Rental

- `getForRentCardSummary()`
  - https://api2.splinterlands.com/market/for_rent_grouped
- `getForRentByCard(cardId, edition, isGold)`
  - https://api2.splinterlands.com/market/for_rent_by_card?card_detail_id=205&gold=false&edition=2
- `getActiveRentals(username)`
  - https://api2.splinterlands.com/market/active_rentals?owner=bubke

### For Sale

- `getForSaleGrouped()`
  - https://api2.splinterlands.com/market/for_sale_grouped
- `getForSaleByCard(cardId, edition, isGold)`
  - https://api2.splinterlands.com/market/for_sale_by_card?card_detail_id=334&gold=false&edition=3

# Images

Current images urls that can be requested are

- [Card](#card)
  - [Base card](#base-card)
  - [Detailed card](#detailed-card)
- [Ability](#ability)
- [Ruleset](#ruleset)

## Card

### Base card

A base card url which has no stats can be requested as follows

- `getCardImageBaseById(cardId, /* optional */ isGold, /* optional */ edition)`

If isGold is not specified, the card will be standard foil. If edition is not specified, the image returned will be the latest edition. For Example `getCardImageBaseById(/* cardId */ 13)` would return

![Base Image](https://d36mxiodymuqjm.cloudfront.net/cards_beta/Spineback%20Turtle.png)

To request the gold foil alpha version

- `getCardImageBaseById(cardId, /* isGold */ true, /* edition */ 0)`

![Gold foil alpha Image](https://d36mxiodymuqjm.cloudfront.net/cards_v2.2/Spineback%20Turtle_gold.png)

### Detailed card

A detailed card url which includes stats at each level can be requested as such

- `getCardImageLevelById(cardId, level, /* optional */ isGold, /* optional */ edition)`

Again, if the optional parameters are not provided, the card will latest edition and standard foil.

For example `getCardImageLevelById(/* cardId */ 13, /* level */ 5)` will return
![Level 5 Spineback turtle](https://d36mxiodymuqjm.cloudfront.net/cards_by_level/beta/Spineback%20Turtle_lv5.png)

To request the gold foil alpha version

- `getCardImageLevelById(/* cardId */ 13, /* level */ 5, /* isGold */ true, /* edition */ 0)`

![Gold 5 Spineback turtle](https://d36mxiodymuqjm.cloudfront.net/cards_by_level/alpha/Spineback%20Turtle_lv5_gold.png)

## Ability

You can request an ability image in two ways, using the `ABILITY_IMAGE` object, or calling `getAbilityImage(abilityName)`

For example both

- `ABILITY_IMAGE.TANK_HEAL`
- `getAbilityImage('Tank Heal')`

Will return

![Tank heal ability](https://d36mxiodymuqjm.cloudfront.net/website/abilities/ability_tank-heal.png)

## Ruleset

You can request rulesets in two ways, using the `RULESET_IMAGE` object, or calling `getRulesetImage(rulesetName)`

For example both

- `RULESET_IMAGE.BACK_TO_BASICS`
- `getRulesetImage('Back to Basics')`

Will return

![Back to basics ruleset](https://d36mxiodymuqjm.cloudfront.net/website/icons/rulesets/new/img_combat-rule_back-to-basics_150.png)
