import { motion } from "motion/react"

interface Props{
  text: string;
  styles?: string;
  onClick?: () => void;
}

const Button = ({text, styles='', onClick}: Props) => {
  return (
    <motion.button className={`${styles} bg-black rounded-3xl h-11 text-white border-none cursor-pointer hover:bg-gray-dark transition-colors duration-300`}
      onClick={onClick}  
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      whileTap={{ scale: 0.95 }}
    >
        {text}
    </motion.button>
  )
}

export default Button
