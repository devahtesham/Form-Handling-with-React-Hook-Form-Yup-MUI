import React from 'react'
import { Avatar, Box, Container, Typography } from '@mui/material'
import HowToRegIcon from '@mui/icons-material/HowToReg';

const SignUp = () => {
    return (
        <Box>
            <Avatar sx={{ backgroundColor: "purple", m: 1, }}>
                <HowToRegIcon />
            </Avatar>
        </Box>
    )
}

export default SignUp