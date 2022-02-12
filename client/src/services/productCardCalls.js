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

export async function addToWishList(
    e,
    userId,
    book,
    dispatch,
    navigate,
    isAddingToWishList,
    setIsAddingToWishList
) {
    e.stopPropagation();
    if (isAddingToWishList) return;
    setIsAddingToWishList(true);
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
    setIsAddingToWishList(false);
}

export async function removeFromWishList(
    e,
    userId,
    book,
    dispatch,
    isRemoving,
    setIsRemoving
) {
    e.stopPropagation();
    if (isRemoving) return;
    setIsRemoving(true);
    const response = await deleteWishListData(userId, book);
    if (response) {
        dispatch({
            type: "REMOVE FROM WISHLIST",
            payload: book,
        });
    }
    setIsRemoving(false);
}

export async function addToCart(
    e,
    userId,
    book,
    dispatch,
    navigate,
    wishList,
    cart,
    isLoading,
    setIsLoading
) {
    e.stopPropagation();
    if (isLoading) return;
    setIsLoading(true);
    if (isAddedToCart(cart, book)) {
        await deleteWishListData(userId, book);
        dispatch({
            type: "REMOVE FROM WISHLIST",
            payload: book,
        });
        setIsLoading(false);
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
    setIsLoading(false);
}
