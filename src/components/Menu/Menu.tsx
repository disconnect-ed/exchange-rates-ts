import React, {FC} from "react";
import SettingOutlined from "@ant-design/icons/lib/icons/SettingOutlined";
import {Modal, Select} from "antd";
import { listData } from "../../types/types";

type PropsType = {
    toggleMenu: () => void
    visible: boolean
    isLoading: boolean
    setSelectState: any
    selectState: string
    listData: listData
}

export const Menu: FC<PropsType> = ({toggleMenu, visible, isLoading, setSelectState,
                                        selectState, listData}) => {

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
                // onOk={handleOk}
                onCancel={toggleMenu}
            >
                <Select value={selectState} style={{ width: 200 }} onChange={setSelectState}>
                    {listData.map(item => <Option value={item.Cur_ID}>{item.Cur_Name}</Option>)}

                </Select>
            </Modal>
        </div>
    )
}