import React, { useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Box } from '@material-ui/core';

import Header from './components/Header';
import Landing from './components/Landing';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import Signin from './components/Signin';
import Signup from './components/Signup';
import TodoList from './components/TodoList';

const useStyles = makeStyles((theme) => ({
  app: {
    minHeight: '100vh',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const App = () => {
  const [user, setUser] = useState(null);
  const isSignedIn = !!user;
  const defaultUser = {
    name: 'User Name',
    email: 'user@email.com',
  }

  const onSignOut = () => {
    setUser(null);
  }

  const onSignIn = () => {
    setUser(defaultUser);
  }

  const classes = useStyles();
  return (
    <Router>
      <CssBaseline />
      <Box display="flex" flexDirection="column" className={classes.app} >
        <Header isSignedIn={isSignedIn} onSignOut={onSignOut} user={user}/>
        <Box component="main" flexGrow={1} flexShrink={0} flexBasis="auto">
          <Switch>
            <Route path="/auth/signin">
              {isSignedIn && <Redirect to="/" />}
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path="/auth/signup">
              {isSignedIn && <Redirect to="/" />}
              <Signup onSignIn={onSignIn} />
            </Route>
            <Route path="/pricing">
              <Pricing />
            </Route>
            <Route path="/app">
              {!isSignedIn && <Redirect to="/" />}
              <TodoList />
            </Route>
            <Route path="/">
              <Landing isSignedIn={isSignedIn} />
            </Route>
          </Switch>
        </Box>
        <Box component="footer" flexShrink={0}>
          <Footer />
        </Box>
      </Box>
    </Router>
  );
}

export default App;
