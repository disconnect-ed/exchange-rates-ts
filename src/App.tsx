import React, {useEffect} from 'react';
import './App.css';
import {exchangeRatesApi} from "./api/api";

function App() {
  useEffect(() => {
    exchangeRatesApi.getDynamics().then(
        resp => {
          console.log(resp)
        }
    )
  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;
