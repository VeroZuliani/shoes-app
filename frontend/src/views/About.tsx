import Button from '@/components/Button';
import OpinionAbout from '@/components/OpinionAbout';
import ProductAbout from '@/components/ProductAbout';
import { IconCircleNumber1Filled, IconCircleNumber2Filled, IconCircleNumber3Filled, IconCrop11Filled } from '@tabler/icons-react';

const About = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center">
        
        {/* ABOUT SPEAK */}
        <div className='grid grid-cols-1 lg:grid-cols-2 w-full px-6 lg:px-0'>
            
            <div className='lg:h-screen md:h-180 h-100'>
                <img src="/images/about_1.jpg" alt="" className='w-full h-full object-cover'/>
            </div>

            <div className='flex flex-col lg:h-screen overflow-hidden relative'>
                <div className='w-full h-full relative inset-0 bg-white z-10'>
                    <img src="/images/about_1.jpg" alt="" className='w-full h-full object-cover object-center overflow-hidden opacity-15 absolute z-0'/>
                
                    <div className='py-10 lg:pl-20 relative z-10 mx-10'>
                        <h1 className='text-gray-dark text-4xl lg:text-5xl font-semibold leading-none'>Spike: Stride in Style Comfotably.</h1>
                        <p className='text-gray-dark text-sm text-justify my-10 lg:mr-25'>At Spike, we're more than just a shoes reselling brand; we're curators of a style and quality. With a passion for footwear, we handpick each pair, ensuring every step you take is a stride in fashion-forward confidence.</p>
                        <Button text='Shop now!' styles='p-6 flex items-center w-37.5 justify-center'/>
                    </div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'>
                    <div className='h-62.5'>
                        <img src="/images/about_2.jpg" alt="" className='w-full h-full object-cover'/>
                    </div>
                    <div className='h-62.5'>
                        <img src="/images/about_3.jpg" alt="" className='w-full h-full object-cover'/>
                    </div>
                </div>
            </div>
        </div>

        {/* TICKER */}
        <div className='w-full mt-5 overflow-hidden'>
            <div className='flex flex-row items-center border-y-2 p-3 border-gray-medium mb-10 lg:mb-30'>
                <span className='uppercase font-medium text-gray-dark text-4xl mx-8'>spike</span>
                <IconCrop11Filled size={18} className='text-gray-medium shrink-0'/>
                <span className='uppercase font-medium text-gray-dark text-4xl mx-8'>spike</span>
                <IconCrop11Filled size={18} className='text-gray-medium shrink-0'/>
                <span className='uppercase font-medium text-gray-dark text-4xl mx-8'>spike</span>
                <IconCrop11Filled size={18} className='text-gray-medium shrink-0'/>
                <span className='uppercase font-medium text-gray-dark text-4xl mx-8'>spike</span>
                <IconCrop11Filled size={18} className='text-gray-medium shrink-0'/>
                <span className='uppercase font-medium text-gray-dark text-4xl mx-8'>spike</span>
                <IconCrop11Filled size={18} className='text-gray-medium shrink-0'/>
                <span className='uppercase font-medium text-gray-dark text-4xl mx-8'>spike</span>
                <IconCrop11Filled size={18} className='text-gray-medium shrink-0'/> 
            </div>
        </div>


        {/* WE OFFER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-10 py-16 lg:px-30 px-16">
           
           {/* Items */}
            <div>
                <div className="flex flex-col mb-10">
                    <h3 className="font-semibold text-base lg:text-lg mb-4">At Spike Shoes</h3>
                    <h2 className="font-medium text-4xl lg:text-6xl">We Offer :</h2>
                </div>

                {/* Item 1 */}
                <div className="flex flex-row gap-x-5 mb-10">
                    <div>
                        <IconCircleNumber1Filled size={50}/>
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <h3 className="font-semibold text-lg lg:text-xl mb-1 text-gray-dark">Top Notch Quality</h3>
                            <p className="font-normal text-gray-medium">At Spike we take pride in offering the finest footwear crafted with precision and dedication. Step into unmatched comfort, durability, and style.</p>
                        </div>
                    </div>
                </div>

                {/* Item 2 */}
                <div className="flex flex-row gap-x-5 mb-10">
                    <div>
                        <IconCircleNumber2Filled size={50}/>
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <h3 className="font-semibold text-lg lg:text-xl mb-1 text-gray-dark">Comfort and Support</h3>
                            <p className="font-normal text-gray-medium">Spike shoes redefine comfort with precision. Our designs seamlessly blend style and support, ensuring every step is a delight. Elevate your comfort with Spike.</p>
                        </div>
                    </div>
                </div>

                {/* Item 3 */}
                <div className="flex flex-row gap-x-5">
                    <div>
                        <IconCircleNumber3Filled size={50}/>
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <h3 className="font-semibold text-lg lg:text-xl mb-1 text-gray-dark">Style and Versatility</h3>
                            <p className="font-normal text-gray-medium">With trend-conscious designs, vibrant colors, and timeless patterns. Spike offers a diverse range that complements every taste. Elevate your style with the perfect pairs!!.</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Img */}
            <div className="w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
                
                <div className="relative w-110 h-115 lg:w-full">
                    <ProductAbout/>

                    <div className='absolute bottom-16 lg:right-0 -right-20 z-20'>   
                        <OpinionAbout/>
                    </div>
                </div>

            </div>


        </div>

        

    </section>
  )
}

export default About
