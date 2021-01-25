import List from './components/List';
import { FishdataContextProvider } from './context/fishdataContext'

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
      <FishdataContextProvider>
        <Wrapper>
          <List />
        </Wrapper>
      </FishdataContextProvider>
    </div>
  );
}

export default App;
