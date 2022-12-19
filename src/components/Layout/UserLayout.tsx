import React from "react";
import BottomNavbar from "../BottomNavbar.tsx";
import ScrollTop from "../Button/ScrollTop";
import TopSearchBar from "../TopSearchBar";

interface Props {
    children?: React.ReactNode
}

const UserLayout = ({ children }: Props) => {
    const [appear, setAppear] = React.useState(false);
    const divRef = React.useRef(null);

    const handleScroll = (ev: any) => {
        let scrollTop = ev.target.scrollTop
        if(scrollTop > 200)
            setAppear(true);

            else setAppear(false);
    }

    // const handleClick = () => {
    //     const div = document.getElementById('top')
    //     if(div !== null)
    //         div.scrollTop = 0;
    // }

    return (
        <div className="bg-gray-100 w-full flex justify-center items-center">
            <div className="w-[500px] bg-white min-h-screen flex justify-center relative">
                <TopSearchBar />
                <div id="top" ref={divRef} className="px-5 w-full py-24 h-screen overflow-auto" onScroll={handleScroll}>
                    {children}
                </div>
                { appear && <ScrollTop /> }
                <BottomNavbar />
            </div>
        </div>
    );
}

export default UserLayout;