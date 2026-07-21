import LinkNav from "./LinkNav";

interface FooterLink{
    link: string;
    href: string;
}

const footerLink : FooterLink[] = [
    {
        link: "About us",
        href: "#about",
    },
    {
        link: "Products",
        href: "#products",
    },
    {
        link: "Contact us",
        href: "#contact",
    },
    {
        link: "FAQ",
        href: "#faq",
    },
    {
        link: "Testimonials",
        href: "#testimonials",
    },
]

const FooterLink = () => {
  return (
    
    <ul className="flex gap-2 flex-col lg:flex-col text-white mt-5">
        {footerLink.map(( {link, href}: FooterLink) => (
            <LinkNav
                key={link}
                text={link}
                href={href}
            />
        ))}
    </ul>
    
  )
}

export default FooterLink
