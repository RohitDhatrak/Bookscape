import axios from "axios";

export async function getProductsData() {
    try {
        const {
            data: { productsData },
        } = await axios.get(
            "https://storebookscape.rohitdhatrak.repl.co/products"
        );
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
            `https://storebookscape.rohitdhatrak.repl.co/cart/${userId}`
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
            `https://storebookscape.rohitdhatrak.repl.co/wishlist/${userId}`
        );
        return wishList;
    } catch (error) {
        console.log({ error });
    }
}

export async function updateCartData(userId, book) {
    try {
        const response = await axios.post(
            `https://storebookscape.rohitdhatrak.repl.co/cart/${userId}`,
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
            `https://storebookscape.rohitdhatrak.repl.co/wishlist/${userId}`,
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
            `https://storebookscape.rohitdhatrak.repl.co/cart/${userId}`,
            { product: book }
        );
        return response;
    } catch (error) {
        console.log({ error });
    }
}

export async function deleteWishListData(userId, book) {
    try {
        const response = await axios.delete(
            `https://storebookscape.rohitdhatrak.repl.co/wishlist/${userId}`,
            { product: book }
        );
        return response;
    } catch (error) {
        console.log({ error });
    }
}
