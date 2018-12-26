import React, { Component } from 'react';


class Header extends React.Component {


   render(props) {
     return (
<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" >
               <p className="navbar-brand" >
                   Clicky Game
       </p>
               <p className="navbar-brand">{this.props.cor}</p>
               <p className="navbar-brand">{this.props.counter}</p>
           </nav>
     );
   }

 }



export default Header;