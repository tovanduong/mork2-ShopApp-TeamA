
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Link } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { LabelInputField } from '../../../components/FormFields';

const SignupSchema = yup.object().shape({
    email: yup.string().required("please input email").email("email invalid"),
    password: yup.string().required("Please input password").min(3, 'Min is 3').max(15, 'Max is 15'),
});

function LoginForm({ initialValue, onSubmit, onClick, onClose }) {
    const { control, handleSubmit, reset } = useForm({
        defaultValues: initialValue,
        resolver: yupResolver(SignupSchema)
    });
    const handleSubmitForm = (Formvalue) => {
        onSubmit(Formvalue)
        reset({ Formvalue: '' });
        // onClose()
    }
    const handleClickModal = () => {
        onClick()
    }

    const style = {
        display: 'block !important',
        width: '100%',
        maxWidth: '295px',
        marginBottom: '23px',
    }


    return (
        <form onSubmit={handleSubmit(handleSubmitForm)} className="form-auth">
            <LabelInputField name='email' control={control} variant='standard' style={style} autoComplete="off" placeholder='Email' />
            <Box position='relative'>
                <LabelInputField name='password' control={control} variant='standard' style={style} type='password' autoComplete="off" placeholder='Password' />
                <Link className='linkto forgot' onClick={handleClickModal}>
                    forgot?
                </Link>
            </Box>
            <Box width='100%'>
                <Button className="Login" type='submit'>Login</Button>
            </Box>
        </form>
    );
}

export default LoginForm