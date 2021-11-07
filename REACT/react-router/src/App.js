import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './container/headre/Header';
import User from './container/user/User';
import Error from './container/error/Error';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import IdDetales from './container/idDetales/IdDetales';

function App() {
  return (
    <div>
      <Header></Header>
      
      <Router>
        <Switch>
          <Route path="/home">
          <User></User>
          </Route>
          <Route path="/:id">
           <IdDetales></IdDetales>
          </Route>
          <Route exact path="/">
          <User/>
          </Route>
          <Route path="*">
          <Error></Error>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
