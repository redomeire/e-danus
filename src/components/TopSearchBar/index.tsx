import ShopCart from "../../images/top-navbar/shop-cart.svg";
import Notification from "../../images/top-navbar/notification.svg";
import Input from "../Input";

const TopSearchBar = () => {
    return (
        <div
            className="absolute z-40 bg-white top-0 w-full mx-auto flex items-center justify-between border-b-[1px] border-gray-200 p-2 py-5">
            <form className="w-4/6">
                <Input
                    beginningIcon={
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    }
                    placeholder="Cari Danusan Apa?"
                    className="w-full"
                    required
                />
            </form>
            <div className="w-1/5 flex justify-around">
                <button className="hover:opacity-60 hover:rotate-12 transition duration-300">
                    <img src={ShopCart} alt="shopcart" className="w-[25px]" />
                </button>
                <button className="hover:opacity-60 hover:rotate-12 transition duration-300">
                    <img src={Notification} alt="notification" className="w-[23px]" />
                </button>
            </div>
        </div>
    );
}

export default TopSearchBar;