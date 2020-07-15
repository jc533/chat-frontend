import React from "react"
import {Grid, Container} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


import SideTab from "../component/sideTab.js";
import SideBox from "../component/sideBox.js";

const MainPage = () => (
    <Grid
        container
        direction="row"
        justify="center"
        alignItems="stretch"
    >
        <Grid item container alignItems="stretch" xs={3}>
            <SideTab />
        </Grid>
        <Grid item container alignItems="stretch" xs={9}>
            <SideBox />
        </Grid>
    </Grid>
);



export default MainPage;