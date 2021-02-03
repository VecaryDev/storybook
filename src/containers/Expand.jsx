import React, { useState } from "react"

import ExpandHandle from "../img/Symbols/Sprites/ExpandOpened.svg"

function Expand(props) {
    const {
        label
    } = props
    const [open, setOpen] = useState(false)

    function clickHandler() {
        setOpen(!open)
    }


    return (
        <div className="w_prop ">
            <div className="mx-2 overflow-visible text-almostBlack font-title">
            <div onClick={clickHandler} className=" w-full  h_40 flex items-end mb-2">
                <img src={ExpandHandle} alt="expand" style={{
                    marginLeft: "-6px",
                    transform: !open && "rotate(-90deg)"
                    
                    }} />
                <p className="font-semibold ">{label}</p>
            </div>
            {open && props.children}

            </div>
           
        </div>
    )
}


export default Expand