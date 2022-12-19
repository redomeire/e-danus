import React from "react";

interface Props {
    required?: boolean,
    className?: string,
    placeholder?: string,
    beginningIcon?: React.ReactNode
    endIcon?: React.ReactNode,
    state?: "error" | "success",
    disabled? : boolean
}

const Input = ({
    required, 
    className, 
    placeholder, 
    beginningIcon, 
    endIcon,
    state,
    disabled
} : Props) => {

    const checkInput = () => {
        let bg = "";
        let ring = "";

        if(state === "success")
            ring = "ring-[#5CC689]"

            else if(state === "error")
            ring = "ring-[#EE7D52]"

            else ring="ring-[#B3ABBC]"

            if(disabled)
                bg="bg-[#5CC689]"

            return `${bg} ${ring}`;
    }

    return (
        <div className="relative w-full">
            <span className="absolute left-[10px] top-[5px]">{beginningIcon}</span>
            <input 
                required={required}
                className={ `${beginningIcon && 'pl-10'} ${endIcon && 'pr-10'} ${checkInput()} rounded-full p-2 ring-[1px] outline-none text-sm focus:ring-black ` + className}
                placeholder={placeholder}
            />
            <span className={`absolute right-[10px] top-[5px] ${state === 'error' ? 'text-[#EE7D52]' : state === 'success' ? 'text-[#5CC689]' : ''}`}>{endIcon}</span>
        </div>
     );
}
 
export default Input;