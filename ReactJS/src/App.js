import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

// import AuthVerify from "./common/auth-verify";
import EventBus from "./common/EventBus";
import FooterComponent from "./components/footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_FARMER"),
      });
    }
    
    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;

    return (
      <div>
        <header className="App-header">
        <nav className="header">
          <Link to={"/"} className="navbar-brand">
            <h1>&emsp;&emsp;&emsp;&emsp;E-mandi</h1>
          </Link>
          <div className="navbar-nav mr-auto">
            {/* <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li> */}

            
            {/* {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/trader"} className="nav-link">
                 Farmer Account
                </Link>
              </li>
            )} */}

            {/* {currentUser && (
              <li className="nav-item">
                <Link to={"/farmer"} className="nav-link">
               Farmer Account 
                </Link>
              </li>
            )} */}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <div className="pad">
              <li className="nav-item">
              
                <Link to={"/profile"} className="nav-link">
                  <button class="btn btn-outline-danger" type="button">{currentUser.username}</button>
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                <button class="btn btn-outline-success" type="button">Logout</button>
                </a>
              </li>
              </div>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <div className="pad">
                <Link to={"/login"} className="nav-link">
                  <button class="btn btn-outline-success" type="button">Login</button>
                </Link>
              

              
                <Link to={"/register"} className="nav-link">
                <button class="btn btn-outline-success" type="button">Register</button>
                </Link>
                </div>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>

        { /*<AuthVerify logOut={this.logOut}/> */ }
        
        </header>
        {/* <FooterComponent/> */}
      </div>
      
    );
  }
}

export default App;
