import {
    updateCartData,
    updateWishListData,
    deleteWishListData,
} from "./networkCalls";

export function isWishListed(wishList, book) {
    return wishList.some((item) => item._id === book._id);
}

export function isAddedToCart(cart, book) {
    return cart.some((item) => item._id === book._id);
}

export async function addToWishList(e, userId, book, dispatch, navigate) {
    e.stopPropagation();
    if (userId) {
        const response = await updateWishListData(userId, book);
        if (response) {
            dispatch({
                type: "ADD TO WISHLIST",
                payload: book,
            });
        }
    } else {
        navigate("/login", { state: { previousPath: "/products" } });
    }
}

export async function removeFromWishList(e, userId, book, dispatch) {
    e.stopPropagation();
    const response = await deleteWishListData(userId, book);
    if (response) {
        dispatch({
            type: "REMOVE FROM WISHLIST",
            payload: book,
        });
    }
}

export async function addToCart(
    e,
    userId,
    book,
    dispatch,
    navigate,
    wishList,
    cart
) {
    e.stopPropagation();
    if (isAddedToCart(cart, book)) {
        await deleteWishListData(userId, book);
        dispatch({
            type: "REMOVE FROM WISHLIST",
            payload: book,
        });
        return;
    }

    if (userId) {
        const response = await updateCartData(userId, {
            ...book,
            quantity: 1,
        });
        const response2 = isWishListed(wishList, book)
            ? await deleteWishListData(userId, book)
            : true;
        if (response && response2) {
            dispatch({
                type: "ADD TO CART",
                payload: { ...book, quantity: 1 },
            });
        }
    } else {
        navigate("/login", { state: { previousPath: "/products" } });
    }
}
