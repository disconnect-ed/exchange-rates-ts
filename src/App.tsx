import React, {useEffect, FC} from 'react';
import './App.scss';
import {actions, getDynamicData, getListData} from "./redux/actions/rates-action";
import {useDispatch, useSelector} from "react-redux";
import {GridContainer} from "./components/Grid/GridContainer";
import {MenuContainer} from "./components/Menu/MenuContainer";
import { Layout } from 'antd';
import {AppStateType} from "./redux/store";
import {listDataSelector} from "./redux/selectors/selectors";


const App: FC = () => {
    const dispatch = useDispatch()
    // const listData = useSelector(listDataSelector)
    useEffect(() => {
        dispatch(getListData())
        // dispatch(getDynamicData())
    }, [])
    return (
        <div className="app">
            <Layout style={{ minHeight: '100vh' }}>
            <MenuContainer/>
                <div className="app-content">
                    <h2>график курсов валют по отношению к белорусскому рублю</h2>
                    <GridContainer/>
                </div>
            </Layout>
        </div>
    );
}

export default App;
