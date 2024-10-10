import React from 'react';
import {Select, MenuItem, FormControl, InputLabel, SelectChangeEvent} from '@mui/material';

type Option = {
    label: string;
    value: string;
}

type DropdownProps = {
    options: Option[] | string[];
    label: string;
    value?: string | string[];
    multiple?: boolean;
    small?: boolean;
    handleChange?: (event: SelectChangeEvent) => void;
}

export default function Dropdown(props: DropdownProps) {
    const style = props.small ? {width: 100} : {};
    const value = props.value 
        ? props.value 
        : props.multiple 
            ? props.options.map((option: Option | string) => typeof(option) === 'object' ? option.value : option)
            : props.options[0];

    return <FormControl fullWidth={!props.small} >
        <InputLabel>{props.label}</InputLabel>
        <Select
            style={style}
            multiple={props.multiple}
            value={value as any}
            onChange={props.handleChange}
            label={props.label}
        >
            {props.options.map((option, index) => (
                <MenuItem key={index} value={typeof (option) === 'object' ? option.value : option}>
                    {typeof (option) === 'object' ? option.label : option}
                </MenuItem>
            ))}
        </Select>
    </FormControl>;
}
