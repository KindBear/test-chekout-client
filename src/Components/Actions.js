import React, { useState } from "react";
import { useGlobalState } from "../GlobalContext";
import { createPaymentRequest, capturePaymentRequest, refundPaymentRequest, voidPaymentRequest } from "../axios";

const Actions = () => {
    const [response, setResponse] = useState(null);
    const { selectedOrder } = useGlobalState();

    const createPayment = () => {
        createPaymentRequest(selectedOrder.id).then((res) => {
            setResponse(res);
        });
    };
    const capturePayment = () => {
        capturePaymentRequest(selectedOrder.id).then((res) => {
            setResponse(res);
        });
    };
    const refundPayment = () => {
        refundPaymentRequest(selectedOrder.id).then((res) => {
            setResponse(res);
        });
    };
    const voidPayment = () => {
        voidPaymentRequest(selectedOrder.id).then((res) => {
            setResponse(res);
        });
    };

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-between", width: 500 }}>
                <button style={{ fontSize: 14 }} onClick={createPayment}>
                    Create payment
                </button>
                <button style={{ fontSize: 14 }} onClick={capturePayment}>
                    Capture payment
                </button>
                <button style={{ fontSize: 14 }} onClick={refundPayment}>
                    Refund payment
                </button>
                <button style={{ fontSize: 14 }} onClick={voidPayment}>
                    Void payment
                </button>
            </div>
            <pre
                style={{
                    fontSize: 12,
                    padding: "8px 4px",
                    overflowX: "scroll",
                }}
            >
                {JSON.stringify(response, null, 2)}
            </pre>
        </div>
    );
};

export default Actions;
