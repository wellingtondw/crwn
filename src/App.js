import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'

import './App.css';

import { auth, createUserProfileDocument } from './services/firebase/firebase.util'

import HomePage from './pages/Home';
import ShopPage from './pages/Shop';
import AuthPage from './pages/Auth';

import Header from './components/Header';
import { setCurrentUser } from './redux/user/actions';

function App({ setCurrentUser }) {

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
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/auth' component={AuthPage} />
      </Switch>
    </>
  );
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
