//setup data layer
// we need this to track the basket

import { createContext, useReducer, useContext } from "react";

// this is data layer
export const StateContext = createContext();

// build a provider wrap our app in the data layer
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//this is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);