import React from 'react';
import Image from 'next/image';
import { getInvolvedCard } from '@/constants';
import Link from 'next/link';
import GetInvolvedGrid from '../GetInvolvedGrid';
import clsx from 'clsx';
import { ArrowUpRight } from 'lucide-react';



const GetInvolved = () => {
    return (
        <section className="bg-black py-10">
            <div className="container">

                {/* <h2 className='text-4xl md:text-5xl font-black text-white mb-12 uppercase tracking-tighter'>
                    GET <span className='text-orange-500'>INVOLVED</span>
                </h2> */}

                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {getInvolvedCard.map((item, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900 rounded-3xl overflow-hidden flex flex-col h-full border border-zinc-800 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 group"
                        >
                            <div className="aspect-[16/10] overflow-hidden relative">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                            </div>

                            <div className="p-7 flex flex-col justify-between flex-grow">
                                <div>
                                    <h3 className="text-white font-extrabold text-xl md:text-3xl mb-2 leading-tight tracking-tight">
                                        {item.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm mb-8 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>

                                <Link href={item.href} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-4 rounded-xl transition-colors duration-300 text-sm md:text-base flex items-center justify-center gap-2 group-hover:gap-3 cursor-pointer">
                                    {item.buttonText}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div> */}


                <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 max-w-7xl mx-auto h-[1000px] md:h-[600px]">
                    {getInvolvedCard.map((item, i) => (
                        <Link
                            href={item.href}
                            className={clsx(
                                "group relative border border-white/10 hover:border-orange-600/40 bg-neutral-900 overflow-hidden rounded-xl shadow-2xl",
                                item.className
                            )}
                            key={i}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover opacity-50 group-hover:opacity-80 transition-opacity duration-500 md:grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex flex-col justify-end">

                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 bg-orange-500 p-2 rounded-full">
                                    <ArrowUpRight className="text-white w-5 h-5" />
                                </div>

                                <h3 className={clsx(
                                    "font-black text-white mb-2 leading-none uppercase",
                                    item.id === 2 || item.id === 4 ? 'text-xl md:text-2xl' : 'text-xl md:text-4xl'
                                )}>
                                    {item.title}
                                </h3>

                                <div className="flex items-center gap-2 overflow-hidden">
                                    <p className="text-gray-300 text-sm font-manrope">{item.description}</p>
                                </div>

                                <span className="text-orange-500 text-[10px] font-bold uppercase tracking-widest mt-4 md:hidden">
                                    Click to Register →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;