import {AppStateType} from "../store";

export const listDataSelector = (state: AppStateType) => {
    return state.rates.listData
}

export const dynamicsDataSelector = (state: AppStateType) => {
    return state.rates.dynamicsData
}

export const isLoadingSelector = (state: AppStateType) => {
    return state.rates.isLoading
}