import React from 'react'
import { Avatar, Box, InputAdornment, Typography } from '@mui/material'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import InputField from './components/InputField';
import SelectFields from './components/SelectFields';
import CheckBoxComp from './components/CheckBoxComp';
import ButtonComp from './components/ButtonComp';
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { passwordRegExp, phoneRegExp } from './components/utils/utils';

// creating schema validation
const schema = yup.object({
    fullName: yup.string().required("Full Name is a Required Field"),
    emailAddress: yup.string().required("Email address is a Required Field").email(),
    password: yup.string().required("Password is a Required Field").matches(passwordRegExp,"Must Contain 8 characters, One Uppercase, One Lowercase, One Number and One special character"),
    confirmPassword: yup.string().oneOf([yup.ref('password'),null],"Password must be match"),
    phone: yup.string().required("Phone Number is a Required Field").matches(phoneRegExp,"Phone number is not valid "),
    country: yup.string().required("Country is a Required Field"),
    privacy: yup.bool().oneOf([true],"Field must be checked !")
})


const SignUp = () => {
const { handleSubmit,control,formState:{errors} }  = useForm({
    defaultValues:{
        fullName:"",
        emailAddress:"",
        password:"",
        confirmPassword:"",
        phone:"",
        country:"",
        privacy:false
    },
    resolver: yupResolver(schema)
}) 
// console.log("errors",errors);
const formSubmitHandler = (data)=>{
    console.log("data",data)
}
    return (
        <Box sx={{
            display:"flex",
            flexFlow:"column",
            alignItems:"center",
            mt :"4rem"
        }}>
            <Avatar sx={{
                backgroundColor: "purple", 
                m: 1,
            }}>
                <HowToRegIcon />
            </Avatar>
            <Typography component="h1">Signup</Typography>
            <Box noValidate onSubmit={handleSubmit(formSubmitHandler)} component={"form"} sx={{
                width:"100%",
                mt:"2rem"
            }}>
                <InputField label={"Full Name"} inputProps={{type:"text"}} control={control} name="fullName" errors={errors}/>  
                <InputField label={"Email"} inputProps={{type:"email"}} control={control} name="emailAddress" errors={errors}  />  
                <InputField label={"Password"} inputProps={{type:"password"}} control={control} name="password" errors={errors}/>  
                <InputField label={"Confirm Password"} inputProps={{type:"password"}} control={control} name="confirmPassword" errors={errors}/>  
                <InputField label={"Phone"} inputProps = {{
                    startAdornment: <InputAdornment position="start">+92</InputAdornment>,
                    type:"number"
                  
                }} control={control} name="phone" errors={errors} />  
                <SelectFields label={"Country"} control={control} name="country" errors={errors} />
                <CheckBoxComp label={"I accept Terms & Conditions "} control={control} name="privacy" errors={errors}  />
                <ButtonComp />
            </Box>        
        </Box>
    )
}

export default SignUp