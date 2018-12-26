import React, { Component } from 'react';
import Card from './Card';



const Cardlist = (props) => {
    return(
<div className="container">
<div className= "row">
            {props.cards.map(card => <Card {...card} onClick={props.onClickFunction} />)}
            
        </div>
</div>
        
      
      
    )
}



export default Cardlist;