import axios from 'axios' ;
const url = 'https://backend-mern-faze.onrender.com'
//const url = 'http://localhost:8000'/

export const getBooks =  () =>  async (dispatch) =>{
    try {    
    const {data} =  await axios.get(`${url}/books` ) 
   console.log(data);
    dispatch({
        type : 'booksLoadSuccess',
        payload : data
    })

    } catch (error) {

        dispatch({
            type : 'booksLoadFailed',
            payload : error.message
        })
        console.log('error from actionfile ' , error.message);
    }
};



export const getBookDetails = (bookId)=> async(dispatch) =>{
   try {
    const {data} =  await axios.get(`${url}/detail/${bookId}` ) ;
    // console.log(data);
    dispatch({
        type : 'bookDetailLoaded',
        payload : data
    })
   } catch (error) {
    dispatch({
        type : 'bookDetailFailed',
        payload : error.message
    })
    console.log('error' , error.message );
   }
}