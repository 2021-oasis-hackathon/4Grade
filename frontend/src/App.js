import { Route, Router, Switch } from 'react-router-dom';
import './App.css';
import AppRouter from './AppRouter';
import fbase, { authService } from "./Auth/fbase";
import { useEffect, useState } from 'react';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [userObject, setUserObject] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserObject({
          displayName: user.displayName,
          uid: user.uid,
          updateProfile: (args) => user.updateProfile(args),
        });
      } else {
        setUserObject(null);
      }
      setInit(true);
    });
  }, []);

  const refreshUser = () => {
    const user = authService.currentUser;
    setUserObject({
      displayName: user.displayName,
      uid: user.uid,
      updateProfile: (args) => user.updateProfile(args),
    });
  }
  return (
    <>
      {init?<AppRouter refreshUser = {refreshUser} isLoggedIn = {isLoggedIn} userObject={userObject}/> :"Initializing..." }
    </>
      
  )
}

// function App() {
//   return (
//       <Switch>
//         <Route exact path="/">
//           <Main />
//         </Route>
//         <Route path="/signup">
//           <SignUp />
//         </Route>
//         <Route path="/signin">
//           <SignIn />
//         </Route>
//         <Route path="/metabus">
//           <MetaBus />
//         </Route>
//       </Switch>
//   );
// }

export default App;
