import { Box, Button, Input, Link, Modal, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import React from "react";
import Forgot from "./Forgot";
import CloseIcon from '@mui/icons-material/Close';

const Login = ({ parentCallback }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  const sendData = () => {
    parentCallback("Actived");

  };
  const childClose = (childData) => {
    setOpen(childData)
  }

  return (
    <Box padding='50px 50px 0px 50px' textAlign='center' position='relative'>
      <Typography variant="h6" mb='52px'>Welcome to Shop App</Typography>
      <form className="form-auth" onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("email")}
          type="text"
          name="email"
          className="input1"
          placeholder="Email"
          autoComplete="off"
        />
        <Input
          {...register("password")}
          type="text"
          name="password"
          placeholder="Password"
          className="input1"
          autoComplete="off"
        />
        <Link className='linkto forgot' onClick={() => handleOpen()} >
          forgot
        </Link>
        <Button className="Login" type="submit">Login</Button><br />
        <Box className="Box__linkto">
          <Link className='linkto' onClick={() => sendData()}>
            Create An Account
          </Link>
        </Box>

      </form>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className='modal-box-auth'>
          <CloseIcon className="close-modal" onClick={handleClose} />
          <Forgot propsClose={childClose} />
          <Box className={`layout`}>
            <img src="./image/icon/VectorBag.png" alt="VectorBag" />
            <img src="./image/icon/ShopApp.png" alt="ShopApp" />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Login;
