import React, {FC} from "react";
import SettingOutlined from "@ant-design/icons/lib/icons/SettingOutlined";
import {Modal, Radio, Select} from "antd";
import { listData } from "../../types/types";

type PropsType = {
    toggleMenu: () => void
    visible: boolean
    isLoading: boolean
    setSelectState: any
    setRadioState: any
    selectState: number
    radioState: number
    listData: listData,
    handleOk: () => void
}

export const Menu: FC<PropsType> = ({toggleMenu, visible, isLoading, setSelectState,
                                        selectState, listData, handleOk, setRadioState, radioState}) => {

    const { Option } = Select;

    return (
        <div className='menu'>
            <button onClick={toggleMenu} className="menu-toggle"
                    disabled={isLoading}
            >
                <SettingOutlined style={{fontSize: 35}}/>
            </button>
            <Modal
                title="Параметры"
                visible={visible}
                onOk={handleOk}
                onCancel={toggleMenu}
            >
                <Select value={selectState} style={{ width: 200 }} onChange={setSelectState}>
                    {listData.map(item => <Option value={item.Cur_ID}>{item.Cur_Name}</Option>)}

                </Select>
                <Radio.Group onChange={(e) => setRadioState(e.target.value)} value={radioState}>
                    <Radio value={7}>7 дней</Radio>
                    <Radio value={15}>15 дней</Radio>
                    <Radio value={30}>30 дней</Radio>
                </Radio.Group>
            </Modal>
        </div>
    )
}