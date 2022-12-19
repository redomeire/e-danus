import React from "react";
import Filafest from "../../images/Product/detail/filafest.png";

interface Props {
    company: string,
    caption: string,
    className?: string,
    children?: React.ReactNode
}

const CardPenjual = ({
    company, 
    caption, 
    className,
    children
}: Props) => {
    return (
        <div className="p-3 border rounded-lg my-5">
            <div className={`mt-5 flex items-start provider mx-auto w-full rounded-lg  ${className}`}>
                <img src={Filafest} alt='filafest' className="w-[100px]" />
                <div className="ml-5">
                    <h1 className="font-bold text-xl">{company}</h1>
                    <p className="capitalize text-sm">{caption}</p>
                </div>
            </div>
            <div className="mt-2">
                {children}
            </div>
        </div>
    );
}

export default CardPenjual;