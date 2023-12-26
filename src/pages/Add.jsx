import React, { useEffect, useState } from 'react'
import styles from './style/Login.module.css'
import stylesAdd from './style/Add.module.css'
import Upload from '../components/Upload'

const Add = () => {
  const [errors, setErrors] = useState({});
  const [images, setImages] = React.useState([]);
  const handleAddProduct = async (e) => {
    try {
      e.preventDefault();
      const image = new FormData();
      image.append("file", images[0].file);
      image.append("cloud_name", "dpur9xqc7")
      image.append("upload_preset", import.meta.env.VITE_upload_preset)

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dpur9xqc7/image/upload",
        {
          method: "POST",
          body: image
        }
      )

      const imgData = await response.json();
      console.log(imgData)
      // const imgURL = imgData.url.toString();
      // console.log("imgURL", imgURL)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <div className={styles.containerForm}>
        <form onSubmit={handleAddProduct} className={styles.formLogin}>
          <div className={styles.formContent}>
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
                <input placeholder='Price' name='email' type="text" />
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