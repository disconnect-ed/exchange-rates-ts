import React, {useEffect} from 'react';
import './App.css';
import {getDynamicData} from "./redux/actions/rates-action";
import {useDispatch} from "react-redux";


function App() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDynamicData(145, '2020-10-1', '2020-10-4'))
    }, [])
    return (
        <div className="App">

        </div>
    );
}

export default App;
