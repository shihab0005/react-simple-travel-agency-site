import React, { createContext } from 'react';
import UseFirebase from '../Hooks/UseFirebase';

export const authContext = createContext()

const AuthProvider = ({ children }) => {
    const allContext = UseFirebase()
    return (
        <authContext.Provider value={allContext}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;