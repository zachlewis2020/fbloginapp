import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox, { CheckboxProps } from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { FormLabel, FormControl, FormHelperText } from '@material-ui/core';

const GreenCheckbox = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

export default function HustleItems() {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedF: false,
        checkedG: false,
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <FormControl component="fieldset" >

            <FormGroup>
                <FormLabel component="legend">Select A Hustle</FormLabel>
                <FormControlLabel
                    control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
                    label="Online Event Manager"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.checkedB}
                            onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                    }
                    label="Messenger Service"
                />
                <FormControlLabel control={<Checkbox name="checkedC" />} label="Grocery Pickup Service" />
                <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="TBD: Lunch Delivery Service" />
                <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="TBD: Breakfast Delivery Service" />
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={state.checkedF}
                            onChange={handleChange}
                            name="checkedF"
                            indeterminate
                        />
                    }
                    label="Covid Social Distance Home Visitation Service"
                />
                <FormControlLabel
                    control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
                    label="Covid Planning/Preparation for Church Services"
                />
                <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
                    label="Covid Event Planning Service"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                            checkedIcon={<CheckBoxIcon fontSize="small" />}
                            name="checkedI"
                        />
                    }
                    label="Covid Home Basic Yard and Repair Services"
                />
            </FormGroup>
            <FormHelperText>Check At Least One</FormHelperText>
        </FormControl>
    );
}
