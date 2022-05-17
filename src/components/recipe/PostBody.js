import { Typography, Box, Divider } from '@mui/material'
import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CardUserItem from './CardUserItem';
import Rating from '@mui/material/Rating';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CallMissedOutgoingIcon from '@mui/icons-material/CallMissedOutgoing';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import './css.css'

function PostBody() {
    return (<Box style={{
        padding: 20,
        textAlign: 'left'
    }}>
        <Typography>Thực tế, Philippines gây nhiều khó khăn cho Việt Nam, thậm chí vượt lên dẫn trước nhờ công của Annis phút 15. Tuy nhiên, với những điều chỉnh nhân sự và lối chơi hợp lý, thầy trò HLV Mai Đức Chung đã ngược dòng từ các bàn thắng của Nguyễn Thị Tuyết Dung và Trần Thị Thuỳ Trang.</Typography>
        <Box style={{
            margin: 20,
            border: '1px solid #bdbdbd',
            borderRadius: 5,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>

            <Box item xs={2}>
                <Typography><LocalDiningIcon />Chuẩn bị</Typography>

            </Box>
            <Box item xs={2}>
                <Typography><CallMissedOutgoingIcon />Calo</Typography>

            </Box>
            <Box item xs={2}>
                <Typography><SoupKitchenIcon />Chế biến</Typography>

            </Box>
            <Box item xs={2}>
                <Typography><PeopleAltIcon />Khẩu phần</Typography>

            </Box>
            <Box item xs={2}>
                <Typography><AccountBalanceWalletIcon />Chi phí</Typography>

            </Box>

        </Box>
        <Divider />
        <Box>
            <Typography variant='h6'>Nguyên liệu</Typography>
            <List dense={true}>

                <ListItem>
                    <ListItemText
                        primary="Single-line item"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Single-line item"
                    />
                </ListItem>
                <ListItem>
                    <ListItemText
                        primary="Single-line item"
                    />
                </ListItem>

            </List>
        </Box>
        <Divider />
        <Box>
            <Typography variant='h6'>Các bước chế biến</Typography>
            <Timeline position="right">
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <span style={{
                                width: 20,
                            }}>1</span>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography>Rửa rau</Typography>
                        <Typography style={{
                            fontSize: 13,
                            color : 'grey'
                        }}>rửa bằng nước muối</Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary">
                            <span style={{
                                width: 20,
                            }}>1</span>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography>Rửa rau</Typography>
                        <Typography style={{
                            fontSize: 13,
                            color : 'grey'
                        }}>rửa bằng nước muối</Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>


    </Box>)
}


export default PostBody