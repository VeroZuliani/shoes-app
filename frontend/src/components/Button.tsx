
interface Props{
  text: string;
  styles?: string;
}

const Button = ({text, styles=''}: Props) => {
  return (
    <button className={`${styles} bg-black rounded-3xl h-11 text-white border-none`}>
        {text}
    </button>
  )
}

export default Button
