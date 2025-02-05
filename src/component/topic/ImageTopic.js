import React from "react";
import styles from './ImageTopic.module.css';

const ImageTopic = () => {
    return (
        <>
            <div className={styles.imageContainer}>
                <img src="/anh2.jpg" alt="My Image" className={styles.image}/>
            </div>

        </>
    );
};

export default ImageTopic;