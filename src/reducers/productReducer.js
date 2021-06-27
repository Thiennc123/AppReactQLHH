const initialState = {
    list:[],
    activeId: null,
}

const findIndex = (product,id) =>{
    var result = -1;
    product.forEach((p,index) => {
        
        if(p.id == id){
            result = index;
        }
        
    });

    console.log(result);

    return result;
}

const productReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'SHOW_PRODUCT': {
            return{
                ...state,
                list: action.payload,
            }
        }

        case 'REMOVE_PRODUCT':{

            
            var newList = action.payload;
            
            var index = findIndex(newList,action.idProduct);
            
            newList.splice(index,1);
            
            return{
                ...state,
                list: newList,
            }
        }

        default:
            return state;
            
    }
}

export default productReducer;