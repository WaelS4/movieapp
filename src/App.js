import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
/* import Login from './components/Login/Login';
import Products from './components/Products/Products';*/
import { MovieDetails } from "./components/MovieDetails.js";
import { Films } from "./data";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} Films={Films} />
          {/*           <Route path="/login" exact component={Login} />
          <Route
            path="/products"
            exact
            render={() => <Products products={products} />}
          />*/}
          <Route
            path="/MovieDetails/:id"
            render={(props) => <MovieDetails {...props} Films={Films} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
