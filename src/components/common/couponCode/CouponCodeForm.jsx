import SearchIcon from "@mui/icons-material/Search";
import { Box, Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { LabelInputField } from "../../FormFields";
import { makeStyles } from "@mui/styles";
import "./couponCode.scss";

const CouponCodeForm = ({ initialValue, onSubmit }) => {
  const { control, handleSubmit } = useForm({
    defaultValues: initialValue,
  });

  const handleSubmitForm = (Formvalue) => {
    onSubmit(Formvalue);
  };
  const style = {};
  return (
    <Box>
      <form onSubmit={handleSubmit(handleSubmitForm)} className="CouponForm">
        <LabelInputField
          name="coupon"
          control={control}
          style={style}
          variant="outlined"
          type="text"
          placeholder="Coupon Code"
          className="CouponForm-input"
          autoComplete="off"
        />
        <Box className="CouponForm-btn">
          <Button type="submit">Apply Coupon</Button>
        </Box>
      </form>
    </Box>
  );
};

export default CouponCodeForm;
