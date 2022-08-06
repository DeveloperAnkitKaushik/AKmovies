import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "./app/store";
import ToggleColorModeProvider from './utils/ToggleColorMode';

const theme = createTheme({});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <ToggleColorModeProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ToggleColorModeProvider>
        </Provider>
    </React.StrictMode>
);