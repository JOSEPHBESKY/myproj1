import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";
import Layout from "./components/Layout/Layout";
import { GlobalStyles } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import Nav from "./components/Layout/Header/Nav/Nav";

const App = () => {
    const { theme } = useSelector((state) => state.ui);
    const currentTheme =  lightTheme 
    return (
        <ThemeProvider theme={currentTheme}>
            <GlobalStyles />
            <Helmet>
                <title>React Recursive Nav</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
                    rel="stylesheet"
                />
            </Helmet>
            <>
                <Nav/>
            </>
        </ThemeProvider>
    );
};

export default App;
