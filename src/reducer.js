export const reducer = (state, action) => {
    if (action.type === 'ADD_TO_BASKET') {

        const newItems = action.payload

        return { ...state, basket: [...state.basket, action.payload] };
    }
    else if (action.type === 'DELETE_FROM_BASKET') {

        const index = state.basket.findIndex((basketItem) => basketItem.id === action.payload);

        let newBasket = [...state.basket];

        if (index >= 0) {
            newBasket.splice(index, 1);
        } else {
            console.warn(
                `Cant remove product (id: ${action.payload}) as its not in basket!`
            )
        }
        return {
            ...state,
            basket: newBasket
        }
    }
    else {
        throw new Error('no mathing action')
    }
}

