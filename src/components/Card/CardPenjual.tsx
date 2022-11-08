import React from "react";
import Filafest from "../../images/Product/detail/filafest.png";

interface Props {
    company: string,
    caption: string
}

const CardPenjual = ({company, caption}: Props) => {
    return (
        <div>
            <div className="mt-5 flex items-start provider mx-auto w-full p-3 border rounded-lg">
                <img src={Filafest} alt='filafest' className="w-[100px]" />
                <div className="ml-5">
                    <h1 className="font-bold text-xl">{company}</h1>
                    <p className="capitalize text-sm">{caption}</p>
                </div>
            </div>
        </div>
    );
}

export default CardPenjual;