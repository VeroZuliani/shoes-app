import { IconStarFilled } from '@tabler/icons-react';

interface Props{
  brand: string;
  star: number;
  comment: string;
  src: string;
  alt: string;
  name: string;
  rol: string;
}


const TestimonialsCard = ({brand, star, comment, src, alt, name, rol}: Props) => {
  return (
    <div className="bg-white w-full max-w-sm rounded-2xl p-6 lg:p-10 flex flex-col mt-10">
      
      <h2 className="text-xl lg:text-2xl font-semibold">{brand}</h2>
      
      <div className="flex flex-row mt-2 mb-2">
        {Array.from({length:star}).map((_,i) => (
            <IconStarFilled key={i} size={14} className="fill-yellow mr-1"/>
        ))}
      </div>
      
      <p className="text-gray-dark mt-2 mb-4 text-sm lg:text-base">"{comment}"</p>
      
      <div className="flex flex-row items-center mt-2">
        <div className="size-10 rounded-full mr-5 overflow-hidden">
            <img src={src} alt={alt} className="w-full h-full object-cover"/>
        </div>
        <div className="flex flex-col">
            <h3 className="text-gray-dark font-semibold text-sm lg:text-base">{name}</h3>
            <p className="text-gray-dark text-sm lg:text-base">{rol}</p>
        </div>
      </div>

    </div>
  )
}

export default TestimonialsCard

