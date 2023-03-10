import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Header = () => {

  return (
    <Box sx={{backgroundColor:'white', width:'100%', display:'flex', justifyContent:'space-between',alignItems:'center', padding:'2rem 0'}}>
        <Typography variant="h4">Most Starred Repos</Typography>
    </Box>
  )
}

export default Header
