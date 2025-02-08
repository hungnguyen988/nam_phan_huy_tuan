

import React from "react";
import styles from './ImageTopic.module.css';

const ImageTopic = () => {
    return (
        <div className={styles["image-container"]}>
            <img src="/anh2.jpg" alt="My Image" className={styles.image} />
            {/*<div className={styles.textOverlay}>Chuyên cung cấp nấm sạch – An toàn – Chất lượng!</div>*/}
        </div>
    );
};

export default ImageTopic;
