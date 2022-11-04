import CardProduct from "../../components/Card/CardProduct";
import UserLayout from "../../components/Layout/UserLayout";
import {Helmet} from "react-helmet";

import "../../components/Swiper/style.css";
import "swiper/css";
import "swiper/css/pagination";

import {Swiper, SwiperSlide} from "swiper/react";
import { Pagination } from "swiper";

const Home = () => {
    return (
        <UserLayout>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>
                <Swiper pagination modules={[Pagination]} className="mySwiper mb-20">
                    <SwiperSlide>
                        <div className="bg-cover w-full h-[300px]" style={{backgroundImage: "url(https://assets.klikindomaret.com/products/20025762/20025762_1.jpg)"}}></div>
                        {/* <img 
                        src="https://assets.klikindomaret.com/products/20025762/20025762_1.jpg" 
                        alt="piattos"
                        className="w-full bg-cover"
                        /> */}
                    </SwiperSlide>
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 1</SwiperSlide>
                    <SwiperSlide>Slide 1</SwiperSlide>
                </Swiper>
                <div className="flex items-start justify-between overflow-auto">
                    <div>
                        <h1 className="capitalize text-xl font-bold">rekomendasi produk</h1>
                        <p className="text-[14px] mt-2">Lihat rekomendasi biar ga salah pilih 😍</p>
                    </div>
                    <button className="text-sm capitalize rounded-full p-2 px-2 bg-yellow-100 text-orange-500">lihat semua</button>
                </div>
                <div className="w-full flex flex-wrap">
                    <CardProduct imageUrl="https://assets.klikindomaret.com/products/20025762/20025762_1.jpg"/>
                    <CardProduct imageUrl="https://assets.klikindomaret.com/products/20025762/20025762_1.jpg"/>
                    <CardProduct imageUrl="https://assets.klikindomaret.com/products/20025762/20025762_1.jpg"/>
                    <CardProduct imageUrl="https://assets.klikindomaret.com/products/20025762/20025762_1.jpg"/>
                </div>
            </div>
        </UserLayout>
    );
}

export default Home;