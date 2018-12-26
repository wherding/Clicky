import React, { Component } from 'react';


const Card = (props) => {
    return(  
        <div style={{margin: "1em"}}  onClick = {props.onClick}  >
        <img width="300" src={props.avatar_url}>
        </img>
        </div>
    )
}



export default Card;