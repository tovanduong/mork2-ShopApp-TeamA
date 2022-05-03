import { Box, Button } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { LabelInputField } from '../../../../../components/FormFields';

function VerifyForm({ initialValue, onSubmit }) {
    // const [disable, setDisable] = useState(true)
    const { control, handleSubmit, reset } = useForm({
        defaultValues: initialValue,
    });

    const handleSubmitForm = (Formvalue) => {
        onSubmit(Formvalue)
        reset({ Formvalue: '' })
    }

    const style = {
        display: 'block',
        marginBottom: '25px',
        overflow: 'hidden'
    }


    return (
        <Box>
            <form onSubmit={handleSubmit(handleSubmitForm)} className="form-auth">
                <LabelInputField name='token' control={control} variant='standard' style={style} autoComplete="off" placeholder='Token' />
                <Box width='100%'>
                    <Button className="Login" type='submit'>Verify</Button>
                </Box>
            </form >
        </Box>
    );
}

export default VerifyForm