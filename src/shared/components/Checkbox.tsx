import { Checkbox as MCheckbox, FormControlLabel } from '@mui/material';

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (event: any) => void;
};

export default function Checkbox(props: CheckboxProps) {
  return (
    <FormControlLabel
      control={
        <MCheckbox
          checked={props.checked}
          onChange={props.onChange}
          color='primary'
        />
      }
      label={props.label}
    />
  );
}
