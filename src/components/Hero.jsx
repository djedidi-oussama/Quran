"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="mb-8" >
          <h1 className="text-3xl md:text-5xl text-center font-bold text-primary ">
            صدقة جارية
          </h1>
        </div>
        {/* Top - Image */}
        <div className="flex justify-center mb-8">
          <Image
            src="/hero.png" // Replace with your image path
            alt="Hero Image"
            width={1024}
            height={500}
            className="w-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Bottom - Description */}
        <div className="text-center ">
          <p className="text-text text-lg md:text-xl leading-relaxed mb-6">
            تم بناء هذا الموقع بواسطة{" "}
            <Link
              href="https://djedidi-oussama.vercel.app"
              target="_blank"
              className="cursor-pointer hover:text-hoverGreen font-semibold"
            >
              أسامة جديدي
            </Link>{" "}
            باستخدام{" "}
            <Link
              href="https://github.com/rn0x/Quran-Data/tree/version-2.0"
              target="_blank"
              className="cursor-pointer hover:text-hoverGreen font-semibold"
            >
              API Quran-Data
            </Link>{" "}
            من rn0x.
          </p>
          <p className="text-text text-lg md:text-xl leading-relaxed font-semibold">
            اللهم أجعل هذا العمل صدقة جارية لي ولوالدي ولكل مسلم ساهم أو دعم أو
            نشر هذا المشروع 🤲🏻
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
