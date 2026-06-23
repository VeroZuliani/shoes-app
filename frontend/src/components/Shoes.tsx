
interface Props{
  src: string;
  alt: string;
  style?: string;
}

const Shoes = ({src, alt, style=''}: Props) => {
  return (
    <button className={`${style} cursor-pointer overflow-hidden`}>
      <img src={src} alt={alt} className="w-full h-full object-contain"/>
    </button>
  )
}

export default Shoes
