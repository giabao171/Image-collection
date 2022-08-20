import React from 'react';

import img1 from "../img/1.jpg"
import img2 from "../img/2.jpg"
import img3 from "../img/3.jpg"
import img4 from "../img/4.jpg"
import img5 from "../img/5.jpg"
import img6 from "../img/6.jpg"
import img7 from "../img/7.jpg"
import img8 from "../img/8.jpg"
import img9 from "../img/9.jpg"
import img10 from "../img/10.jpg"

import Detail from '../imgDetail/Detail';

import './imgText.scss'
import {createContext ,useState, useContext } from 'react';
import { themeContext } from '../ThemeContext';


export const imgColection = [
    {
        "id": 1,
        "imgLink": img1,
        "description": "Van truot"
    },
    {
        "id": 2,
        "imgLink": img2,
        "description": "Monalisa"
    },
    {
        "id": 3,
        "imgLink": img3,
        "description": "Meo dap chan"
    },
    {
        "id": 4,
        "imgLink": img4,
        "description": "May nghe nhac mp3"
    },
    {
        "id": 5,
        "imgLink": img5,
        "description": "Converse"
    },
    {
        "id": 6,
        "imgLink": img6,
        "description": "Hai con ma"
    },
    {
        "id": 7,
        "imgLink": img7,
        "description": "Meo deo kinh"
    },
    {
        "id": 8,
        "imgLink": img8,
        "description": "Co gai"
    },
    {
        "id": 9,
        "imgLink": img9,
        "description": "Saitama"
    },
    {
        "id": 10,
        "imgLink": img10,
        "description": "Star-Buck"
    },

]
// console.log(imgColection)



const ModelImg = () => {

    const [imgLink, setImgLink] = useState("")
    const [desc, setDesc] = useState("")
    const [showDetailImg, SetshowDetailImg] = useState(false)
    const [theme, setTheme] = useState(false)

    const themeValue = useContext(themeContext)

    return (
        <div className={`model-img-colection ${themeValue.theme}`}>
            <button 
                style={{float: "right"}}
                onClick={ themeValue.tongleTheme}
            >Theme</button>
            <div className='img-colection-content'>
                <div className='img-colection-wrapper'>
                    <div className='list-img'>
                        {imgColection.map((val, index) => (
                            <div className='img-item'
                                key={index}
                                onClick = {(e) => {
                                    setImgLink(val.imgLink);
                                    setDesc(val.description);
                                    SetshowDetailImg(true)
                                }}
                            >
                                <img src={val.imgLink}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='img-status'>
                    {showDetailImg && 
                        <Detail 
                            imgLink={imgLink}
                            desc = {desc}
                        />                   
                    }  
                </div>
            </div>
        </div>
    );
};

export default ModelImg;
