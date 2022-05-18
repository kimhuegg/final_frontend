import React, {useState} from 'react'
import { Container, Box, Typography, Divider, IconButton, TextField, Grid , Button} from '@mui/material'
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ForYouItem from './ForYouItem';
import HiveIcon from '@mui/icons-material/Hive';

function ForYou() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <Box style={{
            border: '1px solid #bdbdbd',
            marginTop: 20,
            boxShadow: 'rgb(232 234 235) 5px 5px 7px',
            

        }}>
            <Typography variant='h6'>Dành cho bạn</Typography>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Mới" value="1" />
                        <Tab label="Sôi nổi" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <ForYouItem />
                    <ForYouItem />
                    <ForYouItem />
                    <ForYouItem />

                </TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
            </TabContext>
            <Button>Xem thêm</Button>
        </Box>
    )
}

export default ForYou