import ContactInfo from "../components/ContactInfo";
import { Map, MapControls } from "@/components/ui/map";
import { IconPhoneFilled } from '@tabler/icons-react';


const Contact = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center lg:px-30 relative flex-col lg:block overflow-hidden">
        
        <div className="bg-white shadow-2xl rounded-3xl p-6 lg:p-10 lg:absolute lg:top-1/2 lg:-translate-y-1/2 z-10 mt-5 mx-auto">
            <h1 className="font-semibold text-4xl lg:text-5xl mb-15 text-center">Contact Us</h1>
            <ContactInfo 
                title= "Phone number"
                value= "+91 8292726389 +9182922726389"
                icon= {<IconPhoneFilled size={23} className="text-white"/>}
            />
            <ContactInfo 
                title= "Address"
                value= "1221, beach road, kozhikode-650068"
                icon= {<IconPhoneFilled size={23} className="text-white"/>}
            />
            <ContactInfo 
                title= "Opening Hours"
                value= "Everyday 9:00 am to 10:00 pm"
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
