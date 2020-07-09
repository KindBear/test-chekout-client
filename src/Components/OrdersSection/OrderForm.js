import React, { useState } from "react";
import { useGlobalState } from "../../GlobalContext";
import { createOrder, createPayout } from "../../axios";

const OrderForm = () => {
    const orderFormInitialData = {
        amount: "",
        currency: "USD",
    };
    const [orderData, setOrderFormData] = useState(orderFormInitialData);
    const { selectedCard, setOrders } = useGlobalState();

    const handleCreateOrder = () => {
        createOrder({
            ...orderData,
            cardToken: selectedCard.token,
        }).then((res) => {
            setOrders((prevState) => [...prevState, res]);
        });
        setOrderFormData(orderFormInitialData);
    };

    const handleCreatePayout = () => {
        createPayout({
            ...orderData,
            cardToken: selectedCard.token,
        });
        setOrderFormData(orderFormInitialData);
    };

    const handleChangeOrderForm = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setOrderFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div style={{ margin: 8, width: 220, height: 170 }}>
            <div style={{ display: "flex", justifyContent: "flex-end", margin: 8 }}>
                <label>Amount</label>
                <input type="text" name="amount" value={orderData.amount} onChange={handleChangeOrderForm} />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", margin: 8 }}>
                <label>Currency</label>
                <select name="currency" value={orderData.currency} onChange={handleChangeOrderForm}>
                    <option value="USD">USD</option>
                    <option value="AED">AED</option>
                </select>
            </div>

            <button style={{ float: "right", margin: 8 }} onClick={handleCreateOrder}>
                Create Order
            </button>
            <button style={{ float: "right", margin: 8 }} onClick={handleCreatePayout}>
                Create payout
            </button>
        </div>
    );
};

export default OrderForm;
