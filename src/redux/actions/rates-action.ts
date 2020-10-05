import {exchangeRatesApi} from "../../api/api";
import {dynamicsData, listData} from "../../types/types";
import {InferActionsTypes} from "../store";


export const actions = {
    setDynamicData: (data: dynamicsData) => ({type: 'SET_DYNAMICS_DATA', data} as const),
    setListData: (data: listData) => ({type: 'SET_LIST_DATA', data} as const),
}

export const getDynamicData = (id: number, start: string, end: string) => {
    return async (dispatch: any) => {
        const result = await exchangeRatesApi.getDynamics(id, start, end)
        dispatch(actions.setDynamicData(result.data))
    }
}

export const getListData = () => {
    return async (dispatch: any) => {
        const result = await exchangeRatesApi.getRatesList()
        const list = [...result.data]
        const newList: listData = []
        const dateNow = new Date()
        await list.forEach(item => {
            const endDate = Date.parse(item.Cur_DateEnd)
            if (endDate > +dateNow) {
                newList.push(item)
            }
        })
        dispatch(actions.setListData(newList))
    }
}

export type ActionsType = InferActionsTypes<typeof actions>

