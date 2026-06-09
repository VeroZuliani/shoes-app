
interface Props{
  src: string;
  alt: string;
}

const Shoes = ({src, alt}: Props) => {
  return (
    <button>
        <img src={src} alt={alt} className="w-full h-full object-contain"/>
    </button>
  )
}

export default Shoes
