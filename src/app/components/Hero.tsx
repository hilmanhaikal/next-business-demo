"use client"; // Add this line

import { Parallax } from 'react-scroll-parallax';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden">
      <Parallax speed={-10} className="absolute inset-0">
        <Image
          src="/assets/hero-background.jpg" // Use /assets (public folder)
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
        />
      </Parallax>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-6 relative z-10 text-center text-white flex flex-col justify-center h-full">
        <h1 className="text-5xl font-bold mb-6">Transforming Your Digital Presence</h1>
        <p className="text-lg mb-10">We deliver innovative solutions that drive growth and success.</p>
        <button className="bg-secondary hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 mx-auto">
          Explore Our Services
        </button>
      </div>
    </section>
  );
}