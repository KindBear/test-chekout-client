import React from "react";
import Card from "./Card";
import { useGlobalState } from "../../GlobalContext";

const CardList = () => {
    const { cards, selectedCard, setSelectedCard } = useGlobalState();

    const handleCardClick = (cardId) => () => {
        if (selectedCard && selectedCard.id === cardId) {
            return;
        }
        setSelectedCard(cards.find((item) => item.id === cardId));
    };

    return (
        <div>
            {cards.map((item) => {
                return (
                    <Card
                        card={item}
                        key={`card_item_${item.id}`}
                        isActive={selectedCard && selectedCard.id === item.id}
                        onClick={handleCardClick(item.id)}
                    />
                );
            })}
        </div>
    );
};

export default CardList;
