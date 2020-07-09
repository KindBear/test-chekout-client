import React, { createContext, useContext, useState } from "react";

export const GlobalContext = createContext({
    cards: [],
    orders: [],
    selectedCard: null,
    selectedOrder: null,
    setCards: () => null,
    setOrders: () => null,
    setSelectedCard: () => null,
    setSelectedOrder: () => null,
});

export function GlobalProvider({ children }) {
    const [cards, setCards] = useState([]);
    const [orders, setOrders] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const contextValue = {
        cards,
        orders,
        selectedCard,
        selectedOrder,
        setCards,
        setOrders,
        setSelectedCard,
        setSelectedOrder,
    };

    return <GlobalContext.Provider value={contextValue}>{children}</GlobalContext.Provider>;
}

export const useGlobalState = () => useContext(GlobalContext);
