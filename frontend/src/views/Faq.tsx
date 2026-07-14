import FaqItem from "@/components/FaqItem";
import { useState } from "react";

interface Faq{
    id: number;
    question: string;
    answer: string;
}

const faq : Faq[] = [
    {
        id: 1,
        question: 'What is the shipping time for Spike sneakers?',
        answer: 'Standard shipping usually takes between 3 to 5 business days. Once your order is processed, you will receive a tracking number via email.',
    },
    {
        id: 2,
        question: 'How should I clean and care for my sneakers?',
        answer: 'We recommend using a soft brush, mild soap, and warm water. Avoid machine washing or direct heat drying to preserve the materials.',
    },
    {
        id: 3,
        question: 'Are all Spike products 100% authentic?',
        answer: 'Yes, all our footwear is 100% authentic, sourced directly from official manufacturers and verified distributors.',
    },
    {
        id: 4,
        question: 'What is your return and exchange policy?',
        answer: 'We offer a 30-day hassle-free return and exchange policy. Items must be unworn, in original packaging, and accompanied by the purchase receipt.',
    },
    {
        id: 5,
        question: 'How long does a refund take to process?',
        answer: 'Once we receive and inspect your returned items, refunds are issued back to your original payment method within 5 to 7 business days.',
    },

]

const Faq = () => {

    // Guardar Id de pregunta desplegada: Por defecto abre la 1ra
    const [openId, setOpenId] = useState<number | null>(1)

    // Evaluar acordeón: Al seleccionar ítem abierto, lo cierra.
    const handleToggle = (id: number) => {
        setOpenId(openId === id ? null : id)
    }

  return (
    <section id="faq" className="w-full min-h-screen lg:px-30 p-16">
      
        <h1 className="font-medium text-2xl md:text-4xl lg:text-5xl mb-6 text-center">Frequently Asked Questions</h1>

        {/* Acordeon Contenedor */}
        <div className="w-full flex flex-col gap-5">
            
            {/* Acordeon Item */}
            {faq.map(({id, question, answer}: Faq) => (
                <FaqItem
                    key={id}
                    question={question}
                    answer={answer}
                    isOpen={openId === id}
                    onToggle={() => handleToggle(id)}
                />
            ))}

        </div>

    </section>
  )
}

export default Faq
