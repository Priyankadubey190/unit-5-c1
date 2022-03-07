import logo from './logo.svg';
import './App.css';
import {Countbook} from "./components/Countbook";
import {Countpen} from "./components/CountPen";
import {Countnotebook} from "./components/Countnotebook";
import {Countinkpen} from "./components/Countinkpen";
 function App() {
  return (
    <div className='flex'>
     <Countbook />
     <Countpen/>
     <Countnotebook/>
     <Countinkpen/>
    </div>
  );
}

export default App;
