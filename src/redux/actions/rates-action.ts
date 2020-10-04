import {exchangeRatesApi} from "../../api/api";
import {dynamicsData} from "../../types/types";
import {InferActionsTypes} from "../store";


export const actions = {
    setDynamicData: (data: dynamicsData) => ({type: 'SET_DYNAMICS_DATA', data} as const)
}

export const getDynamicData = (id: number, start: string, end: string) => {
    return async (dispatch: any) => {
        const data = await exchangeRatesApi.getDynamics(id, start, end)
        dispatch(actions.setDynamicData(data.data))
    }
}

export type ActionsType = InferActionsTypes<typeof actions>

