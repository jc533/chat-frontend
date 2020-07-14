import React from "react"
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';


import SideTab from "../component/sideTab.js";
import SideBox from "../component/sideBox.js";

const MainPage = () => (
    <Grid
        container
        direction="row"
        justify="center"
    >
        <Grid item container md={3} xs={3}>
            <SideTab />
        </Grid>
        <Grid item container sm={9} xs={9}>
            <SideBox />
        </Grid>
    </Grid>
);



export default MainPage;