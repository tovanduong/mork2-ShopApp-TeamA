import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { LabelInputField } from '../../../../../components/FormFields';
import { yupResolver } from '@hookform/resolvers/yup';
import { TextAreaFieldInput } from '../../../../../components/FormFields/TextAreaFieldInput';
import './shippingForm.scss';
import { RadioInputField } from '../../../../../components/FormFields/RadioInputField';

const SignupSchema = yup.object().shape({
  contact: yup.string().required('please input contact'),
  address: yup.string().required('Please input address'),
  email: yup.string().required('Please input email').email('email invalid'),
});

const ShippingForm = ({ getCart, onSubmit, initialValue }) => {
  const [enable, setEnable] = useState(true);
  const handleEnable = () => {
    setEnable(!enable);
  };

  const { control, handleSubmit, reset } = useForm({
    defaultValues: initialValue,
    resolver: yupResolver(SignupSchema),
  });

  const handleSubmitForm = (Formvalue) => {
    onSubmit(Formvalue);
    reset({ Formvalue: '' });
  };

  const getSubTotal = () => {
    const total = getCart?.items?.reduce((price, item) => price + item.total, 0);
    return total;
  };

  const style = {
    '&:not(:firstChild)': {
      marginBottom: '10px',
    },
    color: '#CCC !important',
    width: '60%',
  };
  return (
    <Box>
      <form onSubmit={handleSubmit(handleSubmitForm)}>
        <Box className="shippingInfo">
          <Typography variant="h4" mb="10px">
            Shipping Infomation
          </Typography>
          <TextAreaFieldInput
            name="address"
            control={control}
            variant="standard"
            className="CheckOut-Input"
            autoComplete="off"
            disabled={enable}
            placeholder="address"
            style={style}
          />
          <Box>
            <LabelInputField
              name="contact"
              control={control}
              variant="standard"
              className="CheckOut-Input"
              type="text"
              autoComplete="off"
              placeholder="Contact"
              label="Phone Number"
              style={style}
              disabled={enable}
            />
          </Box>
          <Box>
            <LabelInputField
              name="email"
              control={control}
              variant="standard"
              className="CheckOut-Input"
              type="text"
              autoComplete="off"
              placeholder="Email"
              label="Email"
              style={style}
              disabled={enable}
            />
          </Box>
          <Box>
            <Button className="CheckOut-Btn" type="submit" onClick={() => handleEnable()}>
              {enable ? 'Edit Address' : 'Confirm'}
            </Button>
          </Box>
        </Box>
        <Box className="Checkout">
          <Typography variant="h4" mb="10px">
            Check Out
          </Typography>
          <Box className="Checkout__subTotal">
            <Typography variant="subtitle1">Subtotal</Typography>
            <Typography variant="body1">{getSubTotal()} $</Typography>
          </Box>
          <Box className="Checkout__subTotal">
            <Typography variant="subtitle1">Shipping</Typography>
            <Typography variant="body1">
              {getSubTotal() === 0 || getSubTotal() === undefined ? 0 : 20} $
            </Typography>
          </Box>
          <hr style={{ position: 'absolute', top: '125px', left: 0, width: '100%' }} />
          <Box className="Checkout__subTotal">
            <Typography variant="h6">Total</Typography>
            <Typography variant="body1">
              {getSubTotal() === 0 || getSubTotal() === undefined ? 0 : getSubTotal() + 20}$
            </Typography>
          </Box>
          <Box className="Checkout__radio-container">
            <Box>
              <RadioInputField
                control={control}
                name="paymentMethod"
                options={[
                  { label: 'Cash on delivery', value: 'Cash on delivery' },
                  { label: 'Check payments', value: 'Check payments' },
                  { label: 'PayPal', value: 'PayPal' },
                  { label: 'Master Card', value: 'Master Card' },
                ]}
              />
            </Box>
          </Box>
          <Box className="shoppingCart-CartItem">
            <Button type="submit">Check Out</Button>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default ShippingForm;
