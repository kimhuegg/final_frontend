import React from 'react'

import {
  Container,
  Box,
  Button,
  Grid,
  Pagination
} from '@mui/material'

import YourPostItem from './YourPostItem'

function YourPosts() {
  return (
    <Box>
      <YourPostItem />
      <YourPostItem />
      <YourPostItem />
      <Pagination count={10} color="primary" style={{
        marginBottom: 15
      }} />
    </Box>
  )
}

export default YourPosts