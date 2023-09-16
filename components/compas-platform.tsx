import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import { MoveRight } from "lucide-react";

function CompasPlatform() {
  return (
    <section className='bg-white dark:bg-gray-900'>
      <section className='max-w-screen-xl px-4 py-8 mx-auto grid lg:grid-cols-12 gap-5 lg:gap-0'>
        <div className='lg:col-span-5'>
          <h1 className='max-w-xl mb-4 text-2xl font-semibold leading-tight md:leading-snug xl:leading-snug md:text-3xl xl:text-4xl dark:text-white'>
            AML Compass Technology Platform
          </h1>
          <p className='max-w-2xl mb-6 font-light leading-loose text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400'>
            The passage experienced a surge in popularity during the 1960s when
            Letraset used it on their dry-transfer sheets, and again during the
            90s as desktop publishers bundled the text with their software. In particular, the garbled words of lorem ipsum bear an unmistakable resemblance to sections of Cicero's work, with the most notable passage excerpted.
          </p>
          <Link href='#' className={buttonVariants({ variant: "outline" })}>
            Speak to Sales
            <MoveRight className='ml-2 h-4 w-4' />
          </Link>
        </div>
        <div className='lg:col-span-7'>
          <Image
            src='/hero-img.png'
            width={650}
            height={470}
            alt='hero image'
          />
        </div>
      </section>
    </section>
  );
}

export default CompasPlatform;
