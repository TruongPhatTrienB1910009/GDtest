import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList, faTableCellsLarge } from '@fortawesome/free-solid-svg-icons'
import styles from "./style/Switch.module.css"

const BtnSwitch = ({type, setType}) => {
    return (
        <>
            <div className={styles.containSwitch}>
            <button onClick={() => {setType(0)}}><FontAwesomeIcon className={type==0 ? `${styles.active}` : ''} icon={faTableCellsLarge} /></button>
                <button onClick={() => {setType(1)}}><FontAwesomeIcon className={type==1 ? `${styles.active}` : ''} icon={faList} /></button>
            </div>
        </>
    )
}

export default BtnSwitch