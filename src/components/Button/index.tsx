import React from "react";
import Loading from "../../images/utils/loading.svg";

interface Props {
    children: React.ReactNode,
    color: "primary" | "secondary" | "black",
    disable?: boolean,
    variant?: "base" | "outlined" | "contained",
    className?: string,
    state?: "loading" | "success" | "error",
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({children, 
    color, 
    disable, 
    variant,
    className,
    state,
    onClick
}: Props) => {

    const checkButton = () => {
        let background = "";
        let border = "";
        let text = "";
        
        if(color === 'primary') {
            text = "text-white"

            if(variant === 'contained' || state === 'error' || state === 'loading')
                background = "bg-[#FFC529]"

            else if(variant === 'outlined') {
                border = "border-[1px] border-[#FFC529]"
                text = "text-[#FFC529]"
            }

            else
                text = "text-[#FFC529]"
        }
            
        if(color === 'secondary') {
            text = "text-white"

            if(variant === 'contained' || state === 'error' || state === 'loading')
                background = "bg-[#FE724C]"

            else if(variant === 'outlined') {
                border = "border-[1px] border-[#FE724C]"
                text = "text-[#FE724C]"
            }

            else
                text = "text-[#FE724C]"
        }

        else 
            text = "text-black"

        if(state === 'success') {
            background = 'bg-[#5CC689]'
            text = 'text-white'
            border = 'border-none'
        }

        return `${text} ${background} ${border}`;
    }

    return (
        <button 
        onClick={onClick}
        className={`${!disable ? 'hover:opacity-80' : 'cursor-not-allowed brightness-75'} flex items-center justify-center transition duration-200 ${state !== null ? 'rounded-full w-fit min-w-20' : 'rounded-full'} p-2 ${checkButton()} ` + className}
        disabled={disable}
        >
            {state === "loading" ? 
                <img src={Loading} alt="loading" className="w-8" /> :
            state === 'success' ? 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg> :
            state === 'error' ? 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
            </svg>
            : children}
        </button>
     );
}
 
export default Button;