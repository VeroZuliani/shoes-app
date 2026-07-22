import Button from '@/components/Button';
import OpinionAbout from '@/components/OpinionAbout';
import ProductAbout from '@/components/ProductAbout';
import { IconCircleNumber1Filled, IconCircleNumber2Filled, IconCircleNumber3Filled, IconCrop11Filled } from '@tabler/icons-react';
import { motion } from "motion/react"
import { useTranslation } from "react-i18next";


const About = () => {

    const { t } = useTranslation()

    const items = Array.from({ length:8 })

  return (
    <section id='about' className="w-full min-h-screen flex flex-col items-center">
        
        {/* ABOUT SPEAK */}
        <div className='grid grid-cols-1 lg:grid-cols-2 w-full px-6 lg:px-0 '>
            
            <div className='lg:h-screen md:h-180 h-100'>
                <img src="/images/about_1.jpg" alt="" className='w-full h-full object-cover'/>
            </div>

            <div className='flex flex-col lg:h-screen overflow-hidden relative'>
                <div className='w-full h-full relative inset-0 bg-white z-10'>
                    <img src="/images/about_1.jpg" alt="" className='w-full h-full object-cover object-center overflow-hidden opacity-15 absolute z-0'/>
                
                    <div className='py-10 lg:pl-20 relative z-10 mx-10'>
                        <h1 className='text-gray-dark text-4xl lg:text-5xl font-semibold leading-none'>{t('about.title')}</h1>
                        <p className='text-gray-dark text-sm text-justify my-10 lg:mr-25'>{t('about.description')}</p>
                        <Button text={t('about.button')} styles='p-6 flex items-center w-37.5 justify-center'/>
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
            <motion.div className='flex flex-row items-center border-y-2 p-3 border-gray-medium mb-10 lg:mb-30 w-max whitespace-nowrap'
                animate={{ x: ['0%', '-50%'] }}
                transition={{repeat:Infinity, duration:15, ease:'linear'}}
            >
                <div className='flex flex-row items-center'>
                   {items.map((_, index) => (
                    <div key={index} className='flex flex-row items-center'>
                        <span className='uppercase font-medium text-gray-dark text-4xl mx-8'>spike</span>
                        <IconCrop11Filled size={18} className='text-gray-medium shrink-0'/>
                    </div>
                   ))}
                </div>
                <div className='flex flex-row items-center'>
                   {items.map((_, index) => (
                    <div key={index} className='flex flex-row items-center'>
                        <span className='uppercase font-medium text-gray-dark text-4xl mx-8'>spike</span>
                        <IconCrop11Filled size={18} className='text-gray-medium shrink-0'/>
                    </div>
                   ))}
                </div>
            </motion.div>
        </div>


        {/* WE OFFER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-end gap-10 py-16 lg:px-30 px-16">
           
           {/* Items */}
            <div>
                <div className="flex flex-col mb-10">
                    <h3 className="font-semibold text-base lg:text-lg mb-4">{t('about.offer.subtitle')}</h3>
                    <h2 className="font-medium text-3xl md:text-4xl lg:text-6xl">{t('about.offer.title')}</h2>
                </div>

                {/* Item 1 */}
                <div className="flex flex-row gap-x-5 mb-10">
                    <div>
                        <IconCircleNumber1Filled size={50}/>
                    </div>
                    <div className="flex flex-col">
                        <div>
                            <h3 className="font-semibold text-lg lg:text-xl mb-1 text-gray-dark">{t('about.offer.feature1.title')}</h3>
                            <p className="font-normal text-gray-medium">{t('about.offer.feature1.description')}</p>
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
                            <h3 className="font-semibold text-lg lg:text-xl mb-1 text-gray-dark">{t('about.offer.feature2.title')}</h3>
                            <p className="font-normal text-gray-medium">{t('about.offer.feature2.description')}</p>
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
                            <h3 className="font-semibold text-lg lg:text-xl mb-1 text-gray-dark">{t('about.offer.feature3.title')}</h3>
                            <p className="font-normal text-gray-medium">{t('about.offer.feature3.description')}</p>
                        </div>
                    </div>
                </div>

            </div>

            {/* Img */}
            <div className="w-full flex justify-center lg:justify-end mt-10 lg:mt-0">
                
                <div className="relative w-110 h-auto lg:h-115 lg:w-full">
                    <ProductAbout/>

                    <div className='flex justify-center relative md:absolute md:bottom-16 md:-right-20 lg:-right-28 xl:right-0 z-20 mt-5'>   
                        <OpinionAbout/>
                    </div>
                </div>

            </div>


        </div>

        

    </section>
  )
}

export default About
