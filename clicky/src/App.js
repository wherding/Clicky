import React, { Component } from 'react';
import Header from './components/Header';
import Jumbotron from './components/Jumbotron';
import Cardlist from './components/Cardlist';
import Footer from './components/Footer';

let data = [
  {
      avatar_url:"https://images3.alphacoders.com/633/thumb-1920-633288.png"
  },
  {
      avatar_url:"https://images3.alphacoders.com/606/thumb-1920-606020.jpg"
  },
  {
      avatar_url:"https://images.alphacoders.com/876/thumb-1920-876589.jpg"
  },
  {
    avatar_url:"https://images2.alphacoders.com/642/thumb-1920-642540.png"
},
{
    avatar_url:"https://images7.alphacoders.com/633/thumb-1920-633262.png"
},
{
    avatar_url:"https://images8.alphacoders.com/642/642527.jpg"
},
{
  avatar_url:"https://images6.alphacoders.com/625/thumb-1920-625916.jpg"
},
{
  avatar_url:"https://images4.alphacoders.com/633/thumb-1920-633222.jpg"
},
{
  avatar_url:"https://images.alphacoders.com/633/thumb-1920-633244.jpg"
},
{
  avatar_url:"https://images6.alphacoders.com/656/thumb-1920-656827.jpg"
},
{
  avatar_url:"https://images.alphacoders.com/633/thumb-1920-633249.jpg"
},
{
  avatar_url:"https://images3.alphacoders.com/633/thumb-1920-633240.jpg"
}
]

class App extends Component {
  state = {counter:0,
  cor: "Click an image to get started!"};
  incrementCounter = () => {
   this.setState((prevState) => ({
     counter: prevState.counter + 1
   }));
   this.setState((prevState) =>({
     cor: prevState.cor = "correct"

   }));
 };

  render() {
    return (
      <body>
        <Header  counter={this.state.counter} cor={this.state.cor}/>
        <Jumbotron />
        <Cardlist cards={data} onClickFunction={this.incrementCounter}/>
        <Footer />
      </body>

    );
  }
}

export default App;