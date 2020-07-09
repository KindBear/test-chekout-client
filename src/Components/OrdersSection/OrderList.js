import React from "react";
import { useGlobalState } from "../../GlobalContext";
import Order from "./Order";

const OrderList = () => {
    const { orders } = useGlobalState();

    return (
        <div>
            {orders.map((order) => {
                return <Order order={order} />;
            })}
        </div>
    );
};

export default OrderList;
