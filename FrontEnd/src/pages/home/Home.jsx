import SideBar from "../../components/SideBar/SideBar"
import MessageContainer from "../../components/messages/MessageContainer"
import DesktopView from "../../components/viewLayOut/DesktopView"
import MobileView from "../../components/viewLayOut/MobileView"
import { useIsMobile } from "../../hooks/useIsMobile"

const home = () => {
  const isMobileView = useIsMobile()
  
  return (
    <div className="flex sm:h-[450px] md:h-[650px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      {isMobileView?<MobileView/>:<DesktopView/>}
    </div>
  )
}

export default home