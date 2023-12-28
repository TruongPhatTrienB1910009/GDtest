import React from 'react'
import styles from './style/CardList.module.css'
import { Button } from "reactstrap";
import { VND } from '../util/format';
import { useNavigate } from 'react-router-dom';
import DialogDelete from './DialogDelete';
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import stylesBtn from "./style/Card.module.css";


const CardList = ({ product, handleGetProducts }) => {
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
        <div className={styles.card}>
            <div className={styles.cardImg}><img src={product.image} alt="" /></div>
            <div className={styles.cardBody}>
                <div className={styles.cardContent}>
                    {product.description}
                </div>
                <div className={styles.actions}>
                    <span className={styles.price}>{VND.format(product.price)}</span>
                    <div>
                        <Button onClick={() => { navigate(`/edit/${product.id}`) }} className={stylesBtn.btn__edit}>
                            <FontAwesomeIcon style={{ marginRight: '6px' }} icon={faPenToSquare} />Edit
                        </Button>
                        <Button onClick={() => { setOpen(true) }} className={stylesBtn.btn__delete}>
                            <FontAwesomeIcon style={{ marginRight: '6px' }} icon={faTrash} />Delete
                        </Button>
                    </div>
                </div>
            </div>
            <DialogDelete handleDeleteProduct={handleDeleteProduct} open={open} setOpen={setOpen}/>
        </div>
    )
}

export default CardList