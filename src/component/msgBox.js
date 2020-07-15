import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, Tab, Tabs, Paper, AppBar, Button, Card, CardContent, Grid } from "@material-ui/core";
import theme from "../JizzTheme.js";
import msgStore from "../messageStore.js";

import InputBox from "./inputBox.js";
// const useStyles = makeStyles(({ theme }) => ({
//     msgList: {
//         "list-style-type": "none"
//     }
// }));


const ChatBox = ({ children }) => {
    return (
        <Card>
            <CardContent>
                <Typography color="primary">{children}</Typography>
            </CardContent>
        </Card>
    );
}

class MsgBox extends React.Component {
    // const classes = useStyles();
    constructor(props){
    super(props)
    this.classes  = {
        msgList: {
            "list-style-type": "none"
        }
    }
    this.state = {data:[]}
    this.getMsg = this.getMsg.bind(this)
    }
    getMsg = () =>{
        let tmp = msgStore.getAll();
        console.log("jizz");
        this.setState({data:tmp})
        console.log(tmp);
    }
    componentDidMount = () => {
        msgStore.on("change",this.getMsg);
    }
    componentWillUnmount = () => {
        msgStore.removeListener("change", this.getMsg)
    }
    render(){
        const massages = this.state.data.map((text, index) => {
            console.log(text)
            return (
                <Grid item>
                    <li key={index}><ChatBox>{text}</ChatBox></li>
                </Grid>
            );
        })
    return (
        <Paper variant="outlined">
            <Grid>
                <ul style={this.classes.msgList}>
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
    }
};

export default MsgBox;

