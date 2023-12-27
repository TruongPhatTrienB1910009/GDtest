import React from "react";
import ImageUploading from "react-images-uploading";
import styles from "./style/Upload.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'

export default function Upload({ images, setImages, url }) {
    const maxNumber = 1;
    console.log(url);
    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList[0], addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
                acceptType={["jpg", "png", "jpeg"]}
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps
                }) => (
                    // write your building UI
                    <div className={styles.upload__image_wrapper}>
                        {
                            (imageList.length == 0 && !url) ? (
                                <button
                                    style={isDragging ? { color: "red" } : null}
                                    onClick={onImageUpload}
                                    {...dragProps}
                                    className={styles.btn__upload}
                                    type="button"
                                >
                                    <FontAwesomeIcon style={{ marginRight: '6px' }} icon={faArrowUpFromBracket} />
                                    Upload Image
                                </button>
                            ) : ''
                        }

                        {
                            (url && imageList.length == 0) ? (
                                <div>
                                    <div className={styles.image_item}>
                                        <img src={url} alt="" width="100" />
                                        <div className={styles.image_item__btn_wrapper}>
                                            <button type="button" className={styles.btn__action} onClick={() => onImageUpdate(0)}>Update</button>
                                            <button type="button" className={styles.btn__action} onClick={() => onImageRemove(0)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    {imageList.map((image, index) => (
                                        <div key={index} className={styles.image_item}>
                                            <img src={image.data_url} alt="" width="100" />
                                            <div className={styles.image_item__btn_wrapper}>
                                                <button type="button" className={styles.btn__action} onClick={() => onImageUpdate(index)}>Update</button>
                                                <button type="button" className={styles.btn__action} onClick={() => onImageRemove(index)}>Remove</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )
                        }

                        {/* {imageList.map((image, index) => (
                            <div key={index} className={styles.image_item}>
                                <img src={image.data_url} alt="" width="100" />
                                <div className={styles.image_item__btn_wrapper}>
                                    <button type="button" className={styles.btn__action} onClick={() => onImageUpdate(index)}>Update</button>
                                    <button type="button" className={styles.btn__action} onClick={() => onImageRemove(index)}>Remove</button>
                                </div>
                            </div>
                        ))} */}
                    </div>
                )}
            </ImageUploading>
        </div>
    );
}
