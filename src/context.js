import React, { useState, createContext } from 'react';
import { Content } from './components/MovieInfoBar/MovieInfoBar.style';

export const Context = createContext();

const UserProvider = ({ children }) => {
    const [state, setState] = useState(undefined);

    return (
        <Context.Provider value={[state, setState]}>{children}</Context.Provider>
    )
}

export default Context;