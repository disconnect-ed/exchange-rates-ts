import {dynamicsData, listData, listDataItem} from "../../types/types";
import {ActionsType} from "../actions/rates-action";


const initialState = {
    dynamicsData: null as dynamicsData | null,
    listData: null as listData | null,
    currentRate: null as listDataItem | null,
    isLoading: true
}

const ratesReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'SET_DYNAMICS_DATA':
            return {
                ...state,
                dynamicsData: action.data
            }
        case 'SET_LIST_DATA':
            return {
                ...state,
                listData: action.data
            }
        case 'SET_CURRENT_RATE':
            return {
                ...state,
                currentRate: action.data
            }
        case 'IS_LOADING':
            return {
                ...state,
                isLoading: action.bool
            }
        default:
            return state
    }
}

export default ratesReducer