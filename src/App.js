import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';



function App() {
  return (
    <div className="App">
    <Router>
    <p>Navigation</p>
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
