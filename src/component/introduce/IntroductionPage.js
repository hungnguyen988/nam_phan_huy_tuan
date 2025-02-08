import React from 'react';
import styles from './IntroductionPage.module.css';

const IntroductionPage = () => {
    return (
        <div className={styles.introContainer}>
            <header className={styles.introHeader}>
                <h1 className={styles.introTitle}>CHÀO MỪNG ĐẾN VỚI NẤM PHAN HUY TẬN </h1>
                <p className={styles.introSubtitle}>Khám phá sự độc đáo và chất lượng của chúng tôi</p>
            </header>

            <section className={styles.section}>
                <img src="/co_so.jpg" alt="Cơ sở sản xuất" className={styles.sectionImage} />
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>Cơ sở Sản xuất Hiện đại</h2>
                    <p className={styles.sectionText}>
                        Cơ sở sản xuất của chúng tôi được trang bị những công nghệ tiên tiến nhất,
                        đảm bảo chất lượng sản phẩm cao nhất. Chúng tôi tự hào về quy trình sản xuất
                        hiệu quả và thân thiện với môi trường.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <img src="/nhan_vien.jpg" alt="Đội ngũ nhân viên" className={styles.sectionImage} />
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>Đội ngũ Chuyên nghiệp</h2>
                    <p className={styles.sectionText}>
                        Đội ngũ nhân viên của chúng tôi là những chuyên gia giàu kinh nghiệm và
                        đam mê. Họ không ngừng học hỏi và phát triển để mang đến những sản phẩm
                        và dịch vụ tốt nhất cho khách hàng.
                    </p>
                </div>
            </section>

            <section className={styles.section}>
                <img src="/anh4.jpg" alt="Cam kết chất lượng" className={styles.sectionImage} />
                <div className={styles.sectionContent}>
                    <h2 className={styles.sectionTitle}>Cam kết Chất lượng</h2>
                    <p className={styles.sectionText}>
                        Chúng tôi cam kết mang đến những sản phẩm chất lượng cao nhất. Mỗi sản phẩm
                        đều trải qua quy trình kiểm tra nghiêm ngặt trước khi đến tay khách hàng,
                        đảm bảo sự hài lòng tuyệt đối.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default IntroductionPage;