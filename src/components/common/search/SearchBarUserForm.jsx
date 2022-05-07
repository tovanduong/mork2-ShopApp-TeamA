import SearchIcon from '@mui/icons-material/Search';
import { Box, Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { LabelInputField } from '../../FormFields';
import { makeStyles } from '@mui/styles';
import './searchBar.scss';

const useStyles = makeStyles({
  root: {
    color: '#666C72',
    width: '40px !important',
    height: '40px !important',
  },
});
function SearchBarUserForm({ initialValue, onSubmit }) {
  const classes = useStyles();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: initialValue,
  });

  const handleSubmitForm = (Formvalue) => {
    onSubmit(Formvalue);
    reset({ Formvalue: '' });
  };
  const style = {};
  return (
    <Box>
      <form onSubmit={handleSubmit(handleSubmitForm)} className="searchBar-User">
        <LabelInputField
          name="search"
          control={control}
          style={style}
          variant="standard"
          type="text"
          placeholder="Search Item"
          className="mainbar__search--input"
          autoComplete="off"
        />
        <Box ml="245px">
          <Button type="submit">
            <SearchIcon className={classes.root} />
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default SearchBarUserForm;
