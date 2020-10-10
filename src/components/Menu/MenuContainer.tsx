import React, {FC, useState} from "react";
import {Menu} from "./Menu";
import {useDispatch, useSelector} from "react-redux";
import {isLoadingSelector, listDataSelector} from "../../redux/selectors/selectors";
import {getDynamicData} from "../../redux/actions/rates-action";
import {datesType, dateToString} from "../../utils/methods";

export const MenuContainer = () => {

    const [visible, toggleVisible] = useState(true)
    const [selectState, setSelectState] = useState(0)
    const [radioState, setRadioState] = useState(7)
    const dispatch = useDispatch()

    const isLoading = useSelector(isLoadingSelector)
    const listData = useSelector(listDataSelector)

    const toggleMenu = () => {
        toggleVisible(!visible)
    }

    const handleOk = () => {
        const dates: datesType = dateToString(6)
        dispatch(getDynamicData(+selectState, dates.startDate, dates.endDate))
    }

    return (
        <Menu visible={visible} isLoading={isLoading} toggleMenu={toggleMenu}
              selectState={selectState} setSelectState={setSelectState}
              listData={listData || []} handleOk={handleOk}
              radioState={radioState} setRadioState={setRadioState}
        />
    )
}