import React from 'react'

import SaveItem from './SaveItem'

import {
    Container,
    Box,
    Button,
    Grid,
    Pagination
  } from '@mui/material'

function YourSave() {
  return (
    <>
    <SaveItem/>
    <SaveItem/>
    <SaveItem/>
    <Pagination count={10} color="primary" style={{
        marginBottom: 15
      }} />
    </>
  )
}

export default YourSave