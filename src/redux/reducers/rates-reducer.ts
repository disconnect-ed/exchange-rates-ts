import {dynamicsData, listData} from "../../types/types";
import {ActionsType} from "../actions/rates-action";


const initialState = {
    dynamicsData: null as dynamicsData | null,
    listData: null as listData | null
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
        default:
            return state
    }
}

export default ratesReducer