import React, { createContext, useState } from 'react';

// Create a context
export const MenuContext = createContext();

// Create a provider component
export const MenuProvider = ({ children }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <MenuContext.Provider value={{ isMenuOpen, setMenuOpen }}>
            {children}
        </MenuContext.Provider>
    );
};
