import { Box, Button, Input, Link, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import React from "react";

const SignUp = ({ parentCallback }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  const sendData = () => {
    parentCallback("in-actived");

  };
  return (
    <Box padding='50px 46px 0px 50px' textAlign='center'>
      <Typography variant="h6" mb='30px'>Welcome to Shop App</Typography>
      <form className="form-auth" onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("username")}
          type="text"
          name="username"
          className="input-signup"
          autoComplete="off"
          placeholder="User Name"
        />
        <Input
          {...register("email")}
          type="text"
          name="email"
          className="input-signup"
          autoComplete="off"
          placeholder="Email"
        />
        <Input
          {...register("password")}
          type="text"
          name="password"
          className="input-signup"
          autoComplete="off"
          placeholder="Password"
        />
        <Input
          {...register("confirmpassword")}
          type="text"
          name="confirmpassword"
          className="input-signup"
          autoComplete="off"
          placeholder="Confirm Password"
        />
        <Button className="Login" type="submit">Register</Button><br />
        <Box className="Box__linkto">
          <Link className={`linkto `} onClick={() => sendData()}>
            login
          </Link>
        </Box>
      </form>
    </Box>
  );
};

export default SignUp;
