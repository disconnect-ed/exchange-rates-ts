import axios from "axios";

const baseUrl: string = 'https://www.nbrb.by/api/exrates/'

export const exchangeRatesApi = {
    getDynamics(id: number, start: string, end: string) {
        return (
            axios.get(`${baseUrl}Rates/Dynamics/${id}?startdate=${start}&enddate=${end}`)
        )
    },
    getRatesList() {
        return (
            axios.get(`${baseUrl}currencies`)
        )
    }
}