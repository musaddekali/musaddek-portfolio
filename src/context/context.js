import React, { useContext, useReducer } from 'react';
import reducer, {initialState} from '../reducer/reducer';

const AppContext = React.createContext();
AppContext.displayName = 'AppGlobalContext';

export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleSidebar = () => {
        dispatch({type: 'SIDEBAR_TOGGLE'});
    }

    return (
        <AppContext.Provider value={{
            ...state,
            handleSidebar
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}