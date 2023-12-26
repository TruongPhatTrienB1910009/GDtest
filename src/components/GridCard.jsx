import React, { useState } from 'react'
import CardProduct from './CardProduct'
import { Row, Col } from "reactstrap"
import styles from "./style/GridCard.module.css";

const GridCard = ({ data }) => {
    return (
        <Row>
            {
                data.map((d, index) => {
                    return (
                        <Col xs={4} md={3} sm={6} className={styles.col} key={index}> 
                            <CardProduct key={index} product={d} /> 
                        </Col>
                    )
                })
            }

        </Row>
    )
}

export default GridCard