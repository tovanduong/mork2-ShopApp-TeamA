import { Box, Button, Input, Link, Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";

const Forgot = ({ propsClose }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    const handleClick = () => {
        propsClose(false)
    }
    return (
        <Box padding='50px 50px' textAlign='left'>
            <Typography variant="h4" mb='7px'>Forgot Password?</Typography>
            <Typography variant="subtitle1" fontSize='12px' mb='31px'>Please enter your email to recover your password </Typography>
            <Box textAlign='center'>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        {...register("email")}
                        type="text"
                        name="email"
                        className="input1"
                        autoComplete="off"
                        placeholder="Email"
                    />
                    <Input
                        {...register("code")}
                        type="text"
                        name="code"
                        className="input1"
                        autoComplete="off"
                        placeholder="Code"
                    />
                    <Button className="Login" type="submit">Recover Password</Button><br />

                </form>

                <Link textAlign='center' className='linkto' onClick={() => handleClick()} >
                    Login
                </Link>
            </Box>
        </Box>
    );
};

export default Forgot;
