import { IconHeart } from "@tabler/icons-react";

interface Props{
    id: string | number;
    img: string;
    name: string;
    color: string;
    price: number;
}

const ProductsCard = ({img, name, color, price}: Props) => {
  return (
    <div className="w-full shadow-xl rounded-3xl px-4 py-4">
        
        <img src={img} alt="" className="w-full h-full aspect-square rounded-3xl object-cover object-center"/>

        <div className="flex flex-col px-4 pt-4 pb-6">

            <div className="flex justify-between">
                <h3 className="text-gray-dark font-semibold text-[14px]">{name}</h3>
                <button className="text-thumb-like cursor-pointer group">
                    <IconHeart stroke={1.5} size={25} className="group-hover:fill-thumb-like transition-all duration-300 ease-in-out"/>
                </button>
            </div>
        
            <div className="text-gray-medium space-x-4 mt-2 text-[14px]">
                <span>Color: {color}</span>
                <span>|</span>
                <span>Rs {price}/-</span>
            </div>
        </div>

    </div>
  )
}

export default ProductsCard
