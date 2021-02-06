// Next step: details page
import Home from './components/Home'
import List from './components/List'
import Header from './components/Header'
import LogInContent from './components/LogInPage'
import RegisterContent from './auth/Register'

import { FishdataContextProvider } from './context/fishdataContext'
//React Bootstrap: some CSS-file is required. (source: https://react-bootstrap.github.io/getting-started/introduction)
import 'bootstrap/dist/css/bootstrap.min.css';

//import this for Router (connection between "pages")
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import underwaterFishH from './media/underwaterFishH.jpg';

//main home page:
// Wrapper useful when: example: stable styling, just main changes. Here I can get rid of it. 
const Wrapper = ({ children }) => (
  <div>
    <Header />
    <h1>Catchy Title</h1>
    <div>{children}</div>
    <h2>footer</h2>
  </div>
);

//   backgroundImage: `url(${underwaterFishH})`,
//   height: '100vh'
//   //background position cover...
// }

//entire App with all pages:
function App() {
  return (
    <div>
      {/* style={styleBackground} */}
      <Header />
      <Router>
        <FishdataContextProvider>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/List">
              <List />
            </Route>
              <Route exact path="/Register">
                <RegisterContent />
              </Route>
              <Route exact path="/LogInPage">
                <LogInContent />
              </Route>
          </Switch>
        </FishdataContextProvider>
      </Router>
    </div>
  );
}

export default App;
