import React, { useEffect } from "react";
import { getCardsList, getOrdersList } from "./axios";
import CardForm from "./Components/CardSection/CardForm";
import { useGlobalState } from "./GlobalContext";
import CardList from "./Components/CardSection/CardList";
import OrderForm from "./Components/OrdersSection/OrderForm";
import OrderList from "./Components/OrdersSection/OrderList";
import OrderInfo from "./Components/OrderInfo";
import Actions from "./Components/Actions";

window.cards = [];

function App() {
    const { setCards, setOrders } = useGlobalState();

    useEffect(() => {
        getCardsList().then((res) => {
            setCards(res);
        });
        getOrdersList().then((res) => {
            setOrders(res);
        });
    }, [setCards, setOrders]);
    return (
        <div style={{ display: "flex" }}>
            <div>
                <CardForm />
                <CardList />
            </div>
            <div>
                <OrderForm />
                <OrderList />
            </div>
            <div>
                <OrderInfo />
                <Actions />
            </div>
        </div>
    );
}

export default App;
