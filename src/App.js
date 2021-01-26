
import React, {Component} from "react";
import './App.css';
import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.29.73:5000/api"
})

class App extends Component {

  state = {
    data: []
  }

  getData = async () => {
    const res = await api.get("/getitems")
    console.log(res)
    this.setState({res})
  }

  render(){
    return (
      <div className="App">
        <button onClick={this.getData}>load</button>
        <p>{this.state.data}</p>
      </div>
    );
  }
}

export default App;
