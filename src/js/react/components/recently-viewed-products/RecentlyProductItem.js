import React from 'react'

const RecentlyProductItem = (props)=>{
    return(
        <div className="rec-prod">
            <a href={props.handle}>
                <img src={props.image}/>
                <p>{props.title}</p>
            </a>
        </div>
    )
}

export default RecentlyProductItem