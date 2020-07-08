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
        alignItems="stretch"
    >
        <Grid item container xs={4}>
            <SideTab />
        </Grid>
        <Grid item container xs={8}>
            <SideBox />
        </Grid>
    </Grid>
);



export default MainPage;