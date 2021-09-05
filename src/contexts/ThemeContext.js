import React, {useContext, createContext, useState} from 'react'
export const ThemeContext = createContext();


const ThemeContextProvider = (props) => {
    const themes = [
        {
            accent: "#DB00FF",
            textColor: "#2665FF",
            background: "#250e8f",
            value: 0,
            id: "design"
        },

        {
            accent: "#96ffca",
            background: "#1544C0",
            value: 1,
            id: "about"
        },

        {
            accent: "#fff55a",
            background: "#FA603E",
            value: 2,
            id: "dev"
        },
    ]

    const [theme, setTheme] = useState(themes[1]);

    const setThemeFunc = (val)=>{
        setTheme(themes[val])
    }

    return (
        <ThemeContext.Provider value={{theme, setTheme: setThemeFunc}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider
