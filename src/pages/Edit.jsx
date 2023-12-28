import React, { useEffect, useState } from 'react'
import styles from './style/Login.module.css'
import stylesAdd from './style/Add.module.css'
import Upload from '../components/Upload'
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

const Edit = () => {
  const [errors, setErrors] = useState({});
  const [images, setImages] = React.useState([]);
  const [product, setProduct] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const { id } = useParams();

  const handleGetProduct = async () => {
    try {
      const res = await fetch(`http://localhost:3000/products/${id}`);
      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.log(error)
    }
  }

  const handleChangeCode = (e) => {
    setProduct({
      ...product,
      code: e.target.value
    })
  }

  const handleChangeName = (e) => {
    setProduct({
      ...product,
      name: e.target.value
    })
  }

  const handleChangePrice = (e) => {
    setProduct({
      ...product,
      price: e.target.value
    })
  }

  const handleChangeDescription = (e) => {
    setProduct({
      ...product,
      description: e.target.value
    })
  }

  const handleEditProduct = async (e) => {
    try {
      e.preventDefault();
      setIsLoading(true);
      let imgData = null;
      if (images[0]) {
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
      }

      const form = new FormData(e.target);

      let data = {
        code: form.get("code"),
        name: form.get("name"),
        price: Number(form.get("price")),
        description: form.get("description"),
      }

      if (imgData != null) {
        data.image = imgData.url;
      }

      const response = await fetch(
        `https://mock-flzy.onrender.com/products/${id}`,
        {
          method: "PATCH",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        }
      )
      const res = await response.json();
      if (res) {
        setIsLoading(false);
      }
      alert("Success", res)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    handleGetProduct();
  }, [])

  return (
    <div>
      {
        (product) ? (
          <div className={styles.containerForm}>
            <Loading isLoading={isLoading}/>
            <form onSubmit={handleEditProduct} className={styles.formLogin}>
              <div className={styles.formContent}>
                <div className={styles.formGroup}>
                  <div className={styles.formGroupInput}>
                    <label htmlFor="code">Code</label>
                    <input onChange={handleChangeCode} value={product.code} placeholder='Code' name='code' type="text" />
                  </div>
                  <div className={styles.formGroupError}>
                    <label htmlFor=""></label>
                    <span className={styles.error}>{errors.code}</span>
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <div className={styles.formGroupInput}>
                    <label htmlFor="name">Name</label>
                    <input onChange={handleChangeName} value={product.name} placeholder='Name Product' name='name' type="text" />
                  </div>
                  <div className={styles.formGroupError}>
                    <label htmlFor=""></label>
                    <span className={styles.error}>{errors.name}</span>
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <div className={styles.formGroupInput}>
                    <label htmlFor="price">Price</label>
                    <input onChange={handleChangePrice} value={product.price} placeholder='Price' name='price' type="number" />
                  </div>
                  <div className={styles.formGroupError}>
                    <label htmlFor=""></label>
                    <span className={styles.error}>{errors.price}</span>
                  </div>
                </div>
                <div>
                  <textarea onChange={handleChangeDescription} value={product.description} placeholder='Description' className={stylesAdd.textArea} name="description" id="" cols="30" rows="3"></textarea>
                  <span className={styles.error}>{errors.description}</span>
                </div>
                <Upload url={product.image} images={images} setImages={setImages} />
              </div>
              <button className={styles.btn__login} type='submit'>OK</button>
            </form>
          </div>
        ) : ('')
      }
    </div>
  )
}

export default Edit