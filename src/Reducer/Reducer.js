import { productData } from "../faker";

export function reducer(state, { type, payload }) {
    switch (type) {
        case "FILTER":
            let newFilterProperty = state.filterBy[payload.property];
            if (state.filterBy[payload.property].includes(payload.selection)) {
                newFilterProperty = newFilterProperty.filter(
                    (item) => item !== payload.selection
                );
            } else {
                newFilterProperty = newFilterProperty.concat(payload.selection);
            }
            return {
                ...state,
                filterBy: {
                    ...state.filterBy,
                    [payload.property]: newFilterProperty,
                },
            };
        case "CLEAR FILTER":
            return {
                ...state,
                filterBy: {
                    genre: [],
                    author: [],
                    review: [],
                    price: [],
                },
            };
        case "SORT":
            return { ...state, sortBy: payload };
        case "ADD TO WISHLIST":
            if (state.wishList.includes(payload)) {
                return state;
            } else {
                return { ...state, wishList: [...state.wishList, payload] };
            }
        case "REMOVE FROM WISHLIST":
            return {
                ...state,
                wishList: state.wishList.filter(
                    (item) => item.id !== payload.id
                ),
            };
        case "ADD TO CART":
            payload.quantity = 1;
            return {
                ...state,
                wishList: state.wishList.filter(
                    (item) => item.id !== payload.id
                ),
                cart: [...state.cart, payload],
            };
        case "REMOVE FROM CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== payload.id),
            };
        case "MOVE TO WISHLIST":
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== payload.id),
                wishList: [...state.wishList, payload],
            };
        default:
            return state;
    }
}

export const initialState = {
    filterBy: {
        genre: [],
        author: [],
        review: [],
        price: [],
    },
    sortBy: "BEST SELLING",
    wishList: [],
    cart: [],
    productsList: productData,
};
