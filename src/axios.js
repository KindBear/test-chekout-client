import Axios from "axios";

const API_URL = "http://127.0.0.1:8080";

export const getCardData = async (card) => {
    const response = await Axios.post(`${API_URL}/getCardData`, { card });
    return response.data;
};

export const getCardsList = async () => {
    const response = await Axios.get(`${API_URL}/cards`);
    return response.data;
};

export const createOrder = async (order) => {
    const response = await Axios.post(`${API_URL}/order`, order);
    return response.data;
};

export const getOrdersList = async () => {
    const response = await Axios.get(`${API_URL}/orders`);
    return response.data;
};

export const createPaymentRequest = async (orderId) => {
    const response = await Axios.put(`${API_URL}/order/createPayment`, { orderId });
    return response.data;
};

export const capturePaymentRequest = async (orderId) => {
    const response = await Axios.put(`${API_URL}/order/capture`, { orderId });
    return response.data;
};

export const refundPaymentRequest = async (orderId) => {
    const response = await Axios.put(`${API_URL}/order/refund`, { orderId });
    return response.data;
};

export const voidPaymentRequest = async (orderId) => {
    const response = await Axios.put(`${API_URL}/order/void`, { orderId });
    return response.data;
};

export const createPayout = async (order) => {
    const response = await Axios.post(`${API_URL}/payout`, order);
    return response.data;
};
