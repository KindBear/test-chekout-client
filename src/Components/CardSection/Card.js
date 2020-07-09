import React from "react";

const Card = ({ card, isActive, onClick }) => {
    return (
        <div>
            <p style={{ marginLeft: 8 }}>{card.name}</p>
            <div
                style={{
                    backgroundColor: isActive ? "rgba(3, 169, 244, 0.52)" : "#808080a1",
                    margin: 8,
                    width: 180,
                    padding: "8px 16px",
                    borderRadius: 4,
                    cursor: "pointer",
                    boxShadow: "4px 4px lightgrey",
                }}
                onClick={onClick}
            >
                <p>**** **** **** {card.last4}</p>
                <p>{card.payment_system.toUpperCase()}</p>
            </div>
        </div>
    );
};

export default Card;
