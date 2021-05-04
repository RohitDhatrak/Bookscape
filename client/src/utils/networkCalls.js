import axios from "axios";

export async function getProductsData() {
    try {
        const {
            data: { productsData },
        } = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/products`);
        return productsData;
    } catch (error) {
        console.log({ error });
    }
}

export async function getCartData(userId) {
    try {
        const {
            data: { cart },
        } = await axios.get(
            `${process.env.REACT_APP_API_ENDPOINT}/cart/${userId}`
        );
        return cart;
    } catch (error) {
        console.log({ error });
    }
}

export async function getWishListData(userId) {
    try {
        const {
            data: { wishList },
        } = await axios.get(
            `${process.env.REACT_APP_API_ENDPOINT}/wishlist/${userId}`
        );
        return wishList;
    } catch (error) {
        console.log({ error });
    }
}

export async function updateCartData(userId, book) {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_ENDPOINT}/cart/${userId}`,
            { product: book }
        );
        return response;
    } catch (error) {
        console.log({ error });
    }
}

export async function updateWishListData(userId, book) {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_API_ENDPOINT}/wishlist/${userId}`,
            { product: book }
        );
        return response;
    } catch (error) {
        console.log({ error });
    }
}

export async function deleteCartData(userId, book) {
    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_API_ENDPOINT}/cart/${userId}`,
            { data: { product: book } }
        );
        return response;
    } catch (error) {
        console.log({ error });
    }
}

export async function deleteWishListData(userId, book) {
    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_API_ENDPOINT}/wishlist/${userId}`,
            { data: { product: book } }
        );
        return response;
    } catch (error) {
        console.log({ error });
    }
}