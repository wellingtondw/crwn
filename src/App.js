import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import { auth, createUserProfileDocument } from './services/firebase/firebase.util'

import HomePage from './pages/Home';
import ShopPage from './pages/Shop';
import AuthPage from './pages/Auth';

import Header from './components/Header';

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }

      setCurrentUser(userAuth)
    })

    return () => {
      unsubscribeFromAuth()
    }
  }, [])

  return (
    <>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/auth' component={AuthPage} />
      </Switch>
    </>
  );
}

export default App;
