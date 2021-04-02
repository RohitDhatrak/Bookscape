export function reducer(state, { type, payload }) {
    switch (type) {
        case "AUTHOR":
            let newAuthorFilter = state.filterBy.author;
            if (state.filterBy.author.includes(payload)) {
                newAuthorFilter = newAuthorFilter.filter(
                    (author) => author !== payload
                );
            } else {
                newAuthorFilter = newAuthorFilter.concat(payload);
            }
            return {
                ...state,
                filterBy: { ...state.filterBy, author: newAuthorFilter },
            };
        case "CLEAR FILTER":
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
    sortBy: "RELEVANCE",
};
