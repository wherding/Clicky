import React, { Component } from 'react';


// const Card = (props) => {
//     return(  
//         <div style={{margin: "1em"}}  onClick = {props.onClick}  >
//         <img width="300" src={props.avatar_url}>
//         </img>
//         </div>
//     )
// }

class Card extends React.Component {
    state = {clicks:0};
    twoClicks = () =>{
        this.setState = ((prevState) =>({
            clicks: prevState.clicks +1
          
        }));

        if(this.state.clicks>1){
            console.log("yay!");
        }
    }

   render(props) {
    return(  
                <div style={{margin: "1em"}}  onClick = {() =>this.props.onClick(this.props.id)}   >
                <img width="300" src={this.props.avatar_url}>
                </img>
                </div>
            );
   }

 }


export default Card;