import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import About from "./Components/About";
import Elevator from "./Components/Elevator";
import Footer from "./Components/Footer";
import MySkew from "./Components/MySkew";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <MySkew />

      <div className="main">
        <Router>
          <Switch>
            <Route exact path="/" component={Elevator} />
            <Route exact path="/portfolio" component={Footer} />
            <Route exact path="/about" component={About} />
            <Route component={Elevator} />
          </Switch>
          <div className="article" id="main-article">
          </div>
          <div className="container">
          </div>
        </Router>

        {/*<section id="portfolio">*/}
        {/*  <div id="skew-lower" className="skew-c"></div>*/}
        {/*  <div className="wave-black-top portfolio"></div>*/}
        {/*</section>*/}

      </div>
      <Footer />
    </div>
  );
}

export default App;
