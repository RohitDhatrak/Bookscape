import { loadScript } from "./loadScript";
import axios from "axios";
import { toast } from "react-toastify";
import { deleteCartData } from "../../services/networkCalls";

async function openRazorpay(total, navigate, userId, dispatch) {
    const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
        return alert("Razorpay failed to load.");
    }

    const result = await axios.post(
        `${process.env.REACT_APP_API_ENDPOINT}/payment/orders`,
        { total }
    );

    if (!result) {
        return alert("Some server error occured.");
    }

    const { amount, order_id, currency } = result.data;

    const options = {
        key: process.env.REACT_APP_RAZORPAY_KEY,
        amount,
        currency,
        name: "Bookscape",
        description: "Place the order for your books",
        image: "https://store-bookscape.netlify.app/logo.png",
        order_id,
        handler: async function (response) {
            const data = {
                orderCreationId: order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpayOrderId: response.razorpay_order_id,
                razorpaySignature: response.razorpay_signature,
            };

            toast.success("Payment Successful", {
                position: "bottom-right",
                autoClose: 2000,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            await deleteCartData(userId, null, true);
            dispatch({ type: "CLEAR CART" });
            navigate("/");
        },
        prefill: {
            name: "Guest",
            email: "test@razorpay.com",
            contact: "911234567890",
        },
        theme: {
            color: "#6fe0cc",
        },
        method: {
            netbanking: true,
            card: false,
            wallet: false,
            upi: false,
        },
        config: {
            display: {
                hide: [{ method: "paylater" }],
                preferences: { show_default_blocks: true },
            },
        },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
}

export { openRazorpay };
