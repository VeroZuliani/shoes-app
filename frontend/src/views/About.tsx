import { IconCircleNumber1Filled, IconCircleNumber2Filled, IconCircleNumber3Filled } from '@tabler/icons-react';

const About = () => {
  return (
    <section className="w-full min-h-screen flex items-center lg:px-30">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
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
                            <p className="font-normal text-gray-medium">At Spike we take pride in offering the finest footwear crafted with precision and dedication.</p>
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

            <div>
                <img src="https://placehold.co/400x360?" alt="" />
            </div>
        </div>

    </section>
  )
}

export default About
