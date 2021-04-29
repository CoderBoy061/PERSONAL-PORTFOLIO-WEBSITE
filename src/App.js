
import './App.css';
import Header from './Header';
import { Route } from "react-router-dom";
import MyResume from './MyResume';
import ContactMe from './ContactMe';
import Home from './Home';

function App() {
  return (
    <div className="App">
     <Header />
     <Route exact path ="/">
        <Home />
      </Route>
      <Route exact path ="/resume">
        <MyResume  />
      </Route>
      <Route exact path ="/contact">
        <ContactMe  />
      </Route>
    </div>
  );
}

export default App;
