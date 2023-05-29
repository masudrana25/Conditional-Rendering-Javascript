import { useState } from 'react';
import './App.css'
import Details from './components/Details/Details';

function App() {
  const [familiar, setFamiliar] = useState(false);
  return (
    <div className="App">
      <h1> Is Familiar : {familiar.toString()}</h1>
      <button onClick={() =>setFamiliar(!familiar)}>Toggle Friend</button>
      <Details familiar={familiar}></Details>      
    </div>
  );
}

export default App;
