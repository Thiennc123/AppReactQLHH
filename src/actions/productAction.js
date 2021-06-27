export const showProduct = (product) =>{
    return{
        type: 'SHOW_PRODUCT',
        payload: product,
    }
}


export const removeProduct = (product, idProduct) =>{
    return{
        type: 'REMOVE_PRODUCT',
        payload: product,
        idProduct:idProduct,
    }
}
