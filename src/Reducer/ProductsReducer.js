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
};
