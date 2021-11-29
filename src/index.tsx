import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {theme} from "./theme";
import {ThemeProvider} from "styled-components";
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient()


ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

