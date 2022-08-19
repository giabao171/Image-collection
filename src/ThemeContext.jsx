import {useState, createContext} from "react"

const themeContext = createContext()

function ThemeProvider ({children}) {

    const [theme, setTheme] = useState("dark")

    const tongleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }

    const valueTheme = {
        theme,
        tongleTheme
    }

    return (
        <themeContext.Provider value = {valueTheme}>
            {children}
        </themeContext.Provider>
    );
}

export {themeContext, ThemeProvider}