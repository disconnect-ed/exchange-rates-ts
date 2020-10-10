import {exchangeRatesApi} from "../../api/api";
import {dynamicsData, listData, listDataItem} from "../../types/types";
import {InferActionsTypes} from "../store";


export const actions = {
    setDynamicData: (data: dynamicsData) => ({type: 'SET_DYNAMICS_DATA', data} as const),
    setListData: (data: listData) => ({type: 'SET_LIST_DATA', data} as const),
    setCurrentRate: (data: listDataItem) => ({type: 'SET_CURRENT_RATE', data} as const),
    isLoading: (bool: boolean) => ({type: 'IS_LOADING', bool} as const),
}

export const getDynamicData = (id: number, start: string, end: string) => {
    return async (dispatch: any) => {
        const result = await exchangeRatesApi.getDynamics(id, start, end)
        dispatch(actions.setDynamicData(result.data))
    }
}

export const getListData = () => {
    return async (dispatch: any) => {
        dispatch(actions.isLoading(true))
        const result = await exchangeRatesApi.getRatesList()
        const list = [...result.data]
        const newList: listData = []
        const dateNow = new Date()
        list.forEach(item => {
            const endDate = Date.parse(item.Cur_DateEnd)
            if (endDate > +dateNow) {
                newList.push(item)
            }
        })
        dispatch(actions.setListData(newList))
        dispatch(actions.isLoading(false))
    }
}

export const isLoading = (bool: boolean) => {
    return async (dispatch: any) => {
        dispatch(actions.isLoading(bool))
    }
}


export type ActionsType = InferActionsTypes<typeof actions>

