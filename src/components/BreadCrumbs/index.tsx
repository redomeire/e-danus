import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

interface Props {
    content: string,
}

const BreadCrumbs = ({content} : Props) => {
    const navigate = useNavigate();

    return (
        <div>
            <div className="flex items-center">
                <Button 
                color="black"
                variant="base"
                onClick={() => navigate(-1)}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                </Button>
                <h1 className="capitalize text-xl font-bold ml-2">{content}</h1>
            </div>
        </div>
    );
}

export default BreadCrumbs;