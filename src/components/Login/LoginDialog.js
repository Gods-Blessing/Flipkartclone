import React, { useState, useContext } from "react";
import { UserContext } from "../../context/dataProvider";


import { Box, Dialog, TextField, Typography, Button, styled} from "@mui/material";

import { AuthenticateSignup, AuthenticateLogin } from "../../service/api";



const Component = styled(Box)`
    height: 70vh;
    width: 40vw;
    display: flex;
`;

const Image = styled(Box)`
    background: #2874f0 ;
    background-image: url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png);
    background-repeat: no-repeat;
    background-position: center 85%;
    background-size: 80%;
    width: 25%;
    height: 80.4%;
    padding: 45px 35px;
    font-size: 12px;

    & > p, & > h5{
        color:white;
        font-weight: 600;
    }
`;

const Wrapper = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 45px 35px;
    flex: 1;

    & > div, & > button, & > p{
        margin-top: 20px;
    }
`;

const Text = styled(Typography)`
    font-size: 12px;
    color: #878787
`;

const CreateAccount = styled(Typography)`
    font-size: 14px;
    text-align: center;
    color: #2874f0;
    font-weight:600;
    cursor: pointer;
`;



const LoginButton = styled(Button)`
    text-transform: none;
    background-color: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background-color: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;


const accountInitialValue = {
    login:{
        view:'login',
        heading:'Login',
        subheading:'Get access to your orders, wishlist and Recommendations'
    },
    signup:{
        view:'signup',
        heading:'SignUp',
        subheading:'Sign up with your mobile number to get started'
    }
}

const SignupInitialValues =     {
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    phone:''
};

const Error = styled(Typography)`
    color: #ff6161;
    font-size: 10px;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;





function LoginDialog(props){
    const [login, setLogin] = useState({emailorphone:'', password:''})

    const {account, setAccount} = useContext(UserContext);

    const [loginorSignup, setLoginorSignup] = useState(accountInitialValue.login);

    const [signup, setSignup] = useState(SignupInitialValues);

    const [error, setError] = useState(false);

    function Toggleaccount(){
        setLoginorSignup(accountInitialValue.signup);
    }

    function InputChange(e){
        /* console.log(signup); */
        setSignup({...signup, [e.target.name]: e.target.value});
    }

    /*---------- for Login------------- */
    function onvalueChange(e){
        /* console.log(signup); */
        setLogin({...login, [e.target.name]: e.target.value});
    }

    async function loginuser(){
        let user = await AuthenticateLogin(login);
        // setAccount({emailorphone:'', password:''})
        console.log(user)
        if(user.data.message.firstname){
            setAccount(user.data.message.firstname)
            HandleClose();
            if(error){
                setError(false);
            }
        }else{
            setError(true);
        }
    }


    // --------for showing of signin/signup page--------------
    function HandleClose(){
        props.setOpen(false)
        setLoginorSignup(accountInitialValue.login)
    }

    async function signupUser(){
        let user = await AuthenticateSignup(signup);
        if(!user) return;
        HandleClose();
        setAccount(signup.firstname);
    }

    return(
        <Dialog open={props.open} onClose={HandleClose}>
            <Component>
                <Image>
                    <Typography variant="h5">{loginorSignup.heading}</Typography>
                    <Typography style={{marginTop: 20}}>{loginorSignup.subheading}</Typography>
                </Image>

                { loginorSignup.view === 'login' ?

                    <Wrapper>
                        <TextField variant="standard" onChange={onvalueChange} name="emailorphone" label="Enter Email/Mobile Number"/>
                        {error && <Error>Please enter valid Email/Password</Error>}
                        <TextField variant="standard" onChange={onvalueChange} name="password" label="Enter Password"/>
                        <Text>By continuing you agree to Flipkart's Terms of Use and Privacy Policy. </Text>

                        <LoginButton onClick={loginuser}>
                            Login
                        </LoginButton>

                        <Typography style={{textAlign: 'center'}}>OR</Typography>

                        <RequestOTP>Request OTP</RequestOTP>

                        <CreateAccount onClick={()=> Toggleaccount()}>New to Flipkart? Create and account</CreateAccount>

                    </Wrapper>
                :

                    <Wrapper>
                        <TextField variant="standard" type="text" onChange={InputChange} name="firstname" label="Enter Firstname"/>
                        <TextField variant="standard" type="text" onChange={InputChange} name="lastname" label="Enter Lastname"/>
                        <TextField variant="standard" type="text" onChange={InputChange} name="email" label="Enter Email"/>
                        <TextField variant="standard" type="text" onChange={InputChange} name="password" label="Enter Password"/>
                        <TextField variant="standard" type="text" onChange={InputChange} name="phone" label="Enter Phone"/>
                        

                        <LoginButton onClick={signupUser}>Continue</LoginButton>

                        
                    </Wrapper>


                }
            </Component>
        </Dialog>
    )
}


export default LoginDialog;