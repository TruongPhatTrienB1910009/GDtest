import React, { useEffect, useState } from 'react'
import styles from './style/Login.module.css'
import stylesAdd from './style/Add.module.css'
import Upload from '../components/Upload'
import Loading from '../components/Loading'
import { useNavigate } from "react-router-dom";

const Add = () => {
  const [errors, setErrors] = useState({});
  const [images, setImages] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleAddProduct = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      let imgData;
      const image = new FormData();
      image.append("file", images[0].file);
      image.append("cloud_name", "dpur9xqc7")
      image.append("upload_preset", import.meta.env.VITE_upload_preset)

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dpur9xqc7/image/upload",
        {
          method: "POST",
          body: image,
        }
      )
      imgData = await response.json();
      // }

      try {
        const form = new FormData(e.target);
        const data = {
          code: form.get("code"),
          name: form.get("name"),
          price: Number(form.get("price")),
          description: form.get("description"),
          image: imgData.url
        }

        const response = await fetch(
          "https://mock-flzy.onrender.com/products",
          {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
          }
        )
        const res = await response.json();
        if(res) {
          setIsLoading(false);
        }
        alert("Success", res)
        navigate('/')
      } catch (error) {
        console.log(error)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <Loading isLoading={isLoading} />

      <div className={styles.containerForm}>
        <form onSubmit={handleAddProduct} className={styles.formLogin}>
          <div className={styles.formContent}>
            <div className={styles.formGroup}>
              <div className={styles.formGroupInput}>
                <label htmlFor="code">Code</label>
                <input placeholder='Code' name='code' type="text" />
              </div>
              <div className={styles.formGroupError}>
                <label htmlFor=""></label>
                <span className={styles.error}>{errors.code}</span>
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.formGroupInput}>
                <label htmlFor="name">Name</label>
                <input placeholder='Name Product' name='name' type="text" />
              </div>
              <div className={styles.formGroupError}>
                <label htmlFor=""></label>
                <span className={styles.error}>{errors.name}</span>
              </div>
            </div>
            <div className={styles.formGroup}>
              <div className={styles.formGroupInput}>
                <label htmlFor="price">Price</label>
                <input placeholder='Price' name='price' type="number" />
              </div>
              <div className={styles.formGroupError}>
                <label htmlFor=""></label>
                <span className={styles.error}>{errors.price}</span>
              </div>
            </div>
            <div>
              <textarea placeholder='Description' className={stylesAdd.textArea} name="description" id="" cols="30" rows="3"></textarea>
              <span className={styles.error}>{errors.description}</span>
            </div>
            <Upload images={images} setImages={setImages} />
          </div>
          <button className={styles.btn__login} type='submit'>Add Product</button>
        </form>
      </div>
    </div>
  )
}

export default Add