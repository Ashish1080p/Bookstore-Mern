

export const cartReducer =  ( state = { cart : [] } , action )=> {
 
 switch(action.type) {
       
    case  'addToCart' :
        const item = action.payload
       
        const existingItem = state.cart.find( (book) =>  book.result._id === item.result._id  );
        //   console.log(existingItem);
          
        if(existingItem) {
                
            return { ...state , cart : state.cart.map(items => items.data === existingItem.data ? item  : items  ) }
            
        }else {
       
         
            return { ...state , cart : [ ...state.cart , item ]}
        }

    case  "removeFromCart" :

        return { ...state , cart :  state.cart.filter((book)=> book.result._id !== action.payload)}


    default : return state
  }
}