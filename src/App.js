import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import About from "./Components/About";
import Elevator from "./Components/Elevator";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <header className="bg-black">
        <Header />
      </header>

      <div className="skew-c-white"></div>
      <div className="colour-block-white"></div>

      <div className="main">
        <div className="container">
          <div className="article" id="main-article">
            <Elevator />
            {/*The main items load here*/}
            <About />
          </div>
        </div>


        <section id="portfolio">
          <div id="skew-lower" className="skew-c"></div>
          <div className="wave-black-top portfolio"></div>
        </section>

      </div>
      <Footer />
    </div>
  );
}

export default App;
