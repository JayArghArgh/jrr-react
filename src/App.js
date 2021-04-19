import './App.css';
import Header from "./Components/Header";
import About from "./Components/About";
import Elevator from "./Components/Elevator";
import Footer from "./Components/Footer";
import MySkew from "./Components/MySkew";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import myPortfolio from "./Components/myPortfolio.json";
import Portfolio from "./Components/Portfolio";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    myPortfolio
  };

  render () {
    // console.log(this.state.portfolio);
    return (
      <div className="App">
        <Header/>
        <MySkew/>

        <div className="main">

          <div className="article" id="main-article">
            <div className="container">
              <Router>
                <Switch>
                  <Route exact path="/" component={Elevator}/>
                  <Route exact path="/portfolio" render={props => <Portfolio portfolioItems={this.state.myPortfolio} {...props} />} />
                  <Route exact path="/about" component={About}/>
                  <Route component={Elevator}/>
                </Switch>
              </Router>
            </div>
          </div>

        </div>
        <Footer/>

      </div>
    );
  };
}

export default App;
