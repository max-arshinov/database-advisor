import React, { useState } from 'react';
import { Checkbox as MCheckbox, FormControlLabel } from '@mui/material';

type CheckboxProps = {
    label: string
}

export default function Checkbox(props: CheckboxProps) {
    const [checked, setChecked] = useState(false);

    const handleChange = (event: any) => {
        setChecked(event.target.checked);
    };

    return (
        <FormControlLabel
            control={
                <MCheckbox
                    checked={checked}
                    onChange={handleChange}
                    color="primary"
                />
            }
            label={props.label}
        />
    );
}