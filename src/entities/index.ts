export type Uid = String;

export type UserId = Uid;

export interface User {
  userId: UserId;
  createdAt: Date;
  updatedAt: Date;
  username: string;
}

export type CardId = Uid;

export type BuyingPrice = {
  highest: number;
  lowest: number;
};

export enum Rarity {
  Common = 'common',
  Rare = 'rare',
}

export interface Card {
  cardId: CardId;
  buyingPrice: BuyingPrice;
  cardImageUrl: URL;
  createdAt: Date;
  name: string;
  rarity: Rarity;
  regulation: string;
  version: string;
  updatedAt: Date;
}

export type ShopId = Uid;

export interface Shop {
  shopId: ShopId;
  address: string;
  createdAt: Date;
  shopname: string;
  updatedAt: Date;
}
