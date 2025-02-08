import React from "react";
import ImageTopic from "../topic/ImageTopic";
import Factory from "../factory/Factory";
import MainProduct from "../main_product/MainProduct";
import VideoIntroduction from "../video/VideoIntroduction";
import WhyChooseUs from "../whyChoiceUs/WhyChooseUs";
import Contact from "../../contact/Contact";
import RelatedImages from "../picture/RelatedImages";

const HomePage = () => {
    const images = [
        "/anh1.jpg",
        "/anh2.jpg",
        "/anh3.jpg",
        "/anh4.jpg",
        "/anh5.jpg",
        "/anh6.png"
    ];

    return (
        <div>
            <ImageTopic />
            <Factory />
            <MainProduct />
            <VideoIntroduction />
            <WhyChooseUs />
            <Contact />
            <RelatedImages images={images} />
        </div>
    );
};

export default HomePage;
