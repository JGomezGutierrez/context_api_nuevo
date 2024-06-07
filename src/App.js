import './App.css';
import { Context } from './context/Context';
import Approuter from './routing/Approuter';

function App() {
  return (
    <div className="App">
        <Context.Provider value='Juliet Gomez'>
          <Approuter/>
         </Context.Provider>
    </div>
  );
}

export default App;
