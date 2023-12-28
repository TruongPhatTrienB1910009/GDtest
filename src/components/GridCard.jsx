import React, { useState } from 'react'
import CardProduct from './CardProduct'
import { Row, Col } from "reactstrap"
import styles from "./style/GridCard.module.css";

const GridCard = ({ data, handleGetProducts }) => {
    return (
        <Row>
            {
                data.map((d, index) => {
                    return (
                        <Col xs={12} md={4} sm={6} xl={3} className={styles.col} key={index}> 
                            <CardProduct handleGetProducts={handleGetProducts} key={index} product={d} /> 
                        </Col>
                    )
                })
            }

        </Row>
    )
}

export default GridCard