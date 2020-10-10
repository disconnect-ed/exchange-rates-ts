import moment from "moment";

export type datesType = {
    startDate: string
    endDate: string
}

export const dateToString = (value: number) => {
    const startDate: string = moment().subtract(value, 'days').format('YYYY-MM-DD');
    const endDate: string = moment().format('YYYY-MM-DD');
    const dates: datesType = {startDate, endDate}
    return dates
}