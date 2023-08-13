import axios from 'axios';
const url = 'https://backend-mern-faze.onrender.com'
//const url = 'http://localhost:8000'/

export const userAuthentication = async (data) =>{
    try {
      
   return  await axios.post(`${url}/signup` , data ) 
    } catch (error) {
        console.log('error' , error.message);
    }
};

export const userLoginAuthentication = async (data ) => {
    try {
        console.log('userLogin ');
       
     return  await  axios.post(`${url}/login` , data )
    } catch (error) {
         console.log(error.message , "error");
         return error.response
    }
}

