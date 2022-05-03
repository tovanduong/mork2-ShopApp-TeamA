
import { Box, Button } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LabelInputField } from '../../../components/FormFields';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const SignupSchema = yup.object().shape({
    email: yup.string().required("please input email").email("email invalid"),
});

function ForgotForm({ initialValue, onSubmit }) {
    // const [disable, setDisable] = useState(true)
    const { control, handleSubmit } = useForm({
        defaultValues: initialValue,
        resolver: yupResolver(SignupSchema)
    });

    const handleSubmitForm = (Formvalue) => {
        onSubmit(Formvalue)
    }

    const style = {
        display: 'block',
        marginBottom: '25px',
    }


    return (
        <Box>
            <form onSubmit={handleSubmit(handleSubmitForm)} className="form-auth">
                <LabelInputField name='email' control={control} variant='standard' style={style} autoComplete="off" placeholder='Email' />
                <Box width='100%'>
                    <Button className="Login" type='submit'>Recover Password</Button>
                </Box>
            </form >
        </Box>
    );
}

export default ForgotForm