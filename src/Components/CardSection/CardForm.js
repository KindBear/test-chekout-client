import React, { useState } from "react";
import { getCardData } from "../../axios";
import { useGlobalState } from "../../GlobalContext";

const CardForm = () => {
    const cardFormInitialData = {
        cardName: "name",
        cardNumber: "4242424242424242",
        expireMonth: "05",
        expireYear: "2025",
        cvv: "100",
    };
    const [cardFormData, setCardFormData] = useState(cardFormInitialData);
    const { setCards } = useGlobalState();

    const handleSaveCard = () => {
        getCardData(cardFormData).then((res) => {
            setCards((prevState) => [...prevState, res]);
        });
        setCardFormData(cardFormInitialData);
    };

    const handleChangeCardForm = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setCardFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div style={{ margin: 8, width: 220, height: 170 }}>
            <div style={{ display: "flex", justifyContent: "flex-end", margin: 8 }}>
                <label>Card name</label>
                <input type="text" name="cardName" value={cardFormData.cardName} onChange={handleChangeCardForm} />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", margin: 8 }}>
                <label>Card number</label>
                <input type="text" name="cardNumber" value={cardFormData.cardNumber} onChange={handleChangeCardForm} />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", margin: 8 }}>
                <label>Expire month</label>
                <input
                    type="text"
                    name="expireMonth"
                    value={cardFormData.expireMonth}
                    onChange={handleChangeCardForm}
                />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", margin: 8 }}>
                <label>Expire year</label>
                <input type="text" name="expireYear" value={cardFormData.expireYear} onChange={handleChangeCardForm} />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end", margin: 8 }}>
                <label>cvv</label>
                <input
                    type="password"
                    maxLength={3}
                    name="cvv"
                    value={cardFormData.cvv}
                    onChange={handleChangeCardForm}
                />
            </div>
            <button style={{ float: "right", margin: 8 }} onClick={handleSaveCard}>
                Save card
            </button>
        </div>
    );
};

export default CardForm;
