
import React , {Component, Fragment} from "react";

class Login extends Component {

  constructor(){
    super();
    this.state = {
      userName : "",
      userID: "",
      email: "",
      Password: ""
    }
    this.handelInputChange=this.handelInputChange.bind(this)
    this.handelSubmit=this.handelSubmit.bind(this)
  }

  handelChange(event){
    event.preventDefault();
  }

  handelInputChange(event){
    event.preventDefault();
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handelSubmit(event){
    console.log(event)
    console.log(this.state)
  }

  render(){
    return(
      <Fragment>
        <form onSubmit={this.handelChange}>
          <input type="text" placeholder="userName" name="userName" onChange={this.handelInputChange} /><br/>
          <input type="text" placeholder="userID" name="userID" onChange={this.handelInputChange} /><br/>
          <input type="text" placeholder="email" name="email" onChange={this.handelInputChange} /><br/>
          <input type="password" placeholder="Password" name="Password" onChange={this.handelInputChange} /><br/>
          <button type="submit" onClick={this.handelSubmit}> SUBMIT </button>
        </form>
      </Fragment>
    );
  }
}

export default Login;
