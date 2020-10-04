import axios from "axios";
import {dynamicsDataApi} from "../types/types";

const dynamicsBaseUrl: string = 'https://www.nbrb.by/API/ExRates/Rates/Dynamics/'

export const exchangeRatesApi = {
    getDynamics(id: number, start: string, end: string) {
        return (
            axios.get(`${dynamicsBaseUrl}${id}?startdate=${start}&enddate=${end}`)
        )
    }
}