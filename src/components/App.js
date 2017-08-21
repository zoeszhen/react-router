import React,{Component} from 'react';
import {
  BrowserRouter,
  Route,
  Switch
}from "react-router-dom"
import Home from "./Home";
import About from "./About";

import Header from "./Header";
import Courses from "./Courses";
import Teachers from "./Teachers";
import NotFound from "./NotFound";
import Featured from "./Featured";
import axios from "axios";

class App extends Component{
  constructor(){
    super();
    this.state = {
      testData:null
    }
  }

  componentDidMount=()=>{
    axios.get('http://mf-rest-apiapp.azurewebsites.net/api/document')
    .then((res) => {
      console.log("res",res);
      this.setState({
        testData: res.data
      })
    })
    .catch((error)=> {
      console.log("error",error);
    })
  }

  render(){
    return(
      <BrowserRouter>
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={()=><About title="About"/>}/>
          <Route exact path="/courses" component={Courses} />
          <Route exact path="/teachers" component={Teachers} />
          <Route path="/teachers/:topic/:name" component={Featured} />
          <Route  component={NotFound} />
        </Switch>
      </div>
    </ BrowserRouter>
    )
  }
};

export default App;