import React from 'react';
import "./detail-img.scss"
import {GrClose} from "react-icons/gr"
import {imgColection} from "../imgText/ModelImg"
import { useState } from 'react';


const Detail = ({imgLink, desc}) => {
    
    const [link, setLink] = useState("")

    return (
        <div className='detail-status'>
            <div className='detai-wrapper'>
                <div className='detail-box'>
                    <div className='detail-header'>
                        <div className='close-btn-detail'
                               
                        >
                            <GrClose/>
                        </div>
                    </div>
                    <div className='detail-content'>
                        <div className='img-context'>
                            <div className='img-show-box'>
                                <img src = {imgLink}/>
                            </div>
                            <div className='description'>
                                <h3>{desc}</h3>
                                <div className='raltive-img-list'>
                                    {imgColection.slice(0,6).map((val, index) => (
                                        <div 
                                            className='relative-img'
                                            onClick={(e) => {
                                                setLink(val.imgLink)
                                            }}
                                        >
                                            <img src={val.imgLink}/>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='detail-footer'>
                        <div className='notification'>
                            <p>{imgLink}</p>
                        </div>
                        <div className='more-option'>
                            <div>
                                <g/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Detail;