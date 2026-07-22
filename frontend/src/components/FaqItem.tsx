import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { motion, AnimatePresence, easeOut } from 'framer-motion'


interface FaqItem{
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
    index: number;
}


const FaqItem = ({question, answer, isOpen, onToggle, index}: FaqItem) => {
  return (
    <motion.div 
    initial={{y:40, opacity:0}}
    whileInView={{y: 0, opacity: 1}}
    transition={{duration:0.5, ease:easeOut, delay: index*0.15}}
    viewport={{once: true, margin: "-50px"}}
    className="border border-white rounded-xl p-5 md:p-10">
        
        {/* Pregunta y botón */}
        <button 
            onClick={() => onToggle()}
            className='w-full flex items-center justify-between text-left cursor-pointer'
            >

            <div className='w-full font-semibold text-white'>
                {question}
            </div>

            {/* Icono con rotación */}
            <div className='text-white'>
                {isOpen ?
                    <IconChevronUp stroke={3} size={20}/>
                    :
                    <IconChevronDown stroke={3} size={20}/>
                }    
            </div>
            
        </button>

        {/* Respuesta desplegado */}
        <AnimatePresence>
            {isOpen && (
                <motion.div className="overflow-hidden"
                    initial={{height:0, opacity:0}}
                    animate={{height:"auto", opacity:1}}
                    exit={{height:0, opacity:0}}
                    transition={{duration:0.3, ease:"easeInOut"}}
                >
                    <p className='font-normal text-gray-light'>
                        {answer}
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
        

    </motion.div>
  )
}

export default FaqItem
