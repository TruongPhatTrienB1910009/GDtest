import React from 'react'
import styles from './style/Loading.module.css'

const Loading = ({ isLoading }) => {
    if (!isLoading) {
        return ('')
    }
    return (
        <div className={styles.loading}>
            <img src="/loading.gif" alt="" />
        </div>
    )
}

export default Loading