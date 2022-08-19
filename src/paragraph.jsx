import React from 'react';
import "./App.css"
import {themeContext} from "./ThemeContext"
import { useContext } from 'react';


const Paragraph = () => {

    const theme = useContext(themeContext)

    return (
        <div className={theme.theme}>
            <p>Your words matter, and our paraphrasing tool is designed to ensure you use the right ones. With 2 free modes and 5 premium modes to choose from, QuillBot’s paraphraser can rephrase any text in a variety of different ways, guaranteeing you find the perfect language, tone, and style for any occasion. Just enter your text into the input box, and our AI will work with you to build the best paraphrase from the original piece of writing.</p>
        </div>
    );
};

export default Paragraph;