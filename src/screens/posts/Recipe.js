import React from 'react'
import SearchBar from "material-ui-search-bar";
import { Container, Typography } from '@mui/material'
import Rating from '@mui/material/Rating';
import CommentBox from '../../components/common/CommentBox';


import RecipePost from '../../components/recipe/RecipePost'
import MaybeYouLike from '../../components/common/MaybeYouLike';

function Recipe() {
  return (
    <Container style={{
      width: 900
    }}>
      <RecipePost />
      <Typography>Đánh giá của bạn</Typography>
      <Rating
        name="simple-controlled"
        value={4}
        onChange={(event, newValue) => {
          return 1;
        }}
      />
      <MaybeYouLike />
      <CommentBox />
    </Container>
  )
}

export default Recipe