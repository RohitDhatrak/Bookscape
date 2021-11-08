export function getCartQuantity(cart) {
    return cart.reduce((totalItems) => totalItems + 1, 0);
}

export function getTotalAmount(cart) {
    return cart.reduce(
        (totalPrice, item) => totalPrice + item.discountedPrice,
        0
    );
}

export function getTotalAmountBeforeDiscount(cart) {
    return cart.reduce((totalPrice, item) => totalPrice + item.price, 0);
}
