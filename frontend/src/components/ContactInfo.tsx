import type { ReactNode } from "react";

interface Props{
    title: string;
    value: string;
    icon: ReactNode;
}

const ContactInfo = ({title, value, icon}: Props) => {
  return (
    <div className="flex flex-row items-center mb-10">
        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full mr-5 bg-black flex items-center justify-center">
            {icon} 
        </div>
        <div className="flex flex-col">
            <h3 className="text-gray-dark font-semibold text-sm lg:text-lg">{title}</h3>
            <p className="text-gray-medium text-sm lg:text-lg">{value}</p>
        </div>
    </div>
  )
}

export default ContactInfo
