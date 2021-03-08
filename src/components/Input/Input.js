import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React from 'react';


const useStyle = makeStyles({
    root: {
        backgroundColor: 'salmon',
        border: '0px',
        borderRadius: '15px',
        color: 'black',
        padding: '0px 30px'
    }
})

function ButtonStyle() {
    const classes = useStyle();
    return <Button className={classes.root}>Text Styled Button</Button>
}

const Input = () => {
    return (
        <div>
            <ButtonStyle />
            <br/>
            <TextField 
               variant="outlined" type="time" label="The time" color="secondary" placeholder="text@text.com"
            />
            <br/>
            <TextField 
               variant="filled" type="email" label="The time" color="secondary" placeholder="text@text.com"
            />
            <br/>
            <TextField
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
            />
        </div>
    );
};

export default Input;