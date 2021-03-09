import { Button, ButtonGroup, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio} from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import React from 'react';
import "./Cart.css";
import { blue, green } from '@material-ui/core/colors';

const Cart = () => {
    const buttonStyle = {
        fontSize: '14px', 
        marginTop: '1rem'
    }

    const theme = createMuiTheme({
        palette: {
            primary: {
                main: green[500],
            },
            secondary: {
                main: blue[500],
            },
        }
    })
    return (

        <div>
            <Button startIcon={<SaveIcon />} style={buttonStyle} size="large" variant="outlined" color="primary">Primary</Button>
            <br/>
            <br/>
            <Button endIcon={<SaveIcon />} size="medium" variant="contained" color="error" style={{marginBottom: '2rem'}}>Secondary</Button>
            <br/>
            <ThemeProvider theme={theme}>
                <ButtonGroup  style={{marginBottom: '2rem'}}>
                    <Button startIcon={<SaveIcon />} size="medium" variant="contained" color="primary">Save</Button>
                    <Button startIcon={<DeleteIcon />} size="medium" variant="contained" color="secondary">Discard</Button>
                </ButtonGroup>
            </ThemeProvider>
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