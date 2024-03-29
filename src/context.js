import React, { createContext, useReducer } from "react";
import ReactDOM from 'react-dom'

export const ThemeContext = createContext();

const INITIAL_STATE = { modoOscuro: false };

const themeReducer = (state, action) => {
    switch (action.type) {
        case "CAMBIAR":
            return { modoOscuro: !state.modoOscuro };
        default:
            return state;
    }
};

export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
    return(
        <ThemeContext.Provider value={{state, dispatch}}>{props.children}</ThemeContext.Provider>
    );
};