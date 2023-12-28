import React from 'react'
import { Card, CardBody, CardText, CardTitle, CardSubtitle, Button } from "reactstrap";
import styles from "./style/Card.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import DialogDelete from './DialogDelete';
import { useState } from 'react';
import { VND } from '../util/format';


const CardProduct = ({ product, handleGetProducts }) => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const handleDeleteProduct = async () => {
        try {
            const response = await fetch(
                `https://mock-flzy.onrender.com/products/${product.id}`,
                {
                  method: "DELETE",
                  body: {},
                }
              )
              const res = await response.json();
              setOpen(false);
              handleGetProducts();
        } catch (error) {
            console.log(error);
        }
    }
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
                    src={product.image}
                />
                <CardBody>
                    <CardTitle style={{ fontSize: '18px', fontWeight: '600', height: '50px' }}>
                        {product.name}
                    </CardTitle>
                    <CardText className={styles.cardText}>
                        {product.description}
                    </CardText>
                    <span className={styles.price}>{VND.format(product.price)}</span>
                    <div>
                    <Button onClick={() => { navigate(`/edit/${product.id}`) }} className={styles.btn__edit}>
                        <FontAwesomeIcon style={{ marginRight: '6px' }} icon={faPenToSquare} />Edit
                    </Button>
                    <Button onClick={() => {setOpen(true)}} className={styles.btn__delete}>
                        <FontAwesomeIcon style={{ marginRight: '6px' }} icon={faTrash} />Delete
                    </Button>
                    </div>
                </CardBody>
            </Card>
            <DialogDelete handleDeleteProduct={handleDeleteProduct} open={open} setOpen={setOpen}/>
        </>
    )
}

export default CardProduct