import React from "react";
import styles from './MainProduct.module.css'
import {Link} from "react-router-dom";

const MainProduct = () => {
    return (
        <div className={styles.imageDetailContainer}>
            <div className={styles.imageDetailImage}>
                <img src="/mainproduct.jpg" alt="image" />
            </div>
            <div className={styles.imageDetailDescription}>
                <h2>SẢN PHẨM CHÍNH </h2>
                <p>

                    Nấm bào ngư là một loại nấm giàu dinh dưỡng, có hương vị thơm ngon và mang lại nhiều lợi ích cho sức khỏe. Với hàm lượng protein cao, ít chất béo và chứa nhiều vitamin, khoáng chất, nấm bào ngư không chỉ là nguyên liệu quen thuộc trong ẩm thực mà còn được đánh giá cao trong y học. Nấm có thể chế biến thành nhiều món ăn hấp dẫn như xào, nấu canh, lẩu hay chiên giòn.

                    Tại Phan Huy Tuận, chúng tôi nuôi trồng nấm bào ngư theo quy trình khép kín, đảm bảo sạch, an toàn và giữ nguyên giá trị dinh dưỡng. Với cam kết mang đến sản phẩm chất lượng cao, chúng tôi luôn sẵn sàng cung cấp nấm tươi ngon mỗi ngày đến tay khách hàng.
                </p>
                <Link to="/products" className={styles.readMore}>Xem thêm sản phẩm</Link>
            </div>
        </div>
    );
};

export default MainProduct;