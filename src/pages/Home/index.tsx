import CardProduct from "../../components/Card/CardProduct";
import UserLayout from "../../components/Layout/UserLayout";
import Slide1 from "../../images/Home/slider-1.png";
import { Helmet } from "react-helmet";

import "../../components/Swiper/style.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, FreeMode, Mousewheel } from "swiper";

const Home = () => {
    return (
        <UserLayout>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>
                <Swiper
                    pagination={{
                        clickable: true
                    }}
                    freeMode
                    // mousewheel
                    spaceBetween={30}
                    modules={[Pagination, FreeMode, Mousewheel]}
                    className="mySwiper mb-10 w-full">
                    <SwiperSlide>
                            <a href="https://www.github.com" target="_blank" rel="noreferrer" className="bg-cover w-full h-[300px] bg-center rounded-[20px]" style={{ backgroundImage: `url(${Slide1})` }}>
                                <span></span>
                            </a>
                            {/* <img 
                        src="https://assets.klikindomaret.com/products/20025762/20025762_1.jpg" 
                        alt="piattos"
                        className="w-full bg-cover"
                        /> */}
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-cover w-full h-[300px] bg-center rounded-[20px]" style={{ backgroundImage: `url(https://img.okezone.com/content/2022/06/27/406/2618841/gajian-tiba-saatnya-wisata-bareng-mister-aladin-mumpung-lagi-ada-promo-hingga-rp150-000-khusus-nasabah-bni-GOe1W3Yfhr.JPG)` }}></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-cover w-full h-[300px] bg-center rounded-[20px]" style={{ backgroundImage: `url(https://lelogama.go-jek.com/post_featured_image/promo-hangout-bandung-1png.png)` }}></div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="bg-cover w-full h-[300px] bg-center rounded-[20px]" style={{ backgroundImage: `url(https://lelogama.go-jek.com/post_featured_image/header_blog_voucher-diskon-gocar-goride.jpg)` }}></div>
                    </SwiperSlide>
                </Swiper>
                <div>
                    <div className="flex items-start justify-between overflow-auto">
                        <div>
                            <h1 className="capitalize text-xl font-bold">rekomendasi produk</h1>
                            <p className="text-[14px] mt-2">Lihat rekomendasi biar ga salah pilih 😍</p>
                        </div>
                        <button className="text-sm capitalize rounded-full p-2 px-2 bg-yellow-100 text-orange-500">lihat semua</button>
                    </div>
                    <div className="w-full flex flex-wrap">
                        <CardProduct imageUrl="https://assets.klikindomaret.com/products/20025762/20025762_1.jpg" />
                        <CardProduct imageUrl="https://assets.klikindomaret.com/products/20025762/20025762_1.jpg" />
                        <CardProduct imageUrl="https://assets.klikindomaret.com/products/20025762/20025762_1.jpg" />
                        <CardProduct imageUrl="https://assets.klikindomaret.com/products/20025762/20025762_1.jpg" />
                    </div>
                </div>
                <div className="mt-20">
                    <div className="flex items-start justify-between overflow-auto">
                        <div>
                            <h1 className="capitalize text-xl font-bold">masih fresh</h1>
                            <p className="text-[14px] mt-2">Masi seger nih, fresh dari oven 🤩</p>
                        </div>
                        <button className="text-sm capitalize rounded-full p-2 px-2 bg-yellow-100 text-orange-500">lihat semua</button>
                    </div>
                    <div className="w-full flex flex-wrap">
                        <CardProduct imageUrl="https://assets.klikindomaret.com/products/20025762/20025762_1.jpg" />
                        <CardProduct imageUrl="https://assets.klikindomaret.com/products/20025762/20025762_1.jpg" />
                        <CardProduct imageUrl="https://assets.klikindomaret.com/products/20025762/20025762_1.jpg" />
                        <CardProduct imageUrl="https://assets.klikindomaret.com/products/20025762/20025762_1.jpg" />
                    </div>
                </div>
                <div className="mt-20">
                    <div className="flex items-start justify-between overflow-auto">
                        <div>
                            <h1 className="capitalize text-xl font-bold">laris manis</h1>
                        </div>
                        <button className="text-sm capitalize rounded-full p-2 px-2 bg-yellow-100 text-orange-500">lihat semua</button>
                    </div>
                    <div className="w-full flex flex-wrap mb-5">
                        <CardProduct imageUrl="https://assets.klikindomaret.com/products/20025762/20025762_1.jpg" />
                        <CardProduct imageUrl="https://assets.klikindomaret.com/products/20025762/20025762_1.jpg" />
                        <CardProduct imageUrl="https://assets.klikindomaret.com/products/20025762/20025762_1.jpg" />
                        <CardProduct imageUrl="https://assets.klikindomaret.com/products/20025762/20025762_1.jpg" />
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}

export default Home;