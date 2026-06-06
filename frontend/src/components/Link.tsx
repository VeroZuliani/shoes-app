interface Props{
    text: string;
    href: string;
    styles?: string;
}

const Link = ({text, href, styles=''}: Props) => {
  return (
    <li >
        <a href={href} className={`${styles} underline underline-offset-8 decoration-[0.1rem] decoration-transparent hover:decoration-gray-dark transition duration-700 ease-in-out`}>{text}</a>
    </li>
  )
}

export default Link
