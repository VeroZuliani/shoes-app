import ContactInfo from "../components/ContactInfo";
import { Map, MapControls } from "@/components/ui/map";
import { IconPhoneFilled } from '@tabler/icons-react';
import { useTranslation } from "react-i18next";

const Contact = () => {

    const { t } = useTranslation()

  return (
    <section id="contact" className="w-full min-h-screen flex items-center justify-center lg:px-30 relative flex-col lg:block overflow-hidden">
        
        <div className="bg-white shadow-2xl rounded-3xl p-6 lg:p-10 lg:absolute lg:top-1/2 lg:-translate-y-1/2 z-10 mt-5 mx-auto">
            <h1 className="font-semibold text-4xl lg:text-5xl mb-15 text-center">{t('contact.title')}</h1>
            <ContactInfo 
                title= {t('contact.phone.label')}
                value= {t('contact.phone.value')}
                icon= {<IconPhoneFilled size={23} className="text-white"/>}
            />
            <ContactInfo 
                title= {t('contact.address.label')}
                value= {t('contact.address.value')}
                icon= {<IconPhoneFilled size={23} className="text-white"/>}
            />
            <ContactInfo 
                title= {t('contact.hours.label')}
                value= {t('contact.hours.value')}
                icon= {<IconPhoneFilled size={23} className="text-white"/>}
            />
        </div>

        <div className="w-full h-87.5 lg:h-full lg:w-280 lg:p-15 px-6 lg:px-30 overflow-hidden lg:absolute lg:right-0 z-0 border-none mt-5 mb-5">
            <Map center={[75.74795, 11.31977]} zoom={15} theme="light">
                <MapControls position="top-right"/>
            </Map>
        </div>

    </section>
  )
}

export default Contact
