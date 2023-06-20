import './style.css';
import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";

const ThemeContext = React.createContext()

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeContext.Provider value="light">
        <App />
    </ThemeContext.Provider> 
)