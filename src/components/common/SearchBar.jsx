
import SearchIcon from '@mui/icons-material/Search';
import { Box, Input } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';

const useStyles = makeStyles({
    searchBar: {
        display: 'flex',
    },
    root: {
        color: '#666C72',
        width: '40px !important',
        height: '40px !important',
    },
});

const SearchBar = () => {
    const classes = useStyles();
    return (
        <Box className={classes.searchBar}>
            <Input type='text' placeholder='Search Item' className='mainbar__search--input' ></Input>
            <Box  ><SearchIcon className={classes.root} /></Box>
        </Box >
    )
}

export default SearchBar