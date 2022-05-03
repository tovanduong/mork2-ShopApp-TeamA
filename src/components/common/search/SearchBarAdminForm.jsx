import { useForm } from 'react-hook-form';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, Input } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useRef } from 'react';
import { LabelInputField } from '../../FormFields';


const SearchBarAdmin = ({ initialValue, onSubmit }) => {
    const { control } = useForm({
        defaultValues: initialValue,
    });
    const TimerRef = useRef(null)

    const handleChange = (e) => {
        const value = e.target.value

        if (!onSubmit) return;

        if (TimerRef.current) {
            clearTimeout(TimerRef.current)
        }

        TimerRef.current = setTimeout(() => {
            const formValue = {
                searchTerm: value
            }
            onSubmit(formValue)
        }, 800)

    }

    const style = {
        color: '#666C72',
        width: '100%',
        '&::before': {
            borderBottom: '0px !important'
        }
    }
    return (
        <form className='searchBar-admin'>
            <Button pd='0' sx={{ cursor: 'pointer', marginRight: '-12px' }} type='submit'><SearchIcon /></Button>
            <LabelInputField
                type='text'
                control={control}
                onChange={handleChange}
                variant='standard'
                name='search'
                placeholder='Search Product'
                style={style}
                autoComplete="off"
            >
            </LabelInputField>
        </form>

    )
}

export default SearchBarAdmin