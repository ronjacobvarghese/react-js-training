import { Route, Switch, Redirect } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div>
      <header>
        <MainHeader />
      </header>

      <main>
        <Route path = "/" exact>
          <Redirect to = "/welcome"/>
        </Route>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products" exact>
          <Products />
        </Route>
        <Route path="/products/:productId">
          <ProductDetail />
        </Route>
      </main>
      
      {/*can also be done like this */}

      {/* <main>
        <Switch>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
          <Route path="/products" >
            <Products />
          </Route>
        </Switch>
      </main> */}
    </div>
  );
}

export default App;
