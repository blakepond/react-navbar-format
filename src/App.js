import logo from "./logo.svg";
import "./App.css";

import Nav from "./components/Nav/Nav";

function App() {
   return (
      <div className="App">
         <header className="App-header">
            <img
               src={logo}
               className="App-logo"
               alt="logo"
            />
         </header>
         <Nav />
         <p className="">hows the text? </p>
      </div>
   );
}

export default App;
