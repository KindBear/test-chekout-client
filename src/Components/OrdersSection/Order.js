import React from "react";
import { useGlobalState } from "../../GlobalContext";

const Order = ({ order }) => {
    const { selectedOrder, setSelectedOrder } = useGlobalState();

    const handleOrderClick = () => {
        setSelectedOrder(order);
    };

    return (
        <div
            style={{
                backgroundColor: selectedOrder && selectedOrder.id === order.id ? "lightgray" : "transparent",
                border: "1px solid #808080",
                padding: "8px 16px",
                margin: 8,
            }}
            onClick={handleOrderClick}
        >
            <p style={{ margin: 0 }}>Order: {order.id}</p>
            <p>Id: {order.payment_id}</p>
            <p style={{ margin: 0 }}>
                {order.amount} {order.currency}
            </p>
        </div>
    );
};

export default Order;
