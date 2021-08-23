import './App.css';
import Listing from './container/Listing/Listing';
import Header from './component/Header/Header';
import { Route, Switch } from 'react-router-dom';
import Home from './component/Home/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/listing" component={Listing} />
        <Route path="/" exact component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
