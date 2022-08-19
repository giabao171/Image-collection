import { useEffect, useRef, useState, memo } from "react";
import Paragraph from "./paragraph";

function Content() {
    return ( 
        <div>
            <Paragraph/>
        </div>
    )
};

export default memo(Content);