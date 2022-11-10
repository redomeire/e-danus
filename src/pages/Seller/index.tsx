import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import CardPenjual from "../../components/Card/CardPenjual";
import CardProduct from "../../components/Card/CardProduct";
import UserLayout from "../../components/Layout/UserLayout";
import "../../components/Swiper/Swiper.css";
import { FreeMode, Pagination } from "swiper";

import 'swiper/css'
import styled from "styled-components";

const StyledSwiper = styled(Swiper)`
    height: fit-content !important;
    width: 100% !important;
    background-color: transparent !important
`;

const StyledSwiperSlide = styled(SwiperSlide)`
    height: fit-content !important;
    background-color: white !important;
    width: fit-content !important;
    &hover: { 
        filter: brightness(30%) !important;
    }
`

let arrs = ['', '', '', '', ''];

const Seller = () => {
    return (
        <UserLayout>
            <Helmet>
                <title>Penjual</title>
            </Helmet>
            <div>
                <div className="flex flex-col">
                    {
                        arrs.map(() => {
                            return (
                                <CardPenjual
                                    company="Filafest"
                                    caption="official account dies natalis ub" >
                                    <h1 className="font-bold">Danusan</h1>
                                    <StyledSwiper
                                        freeMode
                                        pagination={{
                                            clickable: true
                                        }}
                                        slidesPerView='auto'
                                        modules={[FreeMode, Pagination]}
                                    >
                                        <StyledSwiperSlide>
                                            <CardProduct
                                                className="w-full bg-white"
                                                imageUrl="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
                                        </StyledSwiperSlide>
                                        <StyledSwiperSlide>
                                            <CardProduct
                                                imageUrl="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
                                        </StyledSwiperSlide>
                                        <StyledSwiperSlide>
                                            <CardProduct
                                                className="w-full bg-white"
                                                imageUrl="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
                                        </StyledSwiperSlide>
                                        <StyledSwiperSlide>
                                            <CardProduct
                                                imageUrl="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" />
                                        </StyledSwiperSlide>
                                    </StyledSwiper>
                                </CardPenjual>
                            );
                        })
                    }
                    <div>
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}

export default Seller;