import Home from "../../images/bottom-navbar/home.svg";
import Product from "../../images/bottom-navbar/product.svg";
import Seller from "../../images/bottom-navbar/seller.svg";
import Transaction from "../../images/bottom-navbar/transaction.svg";
import Profile from "../../images/bottom-navbar/profile.svg";

const navbarData = [
    {
        name: 'Beranda',
        icon: Home,
        href: '/'
    },
    {
        name: 'Produk',
        icon: Product,
        href: '/product',
    },
    {
        name: 'Penjual',
        icon: Seller,
        href: '/seller',
    },
    {
        name: 'Transaksi',
        icon: Transaction,
        href: '/transaction',
    },
    {
        name: 'Profil',
        icon: Profile,
        href: '/profile',
    },
];

const BottomNavbar = () => {
    return ( 
        <div className="absolute z-40 bg-white bottom-0 w-full mx-auto flex justify-center border-t-[1px] border-gray-200">
            <div className="flex items-end justify-between w-full py-2 px-5">
                {
                    navbarData.map((data, index) => {
                        return(
                            <a
                            href={data.href}
                            key={index}
                            className={`hover:opacity-70 hover:border-b-orange-500 ${window.location.pathname === data.href && 'border-b-orange-500'} border-b-[3px] border-b-transparent transition duration-300 flex flex-col items-center text-orange-500`}>
                                <img className="mb-1 h-[22px]" src={data.icon} alt={data.name}></img>
                                <p className="mb-1">{data.name}</p>
                            </a>
                        );
                    })
                }
            </div>
        </div>
     );
}

export default BottomNavbar;