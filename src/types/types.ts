
export type dynamicsDataApi = {
    status: 200
    statusText: "OK"
    data: dynamicsData
}

export type dynamicsData = Array<dynamicsDataItem>

export type dynamicsDataItem = {
    Cur_ID: number
    Cur_OfficialRate: number
    Date: string
}

