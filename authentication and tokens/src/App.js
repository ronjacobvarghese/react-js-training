import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UserProfile from "./components/Profile/UserProfile";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import AuthContext from "./store/auth-context";

function App() {
  const authCtx = useContext(AuthContext);

  const userIsLoggedIn = authCtx.isLoggedIn;
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!userIsLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        {userIsLoggedIn && (
          <Route path="/profile">
            <UserProfile />
          </Route>
        )}
        <Route path = '*'>
          <Redirect to = '/'/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
