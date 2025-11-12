import Header from "./components/Header";
import Meals from "./components/Meals";
import { BasketContextProvider } from './store/BasketContext.jsx'

function App() {
  return (
    <BasketContextProvider>
     <Header/>
     <Meals/>
    </BasketContextProvider>
  );
}

export default App;
