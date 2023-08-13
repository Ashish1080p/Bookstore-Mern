
import React, { useState , useContext } from 'react'
import Dialog from '@mui/material/Dialog';
import { Button, TextField, styled, Box, Typography } from '@mui/material'
// importing API
import {userAuthentication , userLoginAuthentication } from '../../services/api.js'

// import usecontext data 
import { DataContextVariable } from '../context/DataContext.jsx';


// styling 
const ContainerBox = styled(Box)`
 display: flex;
 height : 32rem;
 width : 40rem;
`

const Image = styled('img')({
  height: '39%',
  width: "75%",
  padding: '1.5rem 1rem 0px 1rem ',

  margin: '8.5rem 1rem 1rem 1rem'

})

const LoginContaier = styled(Box)`
   display : flex;
   flex-direction : column;
   padding : 2rem 2.5rem;
   flex : 1;
   & > div , & > p , & > button {
    margin-top : 1.2rem;
   }
`;

const LoginButton = styled(Button)`
 background-color : cyan;
 color : #fff;
 height  : 2.5rem;
  border-radius : 3px;
  
`
const RequestOTP = styled(Button)`
  background-color : #fdcd26;
 color : #2874f0;
 height  : 2.5rem;
  border-radius : 3px;
  box-shadow : 0 2px 4px 0.5px rgb( 0 0 0/20%)
`
const CreateAcc = styled(Typography)`
   font-size : 0.81rem;
   color : #2874f0;
   text-align  : center;
   font-weight : 550;
   cursor : pointer;
`;

const Error = styled(Typography)`
font-size : 0.81rem;
color : red;
text-align  : center;
font-weight : 550;
line-height : 0;
paddin : 0.25rem
`;

const accountValue = {
  login : {
    view : 'login',
    heading : 'Login' ,
    subHeading : 'Get access to your Orders , Wishlist  and Recommendations'
  },
  signUp : {
    view : 'SignUp' ,
    Heading : 'Looks like you are new here!.' ,
    subHeading : 'Sign up with your mobile number to get started '
  }
};

const signUpInitialValue = {
   firstname : '',
   lastname : '' ,
   username : '',
   email : '',
   password  : '' ,
   phone : ''
}

const LoginInitial = {
  email : '' ,
  password : ''
}

const LoginDialog = ({ open, setClose }) => {

  // states
  const [ account , setAccount  ] = useState(accountValue.login);
  const [signUp , setSignUp] = useState(signUpInitialValue);
  const [loginData , setLoginData] = useState(LoginInitial);
  const [error , setError] = useState(false)

  // USecontext 
  const {   setUserName } = useContext(DataContextVariable)

  // close dialog
  const handleClose = () => {
    setClose(false);
    setAccount(accountValue.login);
    setError(false)
  };

  // function for getting singup values 
  const InputChange = (e)=>{
     setSignUp({...signUp , [e.target.name] : e.target.value });
     
  }

  // calling Api function inside this function to post data to database
  const signupForm = async ()=>{
   let response =   await userAuthentication(signUp);
    if(!response) return 
    handleClose();
    setUserName(signUp.firstname)
  }
 
  // function for geeting login value
  const inputValueLogin = (e)=>{
      setLoginData({...loginData , [e.target.name] : e.target.value })
  }

  // sending user login details to backend
  const loginUser = async()=> {
    let response = await userLoginAuthentication(loginData)
    if(response.status === 200){
      // console.log(response);
      // console.log(response?.data?.data?.firstname);

      localStorage.setItem('token' , response?.data?.auth)
      setUserName(response?.data?.data?.firstname)
      handleClose()
      
    }else{
    setError(true)
    }
  }
 
  return (
    <div>
      <Dialog open={open} onClose={handleClose} PaperProps={{ sx : { maxWidth : 'unset'} }} >

        <ContainerBox>
          <Box style={{ backgroundColor: 'cyan', width: '34%', padding: '2rem 2rem' }}>
            <h3 style={{color : 'white' , fontWeight : '550' }} >{ account.Heading} </h3>
            <Typography style={{color : 'white' , fontWeight : '550' }} > { account.subHeading}</Typography>
            <Image src="book.png" alt="" />
          </Box>
         { account.view === 'login' ?
          <LoginContaier>

            <TextField variant='standard' onChange={(e) =>inputValueLogin(e)} name='email' label="Enter your Email/Mobile number" />

            <TextField variant='standard' onChange={(e) =>inputValueLogin(e)} name='password' label="Enter your password " />

          { error &&  <Error>Invalid email or password</Error> }

            <Typography style={{fontSize : '0.75rem' , color : 'var(--font-grey)' }} >By continuing, you agree to Kindle's Terms of use & policy.</Typography>

            <LoginButton variant="text" onClick={loginUser} >Login</LoginButton>

            <Typography style={{ textAlign : 'center'}} > OR</Typography>

            <RequestOTP variant="text">Request OTP</RequestOTP>

            <CreateAcc onClick={()=> setAccount(accountValue.signUp) } >New to Kindle? Create an account </CreateAcc>

          </LoginContaier>

          : 
          <LoginContaier>

          <TextField variant='standard' onChange={(e)=> InputChange(e)} name='firstname' label="Enter your Firstname " />

          <TextField variant='standard' onChange={(e)=> InputChange(e)} name='lastname' label="Enter your Lastname " />

          <TextField variant='standard' onChange={(e)=> InputChange(e)} name='username' label="Enter Username " />

          <TextField variant='standard' onChange={(e)=> InputChange(e)} name='email' label="Enter Email " />

          <TextField variant='standard' onChange={(e)=> InputChange(e)} name='password' label="Enter your password " />

          <TextField variant='standard' onChange={(e)=> InputChange(e)} name='phone' label="Enter your number " />

          <LoginButton variant="text" onClick={()=> signupForm()} >Login</LoginButton>

        </LoginContaier>
}


        </ContainerBox>
      </Dialog>
    </div>
  )
}

export default LoginDialog
