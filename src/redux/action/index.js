// For Add Item to cart

export const addCart = (product ) => {
    return{
        type: 'ADDITEM',
        payload: product
    }
}

//For Delete Item From Cart
export const delCart = (product) => {
    return{
        type: "DELETE",
        payload : product
    }
}
