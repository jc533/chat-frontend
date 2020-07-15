import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography, Tab, Tabs, Paper, AppBar, Button, Card, CardContent, Grid, TextField, FormControl} from "@material-ui/core";
import theme from "../JizzTheme.js";

const useStyles = makeStyles(({theme})=> ({
    inputBox: {
        "width": "100%"
    }
}));
const InputBox = () => {
    const [text, setText] = React.useState("");
    const classes = useStyles();
    const handleChange = (e) => {
        // console.log(e.target.value);
        setText(e.target.value)
    }
    const sendMsg = (e) => {
        e.preventDefault();
        console.log(text)
    }
    return (
        <FormControl noValidate autoComplete="off" className={classes.inputBox}>
            <Grid container direction="row" spacing={1}>
                <Grid item xs={2}>
                    <Button>One</Button>
                    <Button>Two</Button>
                </Grid>
                <Grid item xs={8}>
                    <TextField onChange={handleChange} onSubmit={sendMsg} id="outlined-basic" fullWidth variant="outlined" placeholder="Placeholder"/>
                </Grid>
                <Grid item xs={2}>
                    <Button onSubmit={sendMsg}>One</Button>
                </Grid>
            </Grid>
        </FormControl>
    )

}
export default InputBox;