
export const buyProduct = (id) => {
    return (dispatch) => {
        dispatch({
            type: "buy",
            payload: id
        });
    }
}


export const sellProduct = (id) => {
    return (dispatch) => {
        dispatch({
            type: "sell",
            payload: id
        });
    }
}