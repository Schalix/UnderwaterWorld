//next step: implement design like here for example: https://designshack.net/articles/inspiration/mobile-app-templates/
//            or here: https://duckduckgo.com/?q=app+design+blue+happy&t=ffsb&atb=v177-1&iar=images&iax=images&ia=images 
//1. make background from dark blue at the bottom to light blue on top.
//2. find symbol (fish)


import Home from './components/Home'
import List from './components/List'
import Header from './components/Header'

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


//entire App with all pages:
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
