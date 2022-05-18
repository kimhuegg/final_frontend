import React from 'react'
import { Container, Box, Typography, Divider, IconButton, TextField, Grid, Button } from '@mui/material'
import pic from './noi.jpg'
import CategoryItem from '../../components/category/CategoryItem'

function Categories() {
  return (
    <Container>
      <Box style={{
        height: 300,
        overflow: 'hidden',
        backgroundImage: `url(${pic})`,
        marginTop: 15,
        // borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
      }}>
        <Typography style={{
          fontSize: 40,
          borderBottom: '2px solid #fff',
          backgroundColor: 'rgb(0 0 0 / 25%)',
          color: '#fff',
          padding: 5
        }}>Thể loại</Typography>
      </Box>
      <Box style={{
        border: '1px solid #bdbdbd',
        marginTop: 20,
        boxShadow: 'rgb(232 234 235) 5px 5px 7px',
        padding: 20,
        display: 'grid',
        gridTemplateColumns: '4fr 4fr 4fr',
        gridColumnGap: 20,
        gridRowGap: 20
      }}>
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />

      </Box>
      <Button>Xem thêm</Button>
    </Container>
  )
}

export default Categories