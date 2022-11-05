interface Props {
    imageUrl?: string,
    className?: string
}

const CardProduct = ({ imageUrl, className }: Props) => {
    return (
        <div className="cursor-pointer transition duration-300 min-w-[180px] w-[180px] w-[48%] m-1 hover:shadow p-3 rounded border-[1px] border-gray-100">
            <div
                className={"bg-cover w-full min-h-[200px] " + className}
                style={{ backgroundImage: `url('${imageUrl}')` }}
            ></div>
            <div>
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