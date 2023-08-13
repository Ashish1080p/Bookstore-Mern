import axios from "axios"
const url = 'https://backend-mern-faze.onrender.com'
//const url = 'http://localhost:8000'/

export const addToCart = (bookId , quantity ) => async(dispatch)=> {
    try {
       const { data} = await axios.get(`${url}/detail/${bookId}`)
    //   console.log(data , 'cart list'); \
   
       dispatch({
        type : 'addToCart' ,
        payload :{...data  , quantity} 
       })
    } catch (error) {
        dispatch({
            type : 'addToCartFailed' ,
            payload : error.message
           })
    }
}

export const removeFromCart = (bookId) => (dispatch)=>  {
    console.log(bookId , '23');
    dispatch({
        type : 'removeFromCart' , 
        payload : bookId 
    })
} 