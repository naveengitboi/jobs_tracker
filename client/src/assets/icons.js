import { MdOutlineDashboardCustomize, MdOutlineSettings, MdLogout, MdOutlineLogin, MdOutlineLocationOn, MdAddLink, MdGesture, MdOutlineContentCopy, MdOutlinePermPhoneMsg, MdOutlineCloudUpload, MdOutlineLink, MdWorkOutline, MdOutlineEditCalendar, MdOutlineAttachMoney, MdOutlineDelete } from "react-icons/md";
import { GrTemplate, GrAdd } from "react-icons/gr";
import { FaRegUser, FaRegPaperPlane, FaAppStore } from "react-icons/fa";
import { CiEdit, CiLinkedin, CiCircleInfo, CiFilter, CiSearch, CiCalendar } from "react-icons/ci";
import { LuGithub, LuLoaderCircle, LuMessageSquareOff, LuGraduationCap } from "react-icons/lu";
import { TbCircleDottedLetterJ, TbTemplate,TbArrowBackUp, TbClockQuestion } from "react-icons/tb";
import { RiUserSmileLine } from "react-icons/ri";
import { GoCodespaces, GoLinkExternal } from "react-icons/go";
import { SiConcourse, SiHoneybadger } from "react-icons/si";
import { GiCobweb } from "react-icons/gi";
const icons = {
    'nav': {
        'jblogo': MdGesture,
        'dashboard': MdOutlineDashboardCustomize,
        'application': FaRegPaperPlane,
        'user': FaRegUser,
        'template': GrTemplate,
        'settings': MdOutlineSettings,
        'jobsites': FaAppStore,
    },
    "socails": {
        'github': LuGithub,
        'linkedin': CiLinkedin
    },
    "status": {
        "progress": LuLoaderCircle,
        "rejected": LuMessageSquareOff,
        "accepted": SiHoneybadger
    },
    'user': {
        "link": MdAddLink,
        "location": MdOutlineLocationOn,
        "logout": MdLogout,
        "login": MdOutlineLogin,
        'about': RiUserSmileLine,
        'externalLinks': GoLinkExternal,
        'contact': MdOutlinePermPhoneMsg,
        'skills': SiConcourse,
        'graduation': LuGraduationCap,
    },
    'general': {
        'edit': CiEdit,
        'calender': MdOutlineEditCalendar,
        'filter': CiFilter,
        'search': CiSearch,
        'copy': MdOutlineContentCopy,
        "info": CiCircleInfo,
        "add": GrAdd,
        "upload":MdOutlineCloudUpload,
        "back": TbArrowBackUp,
        "work":MdWorkOutline,
        "weblink": MdOutlineLink,
        "portal":GiCobweb,
        "jobType": TbClockQuestion,
        "money":MdOutlineAttachMoney,
        "role":GoCodespaces,
        "delete":MdOutlineDelete
    }


};


export default icons;