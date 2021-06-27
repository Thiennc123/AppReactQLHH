const initialState = {
    list:[],
}

const findIndex = (type,id) =>{
    var result = -1;
    type.forEach((p,index) => {
        
        if(p.id == id){
            result = index;
        }
        
    });

    

    return result;
}

const typeReducer = (state = initialState, action) =>{
    switch (action.type){
        case 'SHOW_TYPE': {
            return{
               state,
            }
        }

        

        default:
            return state;
            
    }
}

export default typeReducer;