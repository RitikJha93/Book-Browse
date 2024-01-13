import { useState } from 'react';
import bgImage from '../assets/bgImg.jpg'
import firstImage from '../assets/firstImg.png'
import { Button } from './ui/button';
const slides = [
    {
        bg: bgImage,
        image: firstImage,
        title: 'Featured Books of January',
        subtitle: "Buy at 20% off"
    },
    {
        bg: bgImage,
        image: firstImage,
        title: 'Featured Books of January',
        subtitle: "Buy at 20% off"
    },
    {
        bg: bgImage,
        image: firstImage,
        title: 'Featured Books of January',
        subtitle: "Buy at 20% off"
    },
];
const Landing = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };
    return (
        <div className="relative w-full overflow-hidden h-[60vh] sm:h-[91vh]">
            <div className="flex w-full h-full transition-all duration-1000 transform" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 w-full h-full bg-cover bg-no-repeat bg-center">
                        <div className='w-screen h-full flex flex-col-reverse md:flex-row justify-center md:justify-between items-center px-16'>
                            <div className='flex flex-col w-full md:w-1/3 space-y-3'>
                                <h1 className='font-bold font-primary text-2xl sm:text-3xl md:text-5xl'>{slide.title}</h1>
                                <p className='text-secondary-foreground text-base sm:text-lg font-primary'>{slide.subtitle}</p>
                                <Button className='sm:w-1/3 w-full font-[Poppins] text-lg rounded-none'>
                                    See More
                                </Button>
                            </div>
                            <div className='w-full md:w-1/2'>
                                <img className='' src={firstImage} alt="" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full w-8 h-8  sm:w-10 sm:h-10 flex items-center justify-center" onClick={prevSlide}>❮</button>
            <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full w-8 h-8  sm:w-10 sm:h-10 flex items-center justify-center" onClick={nextSlide}>❯</button>
        </div>
    )
}
export default Landing