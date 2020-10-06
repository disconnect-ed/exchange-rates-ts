import React, {useEffect, FC} from 'react';
import './App.scss';
import {getDynamicData, getListData} from "./redux/actions/rates-action";
import {useDispatch} from "react-redux";
import {GridContainer} from "./components/Grid/GridContainer";
import {MenuContainer} from "./components/Menu/MenuContainer";
import { Layout } from 'antd';


const App: FC = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDynamicData(145, '2020-10-1', '2020-10-4'))
        dispatch(getListData())
    }, [])
    return (
        <div className="App">
            <Layout style={{ minHeight: '100vh' }}>
            <MenuContainer/>
            <GridContainer/>
            </Layout>
        </div>
    );
}

export default App;
