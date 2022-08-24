import React from 'react'
import { AppBar, Typography, Box,  } from '@mui/material'

import gallery from "./picture.png";

export const Navbar = () => {
  return (
    <AppBar position="fixed" color="primary">
    <Box
      m
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        m: 2,
      }}
    >
      <img src={gallery} width="30px" height="30px" alt="" />
      <Typography
        sx={{
          marginLeft: "5px",
        }}
        variant="h6"
      >
        Mermories
      </Typography>
    </Box>
  </AppBar>
  )
}
