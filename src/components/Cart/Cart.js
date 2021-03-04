import { Button, ButtonGroup, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBox from '@material-ui/icons/CheckBox';
import React from 'react';
import "./Cart.css";

const Cart = () => {
    const buttonStyle = {
        fontSize: '14px', 
        marginTop: '1rem'
    }
    return (

        <div>
            <Button startIcon={<SaveIcon />} style={buttonStyle} size="large" variant="outlined" color="primary">Primary</Button>
            <br/>
            <br/>
            <Button endIcon={<SaveIcon />} size="medium" variant="contained" color="secondary" style={{marginBottom: '2rem'}}>Secondary</Button>
            <br/>
            <ButtonGroup  style={{marginBottom: '2rem'}}>
                <Button startIcon={<SaveIcon />} size="medium" variant="contained" color="primary">Save</Button>
                <Button startIcon={<DeleteIcon />} size="medium" variant="contained" color="secondary">Discard</Button>
            </ButtonGroup>
            <br/>
            <FormControl component="fieldset">
                <FormLabel component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender1" >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default Cart;