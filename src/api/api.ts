import axios from "axios";
import {dynamicsDataApi} from "../types/types";

const dynamicsBaseUrl: string = 'https://www.nbrb.by/API/ExRates/Rates/Dynamics/'

export const exchangeRatesApi = {
    getDynamics(id: number = 145, start: string = '2020-10-1', end: string = '2020-10-4') {
        return (
            axios.get<dynamicsDataApi>(`${dynamicsBaseUrl}${id}?startdate=${start}&enddate=${end}`)
        )
    }
}