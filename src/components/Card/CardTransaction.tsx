import Food from "../../images/Home/slider-1.png"
import Button from "../Button";

interface Props {
    type?: string
}

const CardTransaction = ({type} : Props) => {
    return ( 
        <div className="rounded-lg bg-yellow-200 p-3 my-3 transition duration-200">
            <div className="flex items-start">
                <img src={Food} alt="food" className="rounded-lg min-w-[140px] w-[140px]" />
                <div className="ml-5">
                    <h2 className="capitalize text-xl font-bold">risol mayo</h2>
                    <p className="text-md">Jumlah barang : 1</p>
                    <p className="capitalize font-semibold">filafest</p>
                </div>
            </div>
            <div className="flex items-center justify-between mt-3">
                <div>
                    <p className="capitalize">total harga</p>
                    <p className="capitalize font-bold">Rp. 8.000</p>
                </div>
                <Button
                color="primary"
                variant="contained"
                style={{color: 'black'}}
                >
                    Lihat Produk
                </Button>
            </div>
            {type}
        </div>
     );
}
 
export default CardTransaction;