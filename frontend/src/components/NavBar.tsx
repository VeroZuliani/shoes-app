import { useState } from "react"
import LinkNav from "./LinkNav"
import { IconUser, IconX, IconMenu2 } from '@tabler/icons-react';
import { motion } from "motion/react";
import { useLocation, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


interface LinkData{
    text: string;
    href: string;
}

const link : LinkData[] = [
    {
        href:"#home",
        text:"Home"    
    },
    {
        href:"#about",
        text:"About us"
    },
    {
        href:"#products",
        text:"Products"
    },
    {
        href:"#testimonials",
        text:"Testimonials"
    },
    {
        href:"#contact",
        text:"Contact us"
    },
    {
        href:"#faq",
        text:"FAQ"
    },
]


const NavBar = () => {

    // Estado para menú collapse
    const [isOpen, setIsOpen] = useState(false)

    const toogleNavBar = () => {
        setIsOpen(!isOpen)
    }

    const location = useLocation()
    const { t, i18n } = useTranslation()

    // Detectar idioma actual
    const currentLanguage = i18n.language?.slice(0,2) || 'en'

    // Cambiar de idioma
    const changeLanguage = (lang: string) => {
        i18n.changeLanguage(lang)
    }


  return (
    <header className="w-full items-center relative z-50">
        <div className="flex w-full justify-between relative h-20">
            <a href="/" className="z-0 flex items-center">
                <img src="/images/logo.png" alt="" className="w-full"/>
            </a>

            {/* isOpen es true: se muestra (flex), si es false: se esconde (hidden) */}
            <nav className={`flex lg:items-center mx-auto lg:gap-16 flex-col lg:flex-row lg:static absolute top-5 -right-1 -z-10 lg:z-10 lg:shadow-none shadow p-10 bg-white border border-gray-light rounded-md lg:border-none
                ${isOpen ? "flex" : "hidden"} lg:flex`}
            >
                <ul className="flex gap-6 flex-col lg:flex-row">
                    {link.map(( {href, text}: LinkData)=>(
                        <LinkNav
                            key={text}
                            href={href}
                            text={t(text)}
                        />
                    ))}
                </ul>

                {/* Login e Idioma */}
                <div className="flex items-center gap-3 lg:gap-1 mt-5 lg:mt-0">
                    <Link to="/login" state={{bgLocation: location}} className="lg:mx-4 lg:m-0" onClick={toogleNavBar}>
                        <IconUser stroke={1} />
                    </Link>

                    {/* Selector de Idiomas: EN/ES */}
                    <div className="flex items-center">
                        <button 
                            onClick={() => changeLanguage('en')}
                            className={`text-[12px] md:text-[14px] cursor-pointer transition-colors ${
                                currentLanguage === 'en' ? 'font-semibold text-gray-dark underline' : 'text-gray-medium hover:text-gray-dark'
                            }`}
                        >
                            EN
                        </button>
                        <span className="text-gray-dark px-1">|</span>
                        <button 
                            onClick={() => changeLanguage('es')}
                            className={`text-[12px] md:text-[14px] cursor-pointer transition-colors ${
                                currentLanguage === 'es' ? 'font-semibold text-gray-dark underline' : 'text-gray-medium hover:text-gray-dark'
                            }`}
                        >
                            ES
                        </button>
                    </div>
                </div>  
            </nav>

            {/* Boton Hamburguesa visible en Mobile */}
            {/* Si está abierto muestra una cruz, si está cerrado muestra la hamburguesa tradicional */}
            <motion.button className="lg:hidden flex items-center justify-center bg-transparent" 
            onClick={toogleNavBar}
            type="button"
            whileTap={{ scale: 0.9 }}
            >
                {isOpen ? 
                    <IconX stroke={2} size={28}/>
                    : 
                    <IconMenu2 stroke={2} size={28}/>
                }
            </motion.button>

        </div>
    </header>
  )
}

export default NavBar