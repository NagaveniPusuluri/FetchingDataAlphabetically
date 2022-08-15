//import connect from 'react';
//function connect(State,Dispatch);
//const State=(state)=>({name:state.name});
import react, { Component } from 'react';
class App extends Component{
constructor(){
  super();
  this.state={" "};
}
update(){
  this.setState({this.name.value});
}
  render(){
  return(
    <div>
        <input type="text" ref={()=>this.name="veni"}
      onChange={this.update.bind(this)}
      />
      </div>
  )
}
}
export default App;