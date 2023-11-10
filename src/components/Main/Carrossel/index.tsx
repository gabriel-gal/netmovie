"use client"
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from "react";

export default function Carrossel() {

    const [currentIndex, setCurrentIndex] = useState(0)
    const [transitionClass, setTransitionClass] = useState("transition-opacity duration-200 ease-in-out");

    const slider = [
        { url: "https://img.freepik.com/fotos-gratis/respingo-colorido-abstrato-3d-background-generativo-ai-background_60438-2509.jpg" },
        { url: "https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg" },
        
    ]

    const goToSlide = (slidesIndex: number) => {
        setTransitionClass("duration-500 ease-in-out opacity-40");
        setTimeout(() => {
            setCurrentIndex(slidesIndex);
            setTransitionClass("transition-opacity duration-200 ease-in-out"); 
        }, 200); 
    };

    return (
        <div className={`${transitionClass} relative`}>
            <div style={{ backgroundImage: `url(${slider[currentIndex].url})` }} className="w-full h-full bg-center ">

            </div>

            <div className='absolute inset-0 flex items-end justify-center'>
                {slider.map((slides, slidesIndex) => (
                    <div key={slidesIndex} onClick={() => goToSlide(slidesIndex)}>
                        <CircleIcon

                            color="primary"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}