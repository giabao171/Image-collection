import Content from './tonggle';
import {ThemeProvider} from "./ThemeContext"
import {createContext, useContext} from "react"
import {themeContext} from './ThemeContext'

import ModelImg from "../src/imgText/ModelImg"

function App() {

  const themeValue = useContext(themeContext)

  return (
      <div style={{padding: '0 20px'}}>
        {/* <button onClick={themeValue.tongleTheme}>Tongle</button>
        <Content/> */}
        <ModelImg></ModelImg>

      </div>
     
  );
}

export default App;
