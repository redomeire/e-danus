import axios from "axios";
import React from "react";
import { Helmet } from "react-helmet";
import BreadCrumbs from "../../components/BreadCrumbs";
import CardProduct from "../../components/Card/CardProduct";
import UserLayout from "../../components/Layout/UserLayout";
import Loader from "../../components/Loader";

const Product = () => {
    const [datas, setDatas] = React.useState([]);

    const fetchData = () => {
        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
            .then((res) => {
                console.log(res.data);
                setDatas(res.data.meals);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    React.useEffect(() => {
        fetchData();
    }, [])

    return (
        <UserLayout>
            <Helmet>
                <title>Product</title>
            </Helmet>
            <div>
                <div>
                    <div className="flex items-center justify-between overflow-auto mb-2">
                        <BreadCrumbs content="rekomendasi produk" />
                    </div>
                    <div className="w-full flex flex-wrap">
                        {
                            datas.length !== 0 ?
                            datas.map((data: {strMealThumb: string, strMeal: string}, index) => {
                                return (
                                    <CardProduct 
                                    key={index} 
                                    imageUrl={data.strMealThumb}
                                    title={data.strMeal}
                                    />
                                );
                            })
                            :
                            <>
                                <Loader/>
                                <Loader/>
                                <Loader/>
                                <Loader/>
                                <Loader/>
                                <Loader/>
                                <Loader/>
                                <Loader/>
                            </>
                        }
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}

export default Product;