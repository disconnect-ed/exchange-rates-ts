import React from "react";
import {Grid} from "./Grid";
import {useSelector} from "react-redux";
import {dynamicsDataSelector} from "../../redux/selectors/selectors";

export const GridContainer = () => {

    const dynamicsData = useSelector(dynamicsDataSelector)

    return (
        <Grid dynamicsData={dynamicsData || []}/>
    )
}