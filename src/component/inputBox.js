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
    const classes = useStyles();
    return (
        <FormControl noValidate autoComplete="off" className={classes.inputBox}>
            <Button>One</Button>
            <Button>Two</Button>
            <TextField id="outlined-basic" variant="outlined" placeholder="Placeholder"/>
            <Button>One</Button>
        </FormControl>
    )

}
export default InputBox;