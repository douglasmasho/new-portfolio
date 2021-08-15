import React, {useContext, createContext, useState} from 'react'
export const ThemeContext = createContext();


const ThemeContextProvider = (props) => {
    const themes = [
        {
            accent: "#FFD341",
            background: "#353535",
            value: 0,
            id: "design"
        },

        {
            accent: "#709AFF",
            background: "#e7e7e7",
            value: 1,
            id: "about"
        },

        {
            accent: "#FF4E55",
            background: "#060606",
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
