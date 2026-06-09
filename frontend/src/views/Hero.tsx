import Brands from "../components/Brands"
import Button from "../components/Button"
import Shoes from "../components/Shoes"


const Hero = () => {
  return (
    
    <section className="w-full min-h-screen mt-8">
        
        <div className="w-[20rem] h-full bg-gray-dark rounded-l-full absolute top-0 right-0 z-0 overflow-hidden">
            <h1 className="uppercase -rotate-90 text-white font-extrabold text-[6rem] lg:text-[8.75rem] absolute top-55 -left-3.5 overflow-hidden"
            >adidas</h1>
        </div>

       
        <div className="grid lg:grid-cols-2 gap-40 lg:gap-2 lg:px-30 z-10 ">

            <div className="flex flex-col pr-15">
                <h1 className="text-black font-medium text-6xl">
                    The journey begins with the perfect pair
                </h1>
                <p className="text-gray-medium mt-8 mb-15 text-xl leading-6">
                    Discover unparalleled style and unmatched comfort with Spike. Our meticulously crafted shoes redefine fashion, ensuring every step you take is a statement. Elevate your footwear game
                </p>
                <div className="flex flex-col items-center w-37.5 ">
                    <Button text="Get Started" styles="w-37.5"
                    />
                    <a href="" className="mt-3">
                        <img src="https://placehold.co/50x60?" alt="" /> 
                    </a>
                </div>
            </div>

            <div className=" z-0">
                <div className="w-150 h-84 mb-5 transform rotate-25">
                    <Shoes src="" alt="Shoes Principal"/>
                </div>

                <div className="flex gap-4 ml-5">
                    <div className="w-26 h-15">
                        <Shoes src="" alt="Shoes 1"/>
                    </div>
                    <div className="w-26 h-15">
                        <Shoes src="" alt="Shoes 2"/>
                    </div>
                    <div className="w-26 h-15">
                        <Shoes src="" alt="Shoes 3"/>
                    </div>
                </div>

            </div>

        </div>

        
        <div className="absolute -bottom-50 left-0 w-full flex items-center justify-center flex-col">
            <h3 className="text-3xl font-semibold text-gray-dark">Top Brands</h3>
            <p className="text-gray-medium mt-2 mb-8">Find your Dream Shoe Pair From 5000+ Collections</p>
            <div className="flex flex-row gap-13">
                <Brands src="" alt="nike"/>
                <Brands src="" alt="adidas"/>
                <Brands src="" alt="under_amor"/>
                <Brands src="" alt="puma"/>
                <Brands src="" alt="the_north_face"/>
                <Brands src="" alt="converse"/>
                <Brands src="" alt="markalar"/>
            </div>
        </div>

    </section>
  )
}

export default Hero
