import React from "react";
import { Link } from "react-router-dom";
import styles from "./Factory.module.css";

const Factory = () => {
    return (
        <div className={styles.imageDetailContainer}>
            <div className={styles.imageDetailImage}>
                <img src="/factory.jpg" alt="image" />
            </div>
            <div className={styles.imageDetailDescription}>
                <h2>CƠ SỞ SẢN XUẤT NẤM BÀO NGƯ PHAN HUY TUẬN</h2>
                <p>

                    Ngoài vai trò là một bác trưởng thôn nhiệt tình, có trách nhiệm. thì ông Phan Huy Tuận còn là một người nông dân trồng nấm vui vẻ, cởi mở và là chủ của cơ sở sản xuất Nấm Phan Huy Tuận.
                    Chọn nghề Nấm cũng là một cơ duyên khi ông được người quen dẫn đi thăm nhiều mô hình làm Nấm trong và ngoài huyện, nắm bắt được giá trị về dinh dưỡng và kinh tế mà loại nấm bào ngư mang lại nên ông quyết định bắt tay vào học hỏi, nghiên cứu và sản xuất. Những năm đầu, ông Tuận chọn hướng đi “lấy ngắn nuôi dài”, mỗi năm chỉ trồng vài nghìn bịch nấm sò. Trong hành trình khởi nghiệp, ông đã nhiều lần vấp váp, tổn thất do thiếu vốn, không có kinh nghiệm và chưa làm chủ được khoa học kỹ thuật, quy trình sản xuất.

                </p>
                <Link to="/introduce" className={styles.readMore}>Xem thêm</Link>
            </div>
        </div>
    );
};

export default Factory;
