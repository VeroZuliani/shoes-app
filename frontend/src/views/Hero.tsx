import { IconChevronDown } from "@tabler/icons-react"
import Brands from "../components/Brands"
import Button from "../components/Button"
import Shoes from "../components/Shoes"
import NavBar from "@/components/NavBar"


const Hero = () => {
  return (
    
    <section className="w-full min-h-screen px-4 lg:px-30 relative z-10 overflow-hidden flex flex-col">
        
        <NavBar/>

        {/* Arco Adidas */}
        <div className="w-100 h-lvh lg:h-[115vh] bg-gray-dark rounded-l-full absolute bottom-35 lg:-top-3 -right-30 -z-10 overflow-hidden">
            <h1 className="uppercase -rotate-90 text-white font-extrabold text-[9rem] lg:text-[9.5rem] absolute top-55 lg:top-65 -right-30 lg:-left-10"
            >adidas</h1>
        </div>
        

       {/* Contenido Principal */}
        <div className="grid lg:grid-cols-2 gap-0 z-10 mt-15">

            {/* Col. Izq: Texto y Btn */}
            <div className="flex flex-col lg:pr-15 items-center lg:items-stretch">
                <h1 className="text-black font-medium text-5xl lg:text-[3rem] max-w-100 lg:w-full lg:leading-13 ">
                    The journey begins with the perfect pair
                </h1>
                <p className="text-gray-medium mt-10 mb-18 text-md lg:text-base leading-6 max-w-100 lg:w-full">
                    Discover unparalleled style and unmatched comfort with Spike. Our meticulously crafted shoes redefine fashion, ensuring every step you take is a statement. Elevate your footwear game
                </p>

                {/* Btn y flecha de scroll*/}
                <div className="flex flex-col items-center w-37.5 ">
                    <Button text="Get Started" styles="w-37.5"
                    />
                    <a href="" className="mt-3">
                        <div className="flex flex-col items-center">
                            <IconChevronDown stroke={1.2} size={40} className="text-gray-dark"/>
                            <IconChevronDown stroke={1.2} size={40} className="-mt-6 text-gray-dark"/>
                            <IconChevronDown stroke={1.2} size={40} className="-mt-6 text-gray-dark"/>
                        </div>
                    </a>
                </div>
            </div>

            {/* Col. Der: Shoes */}
            <div className="w-full z-0 flex flex-col items-center h-lvh lg:h-full">
                <Shoes src="/images/shoes.png" alt="Shoes Principal" style="size-110 lg:size-130 transform rotate-25 mt-10 lg:-mt-30" />


                <div className="flex flex-row items-center gap-2 -mt-5 lg:-mt-20 -mx-15 mr-15 lg:mr-20">
                    <Shoes src="/images/shoes1.png" alt="Shoes 1" style="size-25 lg:size-28"/>
                    <Shoes src="/images/shoes2.png" alt="Shoes 2" style="size-25 lg:size-28"/>
                    <Shoes src="/images/shoes3.png" alt="Shoes 3" style="size-25 lg:size-28"/>
                </div>
            </div>

        </div>

        {/* Brands */}
        <div className="w-full flex items-center justify-center flex-col mb-20">
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-dark">Top Brands</h3>
            <p className="text-gray-medium mt-2 mb-8 text-sm lg:text-lg">Find your Dream Shoe Pair From 5000+ Collections</p>
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
