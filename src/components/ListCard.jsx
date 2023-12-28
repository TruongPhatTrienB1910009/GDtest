import React from 'react'
import CardList from './CardList'
import styles from './style/ListCard.module.css'

const ListCard = ({data, handleGetProducts}) => {
    return (
        <div className={styles.container}>
            {
                data.map((d, index) => {
                    return (
                        <CardList handleGetProducts={handleGetProducts} key={index} product={d} />
                    )
                })
            }
        </div>
    )
}

export default ListCard