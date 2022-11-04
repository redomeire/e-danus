import ShopCart from "../../images/top-navbar/shop-cart.svg";
import Notification from "../../images/top-navbar/notification.svg";

const TopSearchBar = () => {
    return (
        <div
            className="absolute z-40 bg-white top-0 w-full mx-auto flex items-center justify-between border-b-[1px] border-gray-200 p-2">
            <form className="w-4/6">
                <div className="relative">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-[8px] left-[10px]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <input
                        className="rounded-full p-2 pl-10 w-full outline-none ring-1 ring-gray-200 focus:ring-orange-200"
                        placeholder="Cari Danusan Apa?" />
                </div>
            </form>
            <div className="w-1/5 flex justify-around">
                <button className="hover:opacity-60 transition duration-300">
                    <img src={ShopCart} alt="shopcart" className="w-[25px]" />
                </button>
                <button className="hover:opacity-60 transition duration-300">
                    <img src={Notification} alt="notification" className="w-[23px]" />
                </button>
            </div>
        </div>
    );
}

export default TopSearchBar;