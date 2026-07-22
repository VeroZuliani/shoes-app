import FooterIcon from '@/components/FooterIcon';
import FooterLink from '@/components/FooterLink';
import { IconSend } from '@tabler/icons-react';
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


const Footer = () => {

    const { t } = useTranslation()

    const [email, setEmail] = useState('')
    const [isSubscribed, setIsSubscribed] = useState(false)
    const [error, setError] = useState('')
    

    // Función de envío del formulario
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError('')

        // Validar campo vacio
        if (!email.trim()) {
            setError(t('footer.errors.empty'))
            return
        } 

        // Validar email con expresión regular
        if (!emailRegex.test(email)) {
            setError(t('footer.errors.invalid'))
            return
        }


        try{
            console.log('Email registrado: ', email)

            setIsSubscribed(true)
            setEmail('')

            setTimeout(() => setIsSubscribed(false), 4000)
        }
        catch(error){
            setError(t('footer.errors.general'))
        }
    }


  return (
    <footer id='footer' className="bg-black w-full flex items-center px-16 lg:px-30 py-16">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-20 sm:px-16 lg:p-0">
            <div className="flex flex-col lg:col-span-2">
                <h1 className='text-white uppercase text-4xl lg:text-6xl'>spike</h1>
                <p className='text-white text-sm lg:text-base mt-10'>{t('footer.description')}</p>
                <FooterIcon/>
            </div>

            <div>
                <h2 className='text-white text-base lg:text-lg font-semibold'>{t('footer.company')}</h2>
                <FooterLink/>
            </div>

            <div>
                <h2 className='text-white text-base lg:text-lg font-semibold'>{t('footer.company')}</h2>
                <FooterLink/>
            </div>
            
            <div className='flex items-center flex-col lg:mt-8 lg:col-span-2'>
                <h3 className="text-gray-light flex justify-center mb-10 text-2xl lg:text-3xl">{t('footer.newsletter')}</h3>
                
                <form onSubmit={handleSubmit} noValidate className="w-full flex flex-col">
                    <div className="w-full flex flex-row relative">
                        <input 
                            value={email} 
                            type="email" 
                            name="email" 
                            placeholder={t('footer.email')} 
                            className="w-full bg-gray-dark text-white placeholder:text-gray-medium text-sm lg:text-base p-4 pl-3 rounded-lg pr-12 focus:outline-none hover:text-white" 
                            autoComplete="off"
                            onChange={(e) => {
                                setEmail(e.target.value)
                                if (error) 
                                    setError('')
                            }}
                        />
                        <button type="submit" className='group bg-transparent absolute inset-y-0 right-4 cursor-pointer'>
                            <IconSend size={20} className="text-gray-medium transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:translate-x-1"/>
                        </button>
                    </div>

                    {/* Mensaje para usuario */}
                    {isSubscribed && (
                        <p className="text-white text-[0.8rem] mt-2 self-start">{t('footer.success')}</p>    
                    )}
                    {error && (
                        <p className="text-error text-[0.8rem] mt-2 self-start">{error}</p>
                    )}
                </form>
            </div>
        </div>

    </footer>
    
  )
}

export default Footer
