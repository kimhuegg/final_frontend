import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Pagination from '@mui/material/Pagination';
import YourPosts from './YourPosts';
import YourRecipes from './YourRecipes';
import YourSave from './YourSave';

export default function TabProfile() {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{
                width: '100%',
                border: '1px solid #bdbdbd',
                borderRadius: 3,
            }}>
                <TabContext value={value} style={{
                    padding: 2
                }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider', paddingLeft: 3 }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Bài viết" value="1" />
                            <Tab label="Công thức" value="2" />
                            <Tab label="Đã lưu" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1">
                        <YourPosts />
                    </TabPanel>
                    <TabPanel value="2">
                        <YourRecipes />
                    </TabPanel>
                    <TabPanel value="3">
                        <YourSave />
                    </TabPanel>
                </TabContext>
                
            </Box>

        </>

    );
}