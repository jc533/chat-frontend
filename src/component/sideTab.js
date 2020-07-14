import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {Box, Typography, Tab, Tabs, Paper, AppBar, Button} from "@material-ui/core";
import theme from "../JizzTheme.js";

// const useStyles = makeStyles((theme) => ({
//     sideBox: {
//         width: "100%"
//     }
// })
// );


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
            {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    width: "100%"
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
        <Paper variant="outlined">
            <AppBar position="static">
                <Typography variant="h6">
                    聊天室
                </Typography>
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="新增朋友" {...a11yProps(0)} />
                    <Tab label="建立群組" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Button>One</Button>
                <Button>Two</Button>
            </TabPanel>
            <TabPanel value={value} index={1}>
            </TabPanel>
        </Paper>
    </div>
  );
}