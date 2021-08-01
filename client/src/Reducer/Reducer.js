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
        case "SAVE PREVIOUS FILTER":
            return {
                ...state,
                previousFilterBy: { ...state.filterBy },
            };
        case "RESTORE PREVIOUS FILTER":
            return {
                ...state,
                filterBy: {
                    ...state.previousFilterBy,
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
                    (item) => item._id !== payload._id
                ),
            };
        case "ADD TO CART":
            return {
                ...state,
                wishList: state.wishList.filter(
                    (item) => item._id !== payload._id
                ),
                cart: [...state.cart, payload],
            };
        case "REMOVE FROM CART":
            return {
                ...state,
                cart: state.cart.filter((item) => item._id !== payload._id),
            };
        case "MOVE TO WISHLIST":
            return {
                ...state,
                cart: state.cart.filter((item) => item._id !== payload._id),
                wishList: [...state.wishList, payload],
            };
        case "LOAD PRODUCTS":
            return {
                ...state,
                productsList: [...payload],
            };
        case "CLEAR SESSION STATE":
            return {
                ...state,
                cart: [],
                wishList: [],
            };
        case "SAVE SESSION":
            localStorage.setItem(
                "session",
                JSON.stringify({ isUserLoggedIn: true, userId: payload })
            );
            return { ...state, isUserLoggedIn: true, userId: payload };
        case "RESUME SESSION":
            return { ...state, isUserLoggedIn: true, userId: payload };
        case "END SESSION":
            localStorage.setItem(
                "session",
                JSON.stringify({ isUserLoggedIn: false, userId: null })
            );
            return { ...state, isUserLoggedIn: false, userId: null };
        case "LOAD USER DATA":
            return {
                ...state,
                cart: [...state.cart, ...payload.cart],
                wishList: [...state.wishList, ...payload.wishList],
            };
        default:
            return state;
    }
}

export const initialState = {
    filterBy: {
        genres: [],
        author: [],
        review: [],
        price: [],
    },
    previousFilterBy: {},
    sortBy: "BEST SELLING",
    wishList: [],
    cart: [],
    productsList: [],
    isUserLoggedIn: false,
    userId: null,
};
