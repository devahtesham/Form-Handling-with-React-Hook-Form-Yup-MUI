import { Box, Button } from '@mui/material'
import React from 'react'

const ButtonComp = () => {
  return (
    <Box sx={{mt:"15px"}}>
        <Button type='submit' variant="contained" sx={{width:"100%"}}>SignUp</Button>
    </Box>
  )
}

export default ButtonComp