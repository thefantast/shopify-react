import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from './components/NavBar';
import Cart from './components/Cart';

import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';



function App() {
  return (
    <div className="App">
    <Router>
      <NavBar />
      <Cart />
      <Switch>
        <Route path="/products/:handle">
          <ProductPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <p>Footer</p>
    </Router>

    </div>
  );
}

export default App;
