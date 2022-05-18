import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

function SearchBar({ setSearchQuery }) {
    const handleSearch = (e) => {
        e.preventDefault();
        console.log('serach')
    }
    return (
        <form onSubmit={handleSearch}>
            <TextField
                id="search-bar"
                className="text"
                onInput={(e) => {
                    setSearchQuery(e.target.value);
                }}
                label="Nhập từ khóa"
                variant="outlined"
                placeholder="Search..."
                size="small"
                style={{
                    width : '80%'
                }}
                
            />
            <IconButton type="submit" aria-label="search" >
                <SearchIcon style={{ fill: "blue" }} />
            </IconButton>
        </form>
    )
};

export default SearchBar;
