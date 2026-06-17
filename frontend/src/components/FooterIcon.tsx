import type { ReactNode } from "react"
import { IconBrandTwitterFilled } from '@tabler/icons-react';
import { IconBrandFacebookFilled } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';

interface Icon{
    icon: ReactNode;
    alt: string;
}

const icon : Icon[] = [
    {
        icon:<IconBrandTwitterFilled size={20} className="text-white"/>,
        alt:"icon twitter",
    },
    {
        icon:<IconBrandFacebookFilled size={20} className="text-white"/>,
        alt:"icon facebook",
    },
    {
        icon:<IconBrandInstagram size={20} className="text-white"/>,
        alt:"icon instagram",
    },
]

const FooterIcon = () => {
  return (
    <div className="flex flex-row mt-10 gap-2">
        {
            icon.map(({icon, alt}: Icon) => (
                <div key={alt} className="flex items-center justify-center size-8 rounded-full bg-blue-dark hover:bg-blue-light cursor-pointer">
                    {icon}
                </div>
            ))
        }
    </div>
  )
}

export default FooterIcon
