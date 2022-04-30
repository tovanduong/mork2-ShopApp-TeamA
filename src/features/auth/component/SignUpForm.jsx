import { Box, Button } from '@mui/material';
import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { LabelInputField } from '../../../components/FormFields';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

function SignUpForm({ initialValue, onSubmit }) {
    const [show, setShow] = useState('password')
    const SignupSchema = yup.object().shape({
        username: yup.string().required("please input username").min(3, 'Min is 3').max(15, 'Max is 15'),
        email: yup.string().required("please input email").email("email invalid"),
        password: yup.string().required("Please input password").min(3, 'Min is 3').max(15, 'Max is 15'),
        confirmPassword: yup.string().required("Please confirm password").min(3, 'Min is 3').max(15, 'Max is 15').test('confirm', 'The passwords do not match', (value) => {
            return value === password.current
        })
    });
    const { control, handleSubmit, reset, watch } = useForm({
        defaultValues: initialValue,
        resolver: yupResolver(SignupSchema)
    });
    const password = useRef({});
    password.current = watch("password", "");

    const handleSubmitForm = (Formvalue) => {
        onSubmit(Formvalue)
        reset({ Formvalue: '' })

    }

    const style = {
        display: 'block',
        maxWidth: '295px',
        marginRight: 0,
        padding: 0,
        marginBottom: '9px'
    }

    const handleShow = () => {
        if (show === 'password') {
            setShow('text')
        } else {
            setShow('password')
        }
    }
    return (
        <form onSubmit={handleSubmit(handleSubmitForm)} className="form-auth" >
            <LabelInputField name='username' control={control} variant='standard' style={style} autoComplete="off" placeholder='User Name' />
            <LabelInputField name='email' control={control} variant='standard' style={style} type='text' autoComplete="off" placeholder='Email' />
            <Box position='relative'>
                <LabelInputField name='password' control={control} variant='standard' style={style} type={show} autoComplete="off" placeholder='Password' />
                <Box className='show-pw' onClick={handleShow}>
                    {show === 'password' ? 'show' : 'hide'}
                </Box>
            </Box>
            <LabelInputField name='confirmPassword' control={control} variant='standard' style={style} type='password' autoComplete="off" placeholder='Confirm Password' />
            <Box mt='10px' width='100%'>
                <Button className="Login" type='submit'>Register</Button>
            </Box>
        </form>
    );
}

export default SignUpForm