import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { auth } from './services/firebase';
import Home from './pages/Home';
import SingUp from './pages/SingUp';
import Login from './pages/Login';
import { Component } from 'react';
import { signin } from './helpers/auth';

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  )
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === false
        ? <Component {...props} />
        : <Redirect to='/chat' />}
    />
  )
}

class App extends Component{
  constructor() {
    super();
    this.state = {
      authenticated: false,
      loading: true,
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authenticated: true,
          loading: false,
        });
      } else {
        this.setState({
          authenticated: false,
          loading: false,
        });
      }
    })
  }
render(){
  return this.state.loading === true ? <h2>Loading...</h2> : (
    <Router>
      <Switch>
        <PublicRoute exact path="/" component={Home}></PublicRoute>
        <PrivateRoute path="/chat" authenticated={this.state.authenticated} component={Home}></PrivateRoute>
        <PublicRoute path="/signup" authenticated={this.state.authenticated} component={SingUp}></PublicRoute>
        <PublicRoute path="/login" authenticated={this.state.authenticated} component={Login}></PublicRoute>
      </Switch>
    </Router>
  );

  }
}
export default App;
