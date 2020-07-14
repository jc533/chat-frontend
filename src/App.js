import React from 'react';
// import Layout from './component/Layout.js'
import SignIn from "./signin.js";
import MainPage from "./pages/index.js";
import {ThemeProvider} from "@material-ui/core"
import theme from "./JizzTheme.js";
import './App.css';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <MainPage />
        </ThemeProvider>
    );
}

export default App;
