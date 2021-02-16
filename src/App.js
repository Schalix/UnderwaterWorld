// Next step: details page
import Home from './components/Home'
import List from './components/List'
import DetailPage from './components/DetailPage'
import Header from './components/Header'
import LogInContent from './auth/LogInPage'
import RegisterContent from './auth/Register'
import { AuthContextProvider } from './context/authContext'

import { FishdataContextProvider } from './context/fishdataContext'
//React Bootstrap: some CSS-file is required. (source: https://react-bootstrap.github.io/getting-started/introduction)
import 'bootstrap/dist/css/bootstrap.min.css';

//import this for Router (connection between "pages")
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// import underwaterFishH from './media/underwaterFishH.jpg';

//   backgroundImage: `url(${underwaterFishH})`,
//   height: '100vh'
//   //background position cover...

// const PrivateRoute = ( ) => {
//   if(user !== null) {
//     return <Route   />;
//   }
//   else {
//     return <Redirect to="/login" />
//   }
// }


//entire App with all pages:
function App() {
  return (
    <div>
      {/* style={styleBackground} */}
      <Header />
      <Router>
        <AuthContextProvider>
          <FishdataContextProvider>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/Species">
                <List />
              </Route>
              <Route exact path="/Details/:id">
                <DetailPage />
              </Route>
              <Route exact path="/Register">
                <RegisterContent />
              </Route>
              <Route exact path="/LogInPage">
                <LogInContent />
              </Route>
            </Switch>
          </FishdataContextProvider>
        </AuthContextProvider>
      </Router>
    </div>
  );
}

export default App;
