import Image from "next/image"
const SidebarRow = ({ src, Icon, title }) => {
    return (
        <div className="flex items-center space-x-4">
            {src && <Image alt="user-image" width={30} height={30} layout="fixed" src={src} className="rounded-full" />}
            {Icon && (<Icon className="h-8 w-8 text-blue-500 cursor-pointer" />)}

            <p className="hidden md:inline-flex">{title}</p>
        </div>
    )
}

export default SidebarRow
