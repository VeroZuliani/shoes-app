import { IconHeart } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

interface Props{
    id: string | number;
    img: string;
    name: string;
    color: string;
    price: number;
}

const ProductsCard = ({img, name, color, price}: Props) => {
    
    const { t } = useTranslation()

    // Coincidir con JSON: White -> white
    const colorName = color.toLowerCase()

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
        
            <div className="text-gray-medium space-x-4 mt-2 text-[12px] md:text-[14px] flex flex-col md:flex-row">
                <span>Color: {t(`products.colors.${colorName}`, color)}</span>
                <span className="hidden md:inline">|</span>
                <span>Rs {price}/-</span>
            </div>
        </div>

    </div>
  )
}

export default ProductsCard
