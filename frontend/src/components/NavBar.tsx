import { useState } from "react"
import Link from "./Link"

interface LinkData{
    text: string;
    href: string;

}

const link : LinkData[] = [
    {
        href:"/",
        text:"Home"    
    },
    {
        href:"/about",
        text:"About us"
    },
    {
        href:"/products",
        text:"Products"
    },
    {
        href:"/testimonials",
        text:"Testimonials"
    },
    {
        href:"/contact",
        text:"Contact us"
    },
    {
        href:"/faq",
        text:"FAQ"
    },
]


const NavBar = () => {

    // Estado para menú collapse
    const [isOpen, setIsOpen] = useState(false)

    const toogleNavBar = () => {
        setIsOpen(!isOpen)
    }

  return (
    <header className="w-full items-center">
        <div className="flex w-full px-4 lg:px-30 justify-between relative h-20">
            <a href="/" className="z-50 flex items-center">
                <img src="https://placehold.co/150x60?text=SPIKE" alt="" />
            </a>

            {/* isOpen es true: se muestra (flex), si es false: se esconde (hidden) */}
            <nav className={`flex lg:items-center mx-auto lg:gap-16 flex-col lg:flex-row lg:static absolute top-5 right-15 lg:shadow-none shadow p-10 bg-white border border-gray-light rounded-md lg:border-none
                ${isOpen ? "flex" : "hidden"} lg:flex `}
            >
                <ul className="flex gap-6 flex-col lg:flex-row">
                    {link.map(( {href, text}: LinkData)=>(
                        <Link 
                            key={text}
                            href={href}
                            text={text}
                        />
                    ))}
                </ul>

                <div className="flex">
                    <a href="/login" className="lg:mx-4 mt-5 lg:m-0" onClick={toogleNavBar}>
                        <img src="https://placehold.co/32?text=LOGIN" alt="" />
                    </a>
                </div>  
            </nav>

            {/* Boton Hamburguesa visible en Mobile */}
            {/* Si está abierto muestra una cruz, si está cerrado muestra la hamburguesa tradicional */}
            <button className="lg:hidden flex items-start mt-5" onClick={toogleNavBar}>
                {isOpen ? 
                    <img src="https://placehold.co/32?text=x" alt="" /> 
                    : 
                    <img src="https://placehold.co/32?text='☰'" alt="" /> 
                }
            </button>

        </div>
    </header>
  )
}

export default NavBar