import axios from "axios";

export async function getUserData(userId) {
    try {
        const {
            data: { user },
        } = await axios.get(
            `${process.env.REACT_APP_API_ENDPOINT}/user/${userId}`
        );
        return user;
    } catch (error) {
        console.log(error);
    }
}

export async function saveUserAddress(address, city, pincode, state, userId) {
    try {
        const {
            data: { user },
        } = await axios.post(
            `${process.env.REACT_APP_API_ENDPOINT}/user/address`,
            { address, city, pincode, state, userId }
        );
        return user;
    } catch (error) {
        console.log(error);
    }
}

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
            { cartUpdates: { _id: book._id } }
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
            { wishListUpdates: { _id: book._id } }
        );
        return response;
    } catch (error) {
        console.log(error.response.data.message);
    }
}

export async function deleteCartData(userId, book, all) {
    try {
        const response = await axios.delete(
            `${process.env.REACT_APP_API_ENDPOINT}/cart/${userId}`,
            { data: { product: book, all } }
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
