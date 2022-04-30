
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import React from 'react'

const Rate = ({ propsRate }) => {

    return (
        <Stack spacing={1}>
            <Rating name="half-rating-read" defaultValue={Number(propsRate)} precision={0.5} readOnly />
        </Stack>
    )
}

export default Rate