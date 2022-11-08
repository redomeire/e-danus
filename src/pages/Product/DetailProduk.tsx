import React from "react";
import { Helmet } from "react-helmet";
import BreadCrumbs from "../../components/BreadCrumbs";
import Button from "../../components/Button";
import LikeButton from "../../components/Button/LikeButton";
import CardProduct from "../../components/Card/CardProduct";
import UserLayout from "../../components/Layout/UserLayout";
import Filafest from "../../images/Product/detail/filafest.png";

const imageData = [
    {
        imageUrl: 'https://images.unsplash.com/photo-1606525437679-037aca74a3e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1610505127058-2ed68ad7d21e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=811&q=80'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1515022376298-7333f33e704b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80'
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1613135373494-d1f6a77d159b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80'
    },
]

const DetailProduk = () => {
    const [url, setUrl] = React.useState('');

    React.useEffect(() => {
        setUrl(imageData[0].imageUrl);
    }, [])

    return (
        <UserLayout>
            <Helmet>
                <title>Product detail</title>
            </Helmet>
            <div>
                <div>
                    <div className="flex items-center justify-between overflow-auto mb-5">
                        <BreadCrumbs content="detail produk" />
                    </div>
                    <div className="w-full flex flex-col">
                        <div className="relative">
                            <div className={`w-full h-[250px] rounded-lg bg-cover `} style={{ backgroundImage: `url('${url}')` }}></div>
                            <LikeButton className="absolute top-3 right-3" />
                        </div>
                        <div className="flex items-center justify-between mt-10 mb-5">
                            {
                                imageData.map((data, index) => {
                                    return (
                                        <div
                                            key={index}
                                            style={{ backgroundImage: `url('${data.imageUrl}')` }}
                                            className={`cursor-pointer transition duration-200 bg-cover w-[80px] h-[80px] rounded-md hover:opacity-80 ${data.imageUrl === url && 'ring-4 ring-yellow-300'}`}
                                            onClick={() => setUrl(data.imageUrl)}
                                        ></div>
                                    )
                                })
                            }
                        </div>
                        <div className="flex items-end justify-between">
                            <div>
                                <p className="font-bold">Risol Mayo</p>
                                <p>Rp. 16.000</p>
                            </div>
                            <Button
                                color="primary"
                                variant="contained"
                            >
                                Sisa Stok 10
                            </Button>
                        </div>
                        <Button
                            variant="contained"
                            color="secondary"
                            className="mx-auto w-[60%] mt-10"
                        >
                            Tambah Pesanan
                        </Button>
                    </div>
                    <div className="product-description mt-10">
                        <h3 className="font-bold text-xl mb-3 capitalize">Deskripsi Produk</h3>
                        <p>Salah satu varian yang banyak digemari adalah risol mayo. Biasanya, isi risol mayo campuran antara mayonaise dengan sosis atau daging asap. Namun, kamu juga bisa menambahkan isian lain, seperti telur atau berbagai jenis sayuran.</p>
                    </div>
                    <div className="mt-5 flex items-start provider mx-auto w-full p-3 border rounded-lg">
                        <img src={Filafest} alt='filafest' className="w-[100px]" />
                        <div className="ml-5">
                            <h1 className="font-bold text-xl">Filafest</h1>
                            <p className="capitalize">official account dies natalis filkom UB</p>
                        </div>
                    </div>
                    <div className="my-5">
                        <h1 className="capitalize text-xl font-bold">masih fresh</h1>
                        <p className="text-[14px] mt-2">Masi seger nih, fresh dari oven 🤩</p>
                    </div>
                    <div className="w-full flex flex-wrap">
                        <CardProduct imageUrl="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                        <CardProduct imageUrl="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                        <CardProduct imageUrl="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                        <CardProduct imageUrl="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" />
                    </div>
                </div>
            </div>
        </UserLayout>
    );
}

export default DetailProduk;