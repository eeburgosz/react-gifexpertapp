import React from 'react';
import "animate.css";


export const GifGridItem = ({url, title}) => {

    //console.log(props)

    return (
        <div className="card animate__animated animate__flipInX">
           <img src={url} alt={title} />
           <p>{title}</p>
        </div>
    )
}
