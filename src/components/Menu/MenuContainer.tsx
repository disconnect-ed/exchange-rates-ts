import React, {FC, useState} from "react";
import {Menu} from "./Menu";
import {useSelector} from "react-redux";
import {isLoadingSelector, listDataSelector} from "../../redux/selectors/selectors";

export const MenuContainer = () => {

    const [visible, toggleVisible] = useState(false)
    const [selectState, setSelectState] = useState('')

    const isLoading = useSelector(isLoadingSelector)
    const listData = useSelector(listDataSelector)

    const toggleMenu = () => {
        toggleVisible(!visible)
    }

    return (
        <Menu visible={visible} isLoading={isLoading} toggleMenu={toggleMenu}
              selectState={selectState} setSelectState={setSelectState}
              listData={listData || []}
        />
    )
}