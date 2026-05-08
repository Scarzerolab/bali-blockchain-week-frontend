import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Image from 'next/image';
import SpeakerSlider from '../SpeakerSlider';

const speakersData = [
    {
        name: "GreenMan-Ron",
        role: "Community Manager & Educator Lead BlockDevId",
        image: "/speakers/speaker1.webp",
    },
    {
        name: "Felix Jonathan",
        role: "Head of Business Development Di Indodax",
        image: "/speakers/speaker2.webp",
    },
    {
        name: "Shafi Karim",
        role: "Lead at Solana Bali, Director at Agridex, Founder at Blockponics",
        image: "/speakers/speaker3.webp",
    },
    {
        name: "Raine Renaldi",
        role: "President of ID OpenTech Group",
        image: "/speakers/speaker4.webp",
    }
];



const Speakers = () => {
    return (
        <div className='py-10 md:py-20' id='Speakers'>
            <div className='container mx-auto px-4'>

                <h2 className='text-[33px] md:text-5xl font-black text-white mb-12 leading-8 uppercase tracking-tighter'>
                    upcoming <span className='text-orange-500'>SPEAKERS</span>
                </h2>

                <div className=' grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 hidden md:grid'>
                    {speakersData.map((speaker, index) => (
                        <div
                            key={index}
                            className='flex flex-col gap-3 group cursor-pointer transition-all duration-300'
                        >
                            <div className='relative overflow-hidden rounded-xl border-[1.5px] border-orange-500 bg-white aspect-[4/5] flex items-center justify-center'>
                                <Image
                                    src={speaker.image}
                                    width={400}
                                    height={450}
                                    className='w-full h-full object-cover transition-transform duration-500 '
                                    alt={speaker.name}
                                    priority={index < 4}
                                />
                            </div>

                            <div className='rounded-xl bg-orange-500 px-4 py-4 text-left shadow-md min-h-[110px] flex flex-col justify-center'>
                                <h3 className='text-white font-bold text-lg lg:text-xl leading-tight mb-1 tracking-tight uppercase'>
                                    {speaker.name}
                                </h3>
                                <p className='text-white/90 text-xs md:text-sm font-medium leading-snug line-clamp-2'>
                                    {speaker.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <SpeakerSlider />

            </div>
        </div>


    )
}

export default Speakers


