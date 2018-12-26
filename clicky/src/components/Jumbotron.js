import React from "react";

function Jumbotron({ children }) {
 return (
<div
     style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
     className="jumbotron"
   >
   <h1 class="display-4">Rick and Morty Game!</h1>

 <p class="lead">Click on an image to earn points, but don't click on any more than once!</p>

   </div>
 );
}

export default Jumbotron;