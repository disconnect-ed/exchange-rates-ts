import React, {useEffect, FC} from 'react';
import './App.css';
import {getDynamicData, getListData} from "./redux/actions/rates-action";
import {useDispatch} from "react-redux";
import {GridContainer} from "./components/Grid/GridContainer";


const App: FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDynamicData(145, '2020-10-1', '2020-10-4'))
        dispatch(getListData())
    }, [])
    return (
        <div className="App">
            <GridContainer/>
        </div>
    );
}

export default App;
