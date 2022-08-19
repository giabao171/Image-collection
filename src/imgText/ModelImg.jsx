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

import './imgText.scss'


const ModelImg = () => {
    return (
        <div className='model-img-colection'>
            <div className='img-colection-content'>
                <div className='img-colection-wrapper'>
                    <div className='list-img'>
                        <div className='img-item'>
                            <img src={img1}/>
                        </div>
                        <div className='img-item'>
                            <img src={img2}/>
                        </div>
                        <div className='img-item'>
                            <img src={img3}/>
                        </div>
                         <div className='img-item'>
                            <img src={img4}/>
                        </div>
                        <div className='img-item'>
                            <img src={img5}/>
                        </div>
                        <div className='img-item'>
                            <img src={img6}/>
                        </div>
                       <div className='img-item'>
                            <img src={img7}/>
                        </div>
                        <div className='img-item'>
                            <img src={img8}/>
                        </div>
                        <div className='img-item'>
                            <img src={img9}/>
                        </div>
                        <div className='img-item'>
                            <img src={img10}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModelImg;