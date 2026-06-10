interface Props{
    title: string;
    value: string;
    icon: string;
    alt: string;
}

const ContactInfo = ({title, value, icon, alt}: Props) => {
  return (
    <div className="flex flex-row items-center mb-10">
        <div className="w-11 h-11 rounded-full mr-5">
            <img src={icon} alt={alt} />
        </div>
        <div className="flex flex-col">
            <h3 className="text-gray-dark font-semibold text-15 lg:text-2xl">{title}</h3>
            <p className="text-gray-medium text-12 lg:text-15">{value}</p>
        </div>
    </div>
  )
}

export default ContactInfo
