import React from "react";
import Button from ".";
import { Link, animateScroll } from "react-scroll";

const ScrollTop = () => {

    const handleClick = () => {
        animateScroll.scrollToTop({
            containerId: 'top'
        })
    }

    return (
        <div
            className={`absolute right-5 bottom-24`}
        >
            <Link to="top" >
                <Button
                    color="secondary"
                    variant="contained"
                    onClick={handleClick}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                </Button>
            </Link>
        </div>
    );
}

export default ScrollTop;