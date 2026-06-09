interface Props{
  src: string;
  alt: string;
  styles?: string;
}

const Brands = ({src, alt, styles=''}: Props) => {
  return (
    <div className={`${styles} w-25 h-20`}>
      <img src={src} alt={alt} />
    </div>
  )
}

export default Brands
