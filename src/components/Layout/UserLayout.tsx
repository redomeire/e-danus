import BottomNavbar from "../BottomNavbar.tsx";
import TopSearchBar from "../TopSearchBar";

interface Props {
    children?: React.ReactNode
}

const UserLayout = ({ children }: Props) => {
    return (
        <div className="bg-gray-100 w-full flex justify-center items-center">
            <div className="w-[500px] bg-white min-h-screen flex justify-center relative">
                <TopSearchBar />
                <div className="px-5 w-full py-20 h-screen overflow-auto">
                    {children}
                </div>
                <BottomNavbar />
            </div>
        </div>
    );
}

export default UserLayout;