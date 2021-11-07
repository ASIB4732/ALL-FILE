import './App.css';
import Post from './Components/post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Error from './Components/error/Error';
import Dateil from './Components/dateil/Dateil';


function App() {
  return (
    <div>
       
       <Router>
         <Switch>
           <Route path="/home">
           <Post></Post>
           </Route>

           <Route exact path="/:id">
           <Dateil></Dateil>
           </Route>

           <Route exact path="/">
           <Post></Post>
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
