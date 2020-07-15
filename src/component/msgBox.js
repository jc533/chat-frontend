import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography, Tab, Tabs, Paper, AppBar, Button, Card, CardContent, Grid} from "@material-ui/core";
import theme from "../JizzTheme.js";

import InputBox from "./inputBox.js";
const useStyles = makeStyles(({theme})=> ({
    msgList:{
        "list-style-type": "none"
    }
}));


const ChatBox = ({children}) => {
    return (
        <Card>
            <CardContent>
                <Typography color="primary">{children}</Typography>
            </CardContent>
        </Card>
    );
}

const MsgBox = () => {
    const classes = useStyles();
    const data = {
        msgs: ["jizz","7122"]
    };
    const massages = data.msgs.map((text,index)=>{
        console.log(index)
        return (
            <Grid item>
                <li key={index}><ChatBox>{text}</ChatBox></li>
            </Grid>
        );
    })
    return (
        <Paper variant="outlined">
            <Grid>
            <ul className={classes.msgList}>
            <Grid
                container
                direction="column"
                justify="space-around"
                spacing={1}
            >
                {massages}
            </Grid>
            </ul>
            <Grid item alignContent="flex-end">
                <InputBox />
            </Grid>
            </Grid>
        </Paper>
    ) 
};

export default MsgBox;

