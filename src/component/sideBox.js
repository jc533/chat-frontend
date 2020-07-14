import React from "react";
import {AppBar, IconButton, Toolbar, Typography, Button, Paper} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles} from "@material-ui/core/styles"
import theme from "../JizzTheme.js";

import MsgBox from "./msgBox.js";


const useStyles = makeStyles((theme) => ({
    sideBox: {
        width: "100%"
    }
})
);

const SideBox = () => {
    const classes = useStyles();
    return (
        <Paper variant="outlined" className={classes.sideBox}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            {/* <Typography variant="h1">msg box</Typography> */}
            <MsgBox/>
        </Paper>
    )
};

export default SideBox;