import { useIsMobile } from '../../hooks/useIsMobile'
import Conversations from './Conversations'
import LogOutButton from './LogOutButton'
import SearchInput from './SearchInput'

const SideBar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput/>
        <div className="divider px-3"></div>
         <Conversations/>
         <LogOutButton/>
         

    </div>
  ) 
}

export default SideBar