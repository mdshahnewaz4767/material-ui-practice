import { Button, ButtonGroup, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Typography, Grid, Paper} from '@material-ui/core';
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
        typography: {
            h2: {
                fontSize: 40,
            }
        },
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
            <ThemeProvider theme={theme}>
                <Typography variant="h2">
                    Welcome to MUI
                </Typography>
                <Typography variant="h4" component="div">
                    Learn how to use material ui
                </Typography>
                <Typography variant="subtitle1">
                    Learn how to use material ui
                </Typography>
            </ThemeProvider>
            <Button startIcon={<SaveIcon />} style={buttonStyle} size="large" variant="outlined" color="primary">Primary</Button>
            <br/>
            <br/>
            <Button endIcon={<SaveIcon />} size="medium" variant="contained" color="default" style={{marginBottom: '2rem'}}>Secondary</Button>
            <br/>
            <Grid  container spacing={2} justify="center">
                <Grid item lg={12}>
                    <Paper style={{height: 75, width: '100%'}} />
                </Grid>
                <Grid item lg={3}>
                    <Paper style={{height: 75, width: '100%'}} />
                </Grid>
                <Grid item lg={3}>
                    <Paper style={{height: 75, width: '100%'}} />
                </Grid>
                
            </Grid>
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