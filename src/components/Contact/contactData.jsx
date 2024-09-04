import { IoIosMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

const contactData = [
    {
        id: 1,
        icon: <IoIosMail />,
        data: 'menna1986@live.com',
        link: 'mailto:menna1986@gmail.com'
    },
    {
        id: 2,
        icon: <FaPhoneVolume />,
        data: +201008878175,
        link: 'tel:+201008878175'
    },
    {
        id: 3,
        icon: <FaLocationDot />,
        data: 'New Cairo, Cairo, Egypt'
    },
]

export default contactData;
