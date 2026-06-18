import { IconStarFilled, IconThumbUp } from '@tabler/icons-react';

const OpinionAbout = () => {
  return (
    <div className="w-full max-w-85 h-40 bg-white shadow-xl rounded-3xl flex flex-col p-4 justify-center">
    
        <div className="flex flex-row">

            <div className="flex flex-col w-full max-w-22">
                <div className="size-14 rounded-full overflow-hidden">
                    <img src="/images/opinionAbout.jpg" alt="" className='w-full h-full object-cover object-center'/>
                </div>

                <div>
                    <h3 className="text-gray-dark font-semibold text-[10px] mt-3">Nike Air A5000</h3>
                    
                    <div className="text-gray-medium mt-2 text-[10px]">
                        <span>Color: White</span>
                    </div>
                </div>
            </div>


            <div className="flex flex-col relative">
                <h4 className="text-gray-medium text-[10px] mb-2">Verified Customer</h4>
                
                <div className='flex justify-end absolute top-3 right-6'>
                    <IconThumbUp stroke={2} size={20}  className='text-thumb-like'/>
                </div>
                
                <h3 className="text-gray-dark font-semibold text-[12px]">Best Shoes Ever!!</h3>
                
                <div className='flex flex-row gap-1'>
                    <IconStarFilled size={10} className='text-yellow'/>
                    <IconStarFilled size={10} className='text-yellow'/>
                    <IconStarFilled size={10} className='text-yellow'/>
                    <IconStarFilled size={10} className='text-yellow'/>
                    <IconStarFilled size={10} className='text-yellow'/>
                </div>

                <p className="text-gray-medium text-[9.5px] mt-5">Absolutely thrilled with my Nike White Shoes! The combination of style and comfort is unibeatable. The sleek design adds a touch of a elegance.</p>
            </div>

        </div>

    </div>
  )
}

export default OpinionAbout
