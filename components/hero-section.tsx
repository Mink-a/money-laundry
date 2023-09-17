import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import React from "react";
import Link from "next/link";

function HeroSection() {
  return (
    <section className='bg-gradient-to-l from-[#ebf7fb] to-[#fafdfe] dark:bg-gray-900'>
      <div className='max-w-screen-xl px-4 pt-20 pb-48 mx-auto grid lg:grid-cols-12 gap-5 lg:gap-0'>
        <div className='lg:col-span-5'>
          <h1 className='max-w-xl mb-4 text-2xl font-semibold leading-tight md:leading-snug xl:leading-snug md:text-3xl xl:text-4xl dark:text-white'>
            Optima Compass anti money laundering technology and services
            redefined
          </h1>
          <p className='max-w-2xl mb-6 font-light leading-loose text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
            Optima Compass Group is a consulting, services and technology firm
            with a long established lagecy of leadership.
          </p>
          <Link href='#' className={buttonVariants({ variant: "default" })}>
            Speak to Sales
            <MoveRight className='ml-2 h-4 w-4' />
          </Link>
        </div>
        <div className='lg:col-span-7 place-self-center'>
          <Image
            src='/hero-img.png'
            width={650}
            height={470}
            alt='hero image'
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
