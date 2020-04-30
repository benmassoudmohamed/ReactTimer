import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      pause:false,
      }
  }
  // setInterval(()=>this.setState(millis:this.state.millis+1),1000)
  // setInterval(()=>this.setState(seconde:this.state.seconds+1),1000)
  // setInterval(()=>this.setState(minutes:this.state.minutes+1),1000)
  start=()=>{
    this.myvar=setInterval(()=>this.setState({seconds:this.state.seconds+1})
    ,1000)
    this.setState ({
      pause:!this.state.pause,
    })
  }
  reset=()=>{
    clearInterval(this.myvar)
    this.setState ({
      seconds: 0,
      pause:false,
    })
  }
  Pause=()=>{
    clearInterval(this.myvar)
    this.setState ({
      pause:!this.state.pause,
    })
  }
   render(){
      return (  <div>
      <span>{(Math.floor(this.state.seconds/3600)<10)?'0'+Math.floor(this.state.seconds/3600):Math.floor(this.state.seconds/3600)}</span>
      <span>:</span>
      <span>{((Math.floor((this.state.seconds%3600)/60)<10)?'0'+(Math.floor((this.state.seconds%3600)/60)):Math.floor((this.state.seconds%3600)/60))}</span>
      <span>:</span>
      <span>{(((this.state.seconds%3600)%60)<10)?'0'+((this.state.seconds%3600)%60):(this.state.seconds%3600)%60}</span>
     {console.log(this.state.pause)}
      <button id="start" onClick={(this.state.pause)?this.Pause:this.start}>Start</button>
      <button id="reset" onClick={this.reset} >Reset</button>
    </div>)
    
  }
}
 
export default App;
