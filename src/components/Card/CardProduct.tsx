interface Props {
    imageUrl?: string,
    className?: string
}

const CardProduct = ({ imageUrl, className }: Props) => {
    return (
        <div className="cursor-pointer transition duration-300 min-w-[180px] sm:w-[46%] w-full m-2 hover:shadow-lg rounded-xl border-[1px] border-gray-100">
            <div
                className={"sm:block hidden bg-cover bg-center w-full min-h-[200px] " + className}
                style={{ backgroundImage: `url('${imageUrl}')` }}
            ></div>
            <img
            alt="product"
            className={"sm:hidden block bg-cover bg-center w-full min-h-[200px] " + className}
            src={imageUrl}
            ></img>
            <div className="p-2">
                <h3 className="font-bold my-2">Risol Mayo</h3>
                <div className="flex items-center justify-between">
                    <p>Rp 16.000</p>
                    <button className="text-xs capitalize rounded-full p-1 px-2 bg-yellow-100 text-orange-500">Sisa Stok 10</button>
                </div>
            </div>
        </div>
    );
}

export default CardProduct;