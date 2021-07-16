import { useSession } from 'next-auth/client'
import { ChevronDownIcon, ShoppingBagIcon, UserGroupIcon } from '@heroicons/react/outline'
import { CalendarIcon, ClockIcon, DesktopComputerIcon, UserIcon } from '@heroicons/react/solid'
import SidebarRow from './SidebarRow'

const Sidebar = () => {
    const [session, loading] = useSession()
    return (
        <div className="p-2  max-w-[600px] xl:min-w-[300px] bg-gray-100 h-[100vh]">
            <SidebarRow src={session.user.image} title={session.user.name} />
            <SidebarRow Icon={UserIcon} title='friends' />
            <SidebarRow Icon={UserGroupIcon} title='Groups' />
            <SidebarRow Icon={ClockIcon} title='Timeline' />
            <SidebarRow Icon={ShoppingBagIcon} title='Shop' />
            <SidebarRow Icon={DesktopComputerIcon} title='Advertising' />
        </div>
    )
}

export default Sidebar
