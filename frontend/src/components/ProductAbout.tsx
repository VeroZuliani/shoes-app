import { IconCircleFilled, IconHeart } from "@tabler/icons-react"


const ProductAbout = () => {
  return (
    <div className="w-full max-w-110 h-115 bg-white shadow-xl rounded-3xl flex flex-col p-6 justify-between">
        
        <div className="flex flex-col">
            <div className="w-full h-45 rounded-3xl flex flex-col items-center mb-6">
                <img src="/images/productAbout.jpg" alt=""  className="w-full h-full rounded-3xl object-cover"/> 
            </div>
      
            <h3 className="text-gray-dark font-semibold text-[14px]">Nike Air A5000</h3>
        
            <div className="text-gray-medium space-x-2 mt-2 text-[12px]">
                <span>Color: White</span>
                <span>|</span>
                <span>Rs 999/-</span>
            </div>

            <div className="flex flex-row gap-1 mt-5">
                <IconCircleFilled size={25} className="text-blue-1"/>
                <IconCircleFilled size={25} className="text-blue-2"/>
                <IconCircleFilled size={25} className="text-blue-3"/>
                <IconCircleFilled size={25} className="text-blue-4"/>
            </div>

        </div>

        <div className="w-full grid grid-cols-3 mt-12 items-center">

            <div className="flex flex-row items-center gap-2 col-span-2">
                <div className="size-6.5 rounded-full overflow-hidden">
                    <img src="/images/peopleAbout.jpg" alt="" className='w-full h-full object-cover object-center'/>
                </div>
                <p className="text-gray-medium text-[14px]">1000+ People Bought</p>
            </div>

            <div className="flex justify-end">
                <IconHeart stroke={1.8} size={28} className="text-thumb-like"/>
            </div>

        </div>



    </div>
  )
}

export default ProductAbout
