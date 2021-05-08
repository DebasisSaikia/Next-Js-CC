// tracking-widest will add letter-spacing
// group will apply hover effect to whole container including the icons
const HeaderItem = ({ Icon, title }) => {
    return (
        <div className='group flex flex-col items-center cursor-pointer w-12 sm:w-20 hover:text-white'>
            <Icon className='logo mb-1 group-hover:animate-bounce' />
            <p className='tracking-widest opacity-0 group-hover:opacity-100'>{title}</p>
        </div>
    )
}

export default HeaderItem
