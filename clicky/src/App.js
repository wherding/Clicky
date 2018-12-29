import React, { Component } from 'react';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Cardlist from './components/Cardlist';
import Footer from './components/Footer';

let data = [
  {
    id:1,
      avatar_url:"https://images3.alphacoders.com/633/thumb-1920-633288.png"
  },
  {id:2,
      avatar_url:"https://images3.alphacoders.com/606/thumb-1920-606020.jpg"
  },
  {id:3,
      avatar_url:"https://images.alphacoders.com/876/thumb-1920-876589.jpg"
  },
  {id:4,
    avatar_url:"https://images2.alphacoders.com/642/thumb-1920-642540.png"
},
{ id:5,
    avatar_url:"https://images7.alphacoders.com/633/thumb-1920-633262.png"
},
{ id:6,
    avatar_url:"https://images8.alphacoders.com/642/642527.jpg"
},
{ id:7,
  avatar_url:"https://images6.alphacoders.com/625/thumb-1920-625916.jpg"
},
{ id:8,
  avatar_url:"https://images4.alphacoders.com/633/thumb-1920-633222.jpg"
},
{ id:9,
  avatar_url:"https://images.alphacoders.com/633/thumb-1920-633244.jpg"
},
{id:10,
  avatar_url:"https://images6.alphacoders.com/656/thumb-1920-656827.jpg"
},
{id:11,
  avatar_url:"https://images.alphacoders.com/633/thumb-1920-633249.jpg"
},
{id:12,
  avatar_url:"https://images3.alphacoders.com/633/thumb-1920-633240.jpg"
}
];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

class App extends Component {
  state = {counter:0,
  cor: "Click an image to get started!",
  clicks: []};
  incrementCounter = (clickedCard) => {
   this.setState((prevState) => ({
     counter: prevState.counter + 1
   }));
   this.setState((prevState) =>({
     cor: prevState.cor = "correct"

   }));
//add new content

if(!this.state.clicks.includes(clickedCard)){
  this.setState(prevState => ({
    clicks: prevState.clicks.concat(clickedCard)
    
  }));
}
else{
  alert("you lose!")
}
//end new content 
   if (this.state.counter >= 12){
    this.setState((prevState) => ({
    counter: prevState.counter = 0
    }));

          }
   shuffle(data);
 };

 selectedCard = (clickedCard) =>{
  console.log("test") 
  if(!this.state.clicks.includes(clickedCard)){
    this.setState(prevState => ({
      clicks: prevState.clicks.concat(clickedCard)
      
    }));
    //add stiff that happens when you dont lose:
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
    this.setState((prevState) =>({
      cor: prevState.cor = "correct"
 
    }));

    ///end winning block
  }
  else{
    alert("you lose!")
  }
  shuffle(data);
 };

  render() {
    return (
      <body>
        <Header  counter={this.state.counter} cor={this.state.cor}/>
        <Jumbotron />
        <Cardlist cards={data} onClickFunction={this.incrementCounter} selectedCard={this.selectedCard}/>

        <Footer />
      </body>

    );
  }
}

export default App;