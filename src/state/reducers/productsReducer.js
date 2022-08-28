const initialState = [
    {
        id: 1,
        name: "iPhone 13 Pro",
        price: 1000,
        quantity: 1
    },
    {
        id: 2,
        name: "Samsung Galaxy 22",
        price: 900,
        quantity: 3
    }
];

const reducer = (
    state = initialState,
    action
) => {
    const newState = [...state];
    switch (action.type) {
        case "buy":
            newState.find((p) => p.id === action.payload).quantity++;
            return newState;
        case "sell":
            newState.find((p) => p.id === action.payload).quantity--;
            return newState;
        default:
            return state
    }
}

export default reducer;