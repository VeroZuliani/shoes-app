import Button from '@/components/Button';
import { IconX, IconBrandGoogleFilled, IconEye, IconEyeOff } from '@tabler/icons-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const Login = () => {
    
    const { t } = useTranslation();

    //Cerrar ventana modal de login regresando a ruta previa
    const navigate = useNavigate()

    const handleClose = () => {
        navigate(-1)
    }

    
    // Controlar visibilidad de contraseña
    const [showPassword, setShowPassword]  = useState(false)

    const handleClick = () => {
        setShowPassword(!showPassword)
    }


    // Schema de validación con Zod
    const schema = z.object({
        username: z.string().min(4, t('login.errorUsername')),
        password: z.string().min(6, t('login.errorPassword')),
    })

    type loginFormInputs = z.infer<typeof schema>

    const{
        register,
        handleSubmit,
        formState: {errors},
        } = useForm<loginFormInputs>({
            resolver: zodResolver(schema),
        })
    
    const onSubmit = (data: loginFormInputs) => {
        console.log("Login exitoso:", data)
        navigate('/catalog')
    }


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-xs">
        
        <div className='w-70 md:w-100 md:h-125 bg-white p-8 rounded-2xl relative'>
            <div className='flex items-center justify-between mb-5'>
               <img src="/images/logo.png" alt="" className='w-20'/>

               <button onClick={handleClose} className='cursor-pointer'>
                    <IconX stroke={2} />
                </button> 
            </div>

            <div className='flex flex-col items-center justify-center mb-5'>
                <h1 className='text-[20px] md:text-[25px] font-bold'>{t('login.title')}</h1>
                <p className='text-[12px]'>{t('login.subtitle')}</p>
            </div>


            <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder={t('login.username')} {...register('username')} className='w-full border border-gray-light p-1 focus:outline-none text-[14px] text-gray-dark'/> 
            
                {/* Mostrar error de username si existe */}
                {errors.username && (
                    <span className='text-error text-[9px] md:text-[11px]'>{errors.username.message}</span>
                )}

                <div className='w-full relative'>
                    <input type={showPassword ? "text" : "password"} placeholder={t('login.password')} {...register('password')} className='w-full border border-gray-light p-1 focus:outline-none text-[14px] pr-10 text-gray-dark'/>
                    
                    <button type='button' 
                        onClick={handleClick}
                        className='absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer'>
                        {showPassword ? 
                            <IconEye stroke={1.5} size={20} className='text-gray-medium'/>
                            :
                            <IconEyeOff stroke={1.5} size={20} className='text-gray-medium'/>
                        }
                    </button> 
                </div>

                {/* Mostrar error de password si existe */}
                {errors.password && (
                    <span className='text-error text-[9px] md:text-[11px]'>{errors.password.message}</span>
                )}
                
                <button className='text-right underline text-[11px] cursor-pointer'>{t('login.forgot')}</button>

                <Button text={t('login.button')} styles="w-full rounded-none"/>

                <div className='flex items-center px-5'>
                    <div className='flex-1 border border-gray-light'></div>
                    <span className='px-3 text-gray-medium text-[14px]'>{t('login.or')}</span>
                    <div className='flex-1 border border-gray-light'></div>
                </div>

                <motion.button type='button' 
                    className='flex items-center justify-center gap-2 cursor-pointer border border-gray-medium p-2 w-full hover:bg-gray-dark hover:text-white hover:border-transparent transition-colors duration-300'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <IconBrandGoogleFilled />
                    <span className='text-[14px]'>{t('login.google')}</span>
                </motion.button>

                <div className='flex flex-row items-center justify-center gap-2'>
                    <p className='text-[12px] md:text-[14px]'>{t('login.noAccount')}</p>
                    <a href="" className='text-[12px] md:text-[14px] text-blue-light hover:underline'>{t('login.signUp')}</a>
                </div>
            </form>


        </div>
        
    </div>
  )
}

export default Login

