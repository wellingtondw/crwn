import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/Home';
import ShopPage from './pages/Shop';
import AuthPage from './pages/Auth';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/auth' component={AuthPage} />
      </Switch>
    </>
  );
}

export default App;
