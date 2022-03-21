import { useState, useEffect } from "react";
import {
  collection,
  doc,
  query,
  orderBy,
  Firestore,
  DocumentData,
  Timestamp
} from "firebase/firestore";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { Card, CardId } from "../entities";
import { isDefined } from "../utils/type";
import { convertDate } from "../utils/date";

const CardsCollection = "cards";

export const useFetchAllCards = (db: Firestore) => {
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

export const useFetchCardById = (db: Firestore, cardId: CardId) => {
  const [card, setCard] = useState<Card>()
  const [value, loading, error] = useDocument(doc(db, CardsCollection, cardId))

  useEffect(() => {
    if (!value) return
    setCard(cardFactory(value))
  }, [value])

  return card
}

const cardFactory = (doc: DocumentData): Card | undefined => {
  const data = doc.data();
  if (!data) return;

  return {
    cardId: doc.id,
    buyingPrice: data.buyingPrice,
    cardImageUrl: data.cardImageUrl,
    createdAt: convertDate(data.createdAt),
    name: data.name,
    rarity: data.rarity,
    regulation: data.regulation,
    updatedAt: convertDate(data.updatedAt),
    version: data.version,
  }
}
