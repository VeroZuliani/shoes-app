import { IconChevronDown } from "@tabler/icons-react"
import Brands from "../components/Brands"
import Button from "../components/Button"
import Shoes from "../components/Shoes"
import NavBar from "@/components/NavBar"
import { AnimatePresence, motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next";


//Defino lista de shoes 
const shoesList = [
    { id:0, src:"/images/shoes.png", alt:"Shoes Principal" },
    { id:1, src:"/images/shoes1.png", alt:"Shoes 1" },
    { id:2, src:"/images/shoes2.png", alt:"Shoes 2" },
    { id:3, src:"/images/shoes3.png", alt:"Shoes 3" },
]



const Hero = () => {

    const { t } = useTranslation()

    const brands = useRef<HTMLDivElement>(null)

    // Manejar el scroll fluido hacia Brands
    const handleScroll = () => {
        if(brands.current){
            brands.current.scrollIntoView({ behavior: 'smooth'})
        }
    }

    //Determinar que shoes está en foco principal
    const [indexPrincipal, setIndexPrincipal] = useState(0)

    //Rotar automáticamente cada 3.5s
    useEffect(() => {
        const interval = setInterval(() => {
            setIndexPrincipal((prevIndex) => (prevIndex +1) % shoesList.length)
        }, 3500)

        return () => clearInterval(interval);
    }, [])
    
    // Filtrar shoes para obtener SOLO las 3 que no están en el foco principal
    const secondaryShoes = shoesList.filter((_, index) => index !== indexPrincipal);


  return (
    
    <section id="home" className="w-full min-h-screen px-4 lg:px-30 relative z-10 overflow-hidden flex flex-col">
        
        <NavBar/>

        {/* Arco Adidas */}
        <div className="absolute -z-10 bg-gray-dark rounded-l-full flex items-center justify-end overflow-hidden  
                        w-[95vw] h-[130vw] top-1/2 left-1/2 translate-x-5 -translate-y-1/2 mt-50
                        md:w-[55vw] md:h-[106vw] md:top-1/2 md:left-1/2 md:translate-x-12 md:-translate-y-1/2
                        lg:w-[35vw] lg:h-[75vw] lg:top-0 lg:bottom-auto lg:right-0 lg:left-auto lg:translate-x-30 lg:translate-y-0 lg:mt-0">

            <h1 className="uppercase text-white font-extrabold w-min h-auto inline-block 
                        -rotate-90 origin-right translate-x-0
                        absolute top-0 translate-y-0
                        text-[25vw] right-[60vw]
                        md:text-[10rem] md:right-[19vw] 
                        lg:text-[9.5rem] lg:right-[17vw] 
                        xl:text-[10rem]">
                adidas
            </h1>
        </div>


       {/* Contenido Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 z-10 mt-15">

            {/* Col. Izq: Texto y Btn */}
            <div className="flex flex-col lg:pr-15 items-center lg:items-stretch">
                <h1 className="text-black font-medium text-5xl lg:text-[3rem] max-w-100 lg:w-full lg:leading-13 ">
                    {t('hero.title')}
                </h1>
                <p className="text-gray-medium mt-10 mb-18 text-md lg:text-base leading-6 max-w-100 lg:w-full">
                    {t('hero.description')}
                </p>

                {/* Btn y flecha de scroll*/}
                <div className="flex flex-col items-center w-37.5 ">
                    <Button text={t('hero.button')} styles="w-37.5"/>
                    
                    <motion.button type="button" className="mt-3 cursor-pointer" 
                    onClick={handleScroll}
                    animate={{y: [0,10,0]}}
                    transition={{duration: 2, repeat: Infinity}}
                    >
                        <div className="flex flex-col items-center">
                            <IconChevronDown stroke={1.2} size={40} className="text-gray-dark"/>
                            <IconChevronDown stroke={1.2} size={40} className="-mt-6 text-gray-dark"/>
                            <IconChevronDown stroke={1.2} size={40} className="-mt-6 text-gray-dark"/>
                        </div>
                    </motion.button>
                </div>
            </div>

            {/* Col. Der: Shoes */}
            <div className="w-full z-0 flex flex-col items-center h-[60vh] md:h-[80vh] lg:h-full justify-center">
                
                <AnimatePresence mode="wait">
                    <motion.div
                        key={shoesList[indexPrincipal].id}
                        initial={{ opacity: 0, scale: 0.85, rotate: 15 }}
                        animate={{ opacity: 1, scale: 1, rotate: 25 }}
                        exit={{ opacity: 0, scale: 0.85, rotate: 30 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                        <Shoes 
                        src={shoesList[indexPrincipal].src} 
                        alt={shoesList[indexPrincipal].alt}
                        style="size-65 md:size-140 lg:size-120 mt-10 lg:-mt-30" />
                        </motion.div>
                </AnimatePresence>

                <div className="flex flex-row items-center gap-2 -mt-5 lg:-mt-10 -mx-15 mr-15 lg:mr-20s">
                    <AnimatePresence mode="popLayout">
                        {secondaryShoes.map((shoes) => (
                            <motion.div
                                key={shoes.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center"
                            >
                                <Shoes 
                                src={shoes.src} 
                                alt={shoes.alt} 
                                style="size-15 md:size-30 lg:size-26"
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

        </div>

        {/* Brands */}
        <div ref={brands} className="w-full flex items-center justify-center flex-col mb-20">
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-dark">{t('hero.brands.title')}</h3>
            <p className="text-gray-medium mt-2 mb-8 text-sm text-center lg:text-lg">{t('hero.brands.subtitle')}</p>
            <div className="flex lg:flex-row flex-wrap justify-center">
                <Brands src="/images/brand/brand1.png" alt="nike"/>
                <Brands src="/images/brand/brand2.png" alt="adidas"/>
                <Brands src="/images/brand/brand3.png" alt="under_amor"/>
                <Brands src="/images/brand/brand4.png" alt="puma"/>
                <Brands src="/images/brand/brand5.png" alt="the_north_face"/>
                <Brands src="/images/brand/brand6.png" alt="converse"/>
                <Brands src="/images/brand/brand7.png" alt="markalar"/>
            </div>
        </div>

    </section>

  )
}

export default Hero
