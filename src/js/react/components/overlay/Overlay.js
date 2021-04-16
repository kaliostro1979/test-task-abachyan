import React from 'react'

const Overlay = (props)=>{
    return(
        <div className="overlay" style={{display: props.open ? 'block' : 'none'}} onClick={props.closeSideCart}> </div>
    )
}

export default Overlay