import React from 'react'
import { Typography, Box, Divider } from '@mui/material'
import pic from './logo123.png'

function PartOfPostBody(){
    return(
        <Box style={{
            paddingTop: 25,
            
        }}>
            <Typography variant='h5' style={{
                color : 'grey',
                paddingBottom: 10
            }}>Tiêu đề 1</Typography>
            <Box style={{
                // height: 200,
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems : 'center'
                
            }}>
                <img src={pic} />
            </Box>
            <Typography>Thực tế, Philippines gây nhiều khó khăn cho Việt Nam, thậm chí vượt lên dẫn trước nhờ công của Annis phút 15. Tuy nhiên, với những điều chỉnh nhân sự và lối chơi hợp lý, thầy trò HLV Mai Đức Chung đã ngược dòng từ các bàn thắng của Nguyễn Thị Tuyết Dung và Trần Thị Thuỳ Trang.</Typography>

        </Box>
    )
}



function PostBody() {
    return (
        <Box style={{
            padding: 20,
            textAlign: 'left'
        }}>
            <Typography>Thực tế, Philippines gây nhiều khó khăn cho Việt Nam, thậm chí vượt lên dẫn trước nhờ công của Annis phút 15. Tuy nhiên, với những điều chỉnh nhân sự và lối chơi hợp lý, thầy trò HLV Mai Đức Chung đã ngược dòng từ các bàn thắng của Nguyễn Thị Tuyết Dung và Trần Thị Thuỳ Trang.</Typography>
            <PartOfPostBody />
            <PartOfPostBody />
            <PartOfPostBody />

        </Box>
    )
}

export default PostBody