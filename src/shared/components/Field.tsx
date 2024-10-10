import React from 'react';
import { TextField, FormControl } from '@mui/material';
import {TextFieldProps} from "@mui/material/TextField/TextField";

type TextInputProps = TextFieldProps & {
    label: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    // small?: boolean;
}

export default function Field(props: TextInputProps) {
    // { label, value, onChange, small, type = 'text' }
    
    return (
        <FormControl fullWidth={props.fullWidth}>
            <TextField {... props}
                // label={label}
                // value={value}
                // onChange={onChange}
                // variant="outlined"
                // type={type}
            />
        </FormControl>
    );
};
