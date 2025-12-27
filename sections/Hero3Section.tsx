import React from 'react'
import Image from 'next/image'

import CardsContainer from "../components/CardsContainer";
const Hero3 = () => {
    return (
        <section className="w-full h-[100vh] relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-20">
                {/* Layout: mobile column, large screens side-by-side with flex */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-center lg:justify-between gap-10 ">
                    {/* Left column */}
                    <div className="lg:w-7/12">
                        {/* Headline */}
                        <h1 className="text-4xl text-center lg:text-left leading-[1.15] md:text-6xl md:leading-[1.05] font-bold">Websites designed to Grow your business.</h1>

                       
                    </div>

                    {/* Right column */}
                    <div className="lg:w-5/12 flex flex-col gap-6 mt-6 lg:mt-0">


                        {/* Supporting copy */}
                        <p className="text-base md:text-2xl text-muted-foreground">We design and build websites that attract visitors and turn them into customers, and grow your business.</p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            {/* Primary */}
                            <button className="group inline-flex items-center justify-between gap-4 rounded-xl bg-black text-white px-5 py-4 shadow-sm w-full sm:w-auto">
                                <span className="font-medium">Get a Website</span>
                                <span className="grid place-items-center h-7 w-7 rounded-md bg-orange-400 text-black transition-transform group-hover:translate-x-0.5">↗</span>
                            </button>

                            {/* Secondary */}
                            <button className="inline-flex items-center justify-between gap-10 rounded-xl border px-5 py-4 bg-card text-foreground w-full sm:w-auto">
                                <span className="font-medium">See real Results</span>
                                <span className="grid place-items-center h-7 w-7 rounded-md bg-muted text-foreground/70">↗</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Centered cards on large screens, unchanged on mobile */}
            
        </section>
    )
}

export default Hero3