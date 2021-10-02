import React, {useState} from 'react';
import './App.css';
import Home from './components/Home'
import Main from './components/Main'

function App() {
  const [isTrue, setIsTrue] = useState('')

  function change(){
    setIsTrue(true)
  }
  return (
    <div className="App">
      {isTrue ? <Main /> : <Home change = {change}/>}
    </div>
  );
}

export default App;
