import Home from './components/Home'
import List from './components/List';
import { FishdataContextProvider } from './context/fishdataContext'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// useful when: example: stable styling, just main changes. Here I can get rid of it. 
const Wrapper = ({ children }) => (
  <div>
    <h1>Catchy Title</h1>
    <div>{children}</div>
    <h2>footer</h2>
  </div>
);


function App() {
  return (
    <div>
      <Router>
        <FishdataContextProvider>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path ="/List">
              <Wrapper>
                <List />
              </Wrapper>
            </Route>         
          </Switch>
        </FishdataContextProvider>    
      </Router>
    </div>
  );
}

export default App;
