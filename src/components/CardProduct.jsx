import React from 'react'
import { Card, CardBody, CardText, CardTitle, CardSubtitle, Button } from "reactstrap";
import styles from "./style/Card.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import DialogDelete from './DialogDelete';
import { useState } from 'react';


const CardProduct = ({ product }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false)
    return (
        <>
            <Card
                style={{
                    width: '100%',
                    overflow: 'hidden',
                }}
            >
                <img
                    alt="Sample"
                    src={`/images/${product.image}`}
                />
                <CardBody>
                    <CardTitle style={{ fontSize: '18px', fontWeight: '600', height: '50px' }}>
                        {product.name}
                    </CardTitle>
                    <CardText className={styles.cardText}>
                        {product.description}
                    </CardText>
                    <Button onClick={() => { navigate(`/edit/${product.id}`) }} className={styles.btn__edit}>
                        <FontAwesomeIcon style={{ marginRight: '6px' }} icon={faPenToSquare} />Edit
                    </Button>
                    <Button onClick={() => {setOpen(true)}} className={styles.btn__delete}>
                        <FontAwesomeIcon style={{ marginRight: '6px' }} icon={faTrash} />Delete
                    </Button>
                </CardBody>
            </Card>
            <DialogDelete open={open} setOpen={setOpen}/>
        </>
    )
}

export default CardProduct