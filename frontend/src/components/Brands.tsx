interface Props{
  src: string;
  alt: string;
  styles?: string;
}

const Brands = ({src, alt, styles=''}: Props) => {
  return (
    <div className={`${styles} flex items-center justify-center w-20 md:w-28 lg:w-32 h-12`}>
      <img src={src} alt={alt} className={`${styles} w-full h-full object-cover`}/>
    </div>
  )
}

export default Brands
