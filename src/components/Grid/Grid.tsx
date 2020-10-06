import React, {FC} from "react";
import Chart from 'react-apexcharts'
import { dynamicsData } from "../../types/types";

type dynamicsDataType = {
    dynamicsData: dynamicsData
}

export const Grid: FC<dynamicsDataType> = ({dynamicsData}) => {
    const data: Array<string> = []
    const categories: Array<number> = []
    dynamicsData.forEach(item => {
        data.push(item.Date)
        categories.push(item.Cur_OfficialRate)
    })
    const state = {
        options: {
            chart: {
                id: 'apexchart-example'
            },
            xaxis: {
                categories: data
            }
        },
        series: [{
            name: 'series-1',
            data: categories
        }]
    }
    return (
        <div className='grid'>
            <div className="grid-main">
                <Chart options={state.options} series={state.series} type="area" width={'100%'} height={500}/>
            </div>
        </div>
    )
}