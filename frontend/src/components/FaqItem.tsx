import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { motion, AnimatePresence } from 'framer-motion'


interface FaqItem{
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void
}


const FaqItem = ({question, answer, isOpen, onToggle}: FaqItem) => {
  return (
    <div className="border border-gray-dark rounded-xl p-5">
        
        {/* Pregunta y botón */}
        <button 
            onClick={() => onToggle()}
            className='w-full flex items-center justify-between text-left cursor-pointer'
            >

            <div className='w-full font-semibold text-gray-dark'>
                {question}
            </div>

            {/* Icono con rotación */}
            <div className='text-gray-dark'>
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
                    <p className='font-normal text-gray-medium'>
                        {answer}
                    </p>
                </motion.div>
            )}
        </AnimatePresence>
        

    </div>
  )
}

export default FaqItem
