import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { 
      classmates: [
        {name: "khalid"},
        {name: "anurag"},
        {name: "deepanshu"}
      ]
    }
  }
  
  render() { 
    return ( 
      <div className="App">
      {
        this.state.classmates.map((classmate) => < h1>{classmate.name}</h1>)
      }
      </div>
     );
  }
}
 
export default App;

