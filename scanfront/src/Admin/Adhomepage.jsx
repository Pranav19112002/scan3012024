import { Box } from '@mui/material'
import React from 'react'
import Adsidebar from '../components/Navbar/Adsidebar'
import Adnavbar from '../components/Navbar/Adnavbar'


const Adhomepage = () => {
  return (
    <div> 
      <Adnavbar />
      <Box height={20}>
   <Box sx={{ display: 'flex' }}>
    <Adsidebar/>
   <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
     <h1>Welcome to Private scanning centre</h1>
    </Box>
   </Box>
   </Box>
</div>
  )
}

export default Adhomepage