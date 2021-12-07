import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/Home';
import ShopPage from './pages/Shop';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
    </Switch>
  );
}

export default App;
