
import React , {Component, Fragment} from "react";

class Main extends Component {

  state = {
    data : []
  }

  constructor(){
    super();
  }

  render(){
    return(
      <Fragment>
        <p>
          This is Main page
        </p>
      </Fragment>
    );
  }
}


export default Main;
