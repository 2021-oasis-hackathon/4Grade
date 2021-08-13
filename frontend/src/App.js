import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import { Main, SignIn, SignUp, MetaBus } from './pages';
import fbase from "./Auth/fbase";


function App() {
  return (
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/metabus">
          <MetaBus />
        </Route>
      </Switch>
  );
}

export default App;
