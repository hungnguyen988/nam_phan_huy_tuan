import React from "react";
import styles from "./VideoIntroduction.module.css";

const VideoIntroduction = () => {
    return (
        <div className={styles.videoContainer}>
            <h2>Truyền thông nói gì về Phan Huy Tuận</h2>
            <p>
                Doanh nghiệp nấm Phan Huy Tuận đã được đài truyền hình đưa tin về mô hình sản xuất và phát triển.
                Hãy cùng xem video để hiểu rõ hơn về quy trình và giá trị mà chúng tôi mang lại.
            </p>

            <div className={styles.videoWrapper}>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/HpDFX1PBoow"
                    title="Giới thiệu doanh nghiệp DDAXX"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
};

export default VideoIntroduction;
