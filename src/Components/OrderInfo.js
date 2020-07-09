import React from "react";
import { useGlobalState } from "../GlobalContext";

const OrderInfo = () => {
    const { selectedOrder } = useGlobalState();
    return (
        <div style={{ minHeight: 175 }}>
            <pre
                style={{
                    fontSize: 12,
                    padding: "8px 4px",
                    overflowX: "scroll",
                }}
            >
                {JSON.stringify(selectedOrder, null, 2)}
            </pre>
        </div>
    );
};

export default OrderInfo;
