import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography, Tab, Tabs, Paper, AppBar, Button} from "@material-ui/core";
import theme from "../JizzTheme.js";

const useStyles = makeStyles(({theme})=> ({
    msgList:{
        "list-style-type": "none"
    }
}));


const ChatBox = ({children}) => {
    return (
        <Box>
            <Typography>{children}</Typography>
        </Box>
    );
}

const MsgBox = () => {
    const classes = useStyles();
    const data = {
        msgs: ["jizz","7122"]
    };
    const massages = data.msgs.map((text,index)=>{
        console.log(index)
        return <li key={index}><ChatBox>{text}</ChatBox></li>;
    })
    return (
        <Paper variant="outlined">
            <ul className={classes.msgList}>
                {massages}
            </ul>
        </Paper>
    ) 
};

export default MsgBox;

