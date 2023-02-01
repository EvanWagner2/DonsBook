function HeaderIcon({ Icon, active }) {
    return(
        <div className="flex items-center cursor-pointer md:px-10 sm:h-14 md:hover:bg-green-700 rounded-xl active:border-b-2 active:border-yellow-500 group">
        <Icon className={`h-5 text-center text-gray-500 sm:h-7 mx-auto group-hover:text-yellow-500" ${active && 'text-yellow-500'}`}></Icon>
        </div>
    )
}

export default HeaderIcon