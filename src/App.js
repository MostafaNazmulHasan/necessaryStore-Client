import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainMenu from "./Components/MainMenu/MainMenu";
import Login from "../src/Components/Login/Login"
import Home from "./Components/Home/Home";
import Admin from "./Components/Admin/Admin";
import CheckOut from "./Components/CheckOut/CheckOut";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <div>
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <MainMenu></MainMenu>
          <Switch>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/menu">
              <MainMenu></MainMenu>
            </Route>
            <PrivateRoute path="/admin">
              <Admin />
            </PrivateRoute>
            <PrivateRoute path="/checkOut/:name">
              <CheckOut></CheckOut>
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
