import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login"
import Checkout from "./Checkout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
function App() {
  const [{},dispatch] = useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged(authUser =>{
      console.log("the user is",authUser)
      if (authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })

        //user was logged in or was loggeg in
      }else{
        dispatch({
          type: 'SET_USER',
          user:null
        })
          //the user was logged out
      }
    })
  },[])
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
          <Header />
            <Home />
            
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
