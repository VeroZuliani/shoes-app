import Link from "./Link"


const NavBar = () => {

  return (
    <header className="w-full">
        <div className="flex w-full px-4 lg:px-30">
            <a href="/" className="z-50">
                <img src="https://placehold.co/150x60?text=SPIKE" alt="" />
            </a>

            <nav className="flex items-center mx-auto gap-16">
                <ul className="flex gap-6">
                    <Link href="/" text="Home"/>
                    <Link href="/about" text="About us"/>
                    <Link href="/products" text="Products"/>
                    <Link href="/testimonials" text="Testimonials"/>
                    <Link href="/contact" text="Contact us"/>
                    <Link href="/faq" text="FAQ"/>
                </ul>

                <div className="flex">
                    <a href="/login" className="mx-4">
                        <img src="https://placehold.co/32?text=LOGIN" alt="" />
                    </a>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default NavBar
