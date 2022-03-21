import { useState, useEffect } from "react";
import {
  collection,
  query,
  orderBy,
  Firestore,
  DocumentData,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { Card } from "../entities";
import { isDefined } from "../utils/type";
import { convertDate } from "../utils/date";

const CardsCollection = "cards";

export const useCards = (db: Firestore) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [value] = useCollection(
    query(collection(db, CardsCollection), orderBy("name"))
  );

  useEffect(() => {
    if (!value) return;
    const cards = value.docs
      .map((doc) => {
        return cardFactory(doc);
      })
      .filter(isDefined);
    setCards(cards);
  }, [value]);

  return cards;
};

const cardFactory = (doc: DocumentData): Card | undefined => {
  const card = doc.data();
  if (!card) {
    return;
  }

  return {
    cardId: doc.id,
    buyingPrice: card.buyingPrice,
    cardImageUrl: card.cardImageUrl,
    createdAt: convertDate(card.createdAt),
    name: card.name,
    rarity: card.rarity,
    regulation: card.regulation,
    updatedAt: convertDate(card.updatedAt),
    version: card.version,
  };
};
