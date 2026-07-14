import Button from "@/components/Button"
import ProductsCard from "@/components/ProductsCard"
import { useState } from "react";

interface Product{
    id: string | number;
    img: string;
    name: string;
    color: string;
    price: number;
}

const product : Product[] = [
    { id: 1, img: "/images/product1.jpg", name: "Nike Air A5000", color: "White", price: 999 },
    { id: 2, img: "/images/product2.jpg", name: "Nike Air A5000", color: "White", price: 999 },
    { id: 3, img: "/images/product3.jpg", name: "Nike Air A5000", color: "White", price: 999 },
    { id: 4, img: "/images/product4.jpg", name: "Nike Air A5000", color: "White", price: 999 },
    { id: 5, img: "/images/product5.jpg", name: "Nike Air A5000", color: "White", price: 999 },
    { id: 6, img: "/images/product6.jpg", name: "Nike Air A5000", color: "White", price: 999 },
    { id: 7, img: "/images/product7.jpg", name: "Nike Air A5000", color: "White", price: 999 },
    { id: 8, img: "/images/product8.jpg", name: "Nike Air A5000", color: "White", price: 999 },
    { id: 9, img: "/images/product9.jpg", name: "Nike Air A5000", color: "White", price: 999 },
    { id: 10, img: "/images/product10.jpg", name: "Nike Air A5000", color: "White", price: 999 },
    { id: 11, img: "/images/product11.jpg", name: "Nike Air A5000", color: "White", price: 999 },
    { id: 12, img: "/images/product12.jpg", name: "Nike Air A5000", color: "White", price: 999 },
]


const Products = () => {

    // Controlar visibilidad de productos con estado 
    // Iniciar estado en false, para que no muestre todos los productos
    const[viewMore, setViewMore] = useState(false)

    // True: mostrar todos los productos / False: mostrar 6 productos
    const showProducts = viewMore? product : product.slice(0,6) 

  return (
    <section id="products" className="w-full min-h-screen lg:px-30 py-16 px-16">
        
        <h1 className="font-medium text-5xl mb-6">Spike Collections</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 lg:gap-10 place-items-center">
            {showProducts.map(({id,img,name,color,price}:Product) => (
                <ProductsCard 
                    key={id}
                    id={id}
                    img={img}
                    name={name}
                    color={color}
                    price={price}
                /> 
            ))}
        </div>
        

        <div className="flex items-center justify-center pt-8 lg:pt-15">
            <Button 
                text={viewMore ? "view less" : "view more "} 
                styles="w-38"
                onClick={()=> setViewMore(!viewMore)}
            />
        </div>

    </section>
  )
}

export default Products
