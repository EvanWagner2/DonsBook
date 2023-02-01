import Image from "next/image";
import { 
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    UserGroupIcon,
    ViewGridIcon,
    } from "@heroicons/react/solid";
import{
    FlagIcon,
    HomeIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
    TicketIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
function Header(){
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
        {/* Left */}
            <div className="flex items-center">
            <h1>Dons<span>Book</span></h1>
            <Image src="https://cdn.bleacherreport.net/images/team_logos/328x328/san_francisco_dons_basketball.png" width={40} height={40} layout="fixed"/> 
            <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
            <SearchIcon className="h-6 text-gray-600"></SearchIcon>
            <input className="hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search DonBook"></input>
             </div>
            </div>
            {/* Center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-7 md:space-x-2">
                    <HeaderIcon active Icon={HomeIcon}></HeaderIcon>
                    <HeaderIcon Icon={FlagIcon}></HeaderIcon>
                    <HeaderIcon Icon={PlayIcon}></HeaderIcon>
                    <HeaderIcon Icon={TicketIcon}></HeaderIcon>
                    <HeaderIcon Icon={UserGroupIcon}></HeaderIcon>
                </div>
            </div>
            {/* Right */}
            <div className="flex items-center sm:space-x-2 justify-end">
            {/* Profile Pic */}
            <p className="whitespace-nowrap font-semibold pr-3">Evan Wagner</p>
            <ViewGridIcon className="icon"></ViewGridIcon>
            <ChatIcon className="icon"></ChatIcon>
            <BellIcon className="icon"></BellIcon>
            <ChevronDownIcon className="icon"></ChevronDownIcon>
            </div>
        </div>
    );
}
export default Header;


