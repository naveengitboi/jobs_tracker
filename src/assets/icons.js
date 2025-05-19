import { MdOutlineDashboardCustomize, MdOutlineSettings, MdLogout, MdOutlineLogin,MdOutlineLocationOn, MdAddLink, MdGesture } from "react-icons/md";
import { GrTemplate, GrAdd} from "react-icons/gr";
import { FaRegUser ,FaRegPaperPlane , FaAppStore} from "react-icons/fa";
import { CiEdit , CiLinkedin, CiCircleInfo, CiFilter,CiSearch,CiCalendar} from "react-icons/ci";
import { LuGithub, LuLoaderCircle,LuMessageSquareOff} from "react-icons/lu";
import { TbCircleDottedLetterJ } from "react-icons/tb";

import { SiHoneybadger } from "react-icons/si";
const icons = {
    'jblogo':MdGesture ,
    'dashboard': MdOutlineDashboardCustomize,
    'application':FaRegPaperPlane,
    'user':FaRegUser,
    'template': GrTemplate,
    'settings':MdOutlineSettings,
    'edit':CiEdit,
    'jobsites':FaAppStore,
    "socails":{
        'github': LuGithub,
        'linkedin': CiLinkedin
    },
    "info":CiCircleInfo,
    "location":MdOutlineLocationOn,
    "link": MdAddLink,
    "logout": MdLogout,
    "login":MdOutlineLogin,
    "add":GrAdd,
    "status": {
        "progress": LuLoaderCircle,
        "rejected": LuMessageSquareOff,
        "accepted":SiHoneybadger
    },
    'calender':CiCalendar,
    'filter': CiFilter,
    'search':CiSearch
    
};


export default icons;