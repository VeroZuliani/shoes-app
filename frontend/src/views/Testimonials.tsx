import TestimonialsCard from "@/components/TestimonialsCard";
import { useState } from "react";

interface Opinion{
    brand: string;
    star: number;
    comment: string;
    src: string;
    alt: string;
    name: string;
    rol: string;

}

const opinion : Opinion[] = [
    {
        brand: "Best Shoes",
        star: 5,
        comment: "Spike shoes are more than just footwear; they're a statement. The quality is exceptional, and I've received countless compliments on their unique designs.",
        src: "/images/Testimonial_1.png",
        alt: "testimonio 1",
        name: "Vishal Kaushik",
        rol: "University professor",
    },
    {
        brand: "Amazing Collection",
        star: 5,
        comment: "Spike shoes are more than just footwear; they're a statement. The quality is exceptional, and I've received countless compliments on their unique designs.",
        src: "/images/Testimonial_2.png",
        alt: "testimonio 2",
        name: "Vishal Kaushik",
        rol: "University professor",
    },
    {
        brand: "Top Quality",
        star: 5,
        comment: "Spike shoes are more than just footwear; they're a statement. The quality is exceptional, and I've received countless compliments on their unique designs.",
        src: "/images/Testimonial_3.png",
        alt: "testimonio 3",
        name: "Vishal Kaushik",
        rol: "University professor",
    },
    {
        brand: "Amazon Essentials",
        star: 5,
        comment: "Spike shoes are more than just footwear; they're a statement. The quality is exceptional, and I've received countless compliments on their unique designs.",
        src: "/images/Testimonial_4.png",
        alt: "testimonio 4",
        name: "Vishal Kaushik",
        rol: "University professor",
    },
    {
        brand: "Amazon Aware",
        star: 4,
        comment: "Spike shoes are more than just footwear; they're a statement. The quality is exceptional, and I've received countless compliments on their unique designs.",
        src: "/images/Testimonial_5.png",
        alt: "testimonio 5",
        name: "Vishal Kaushik",
        rol: "University professor",
    }
] 


const Testimonials = () => {

    //Iniciar estado en false, para que no muestre todas las reviews
    const[seeReviews, setSeeReviews] = useState(false)

    //True: mostrar array completo / False: mostrar las 3 por defecto
    const showReviews =  seeReviews ? opinion : opinion.slice(0,3)


  return (

    <section className="w-full min-h-screen flex flex-col items-center px-16 lg:px-30 relative justify-center overflow-hidden ">
        
        <img className="w-full h-full absolute inset-0 -z-10 object-cover object-top scale-x-[-1]" src="/images/testimonial.jpg" alt=""/>
        <div className="absolute inset-0 bg-black/70 -z-10" />
        
        <div className="flex flex-col items-center mt-5">
            <h1 className="text-gray-light text-3xl lg:text-6xl font-semibold lg:font-semibold text-center">Customer Opinion</h1>
            <p className=" text-gray-light mt-8 text-sm lg:text-xl max-w-sm lg:max-w-xl text-center px-2">Discover the voices that shape our journey. Explore our review section and become part of the conversation today!.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-20 gap-8 px-4">
            {showReviews.map(({brand, star, comment, src, alt, name, rol}: Opinion) => (    
                <TestimonialsCard
                    key={brand}
                    brand={brand}
                    star={star}
                    comment={comment}
                    src={src}
                    alt={alt}
                    name={name}
                    rol={rol}
                />
            ))}
        </div>

        <button 
            className="underline m-4 text-white cursor-pointer hover:-translate-y-0.5"
            onClick={() => setSeeReviews(!seeReviews)}
        >
            {seeReviews ? "see less reviews" : "see all reviews"}
        </button>

    </section>
  )
}

export default Testimonials
