import Image from "next/image";
import React from "react";

function OurSolution() {
  return (
    <section className='relative w-full bg-[#063A78] text-white'>
      <div className='max-w-screen-xl px-4 py-20 mx-auto grid lg:grid-cols-12 gap-5 lg:gap-0'>
        <div className='lg:col-span-5'>
          <h1 className='max-w-xl mb-4 text-2xl font-semibold leading-tight md:leading-snug xl:leading-snug md:text-3xl xl:text-4xl dark:text-white'>
            Our Solutions
          </h1>
          <p className='leading-loose mb-3'>
            Rhoncus mattis rhoncus urna neque viverra justo nec. Magna etiam
            tempor orci eu. Praesent semper feugiat nibh sed pulvinar proin
            gravida hendrerit lectus.
          </p>
          <p className='leading-loose mb-3'>
            Velit scelerisque in dictum non. Tempor commodo ullamcorper a lacus.
            Eget lorem dolor sed viverra ipsum nunc. Egestas maecenas pharetra
            convallis posuere morbi leo urna. Fusce id velit ut tortor.
          </p>
          <p className='leading-loose mb-3'>
            Dictumst vestibulum rhoncus est pellentesque elit ullamcorper
            dignissim cras tincidunt. Libero id faucibus nisl tincidunt eget
            nullam.
          </p>
        </div>
        <div className='lg:col-span-7 place-self-center'>
          <Image
            src='/solution-img.png'
            width={550}
            height={470}
            alt='solution img'
          />
        </div>
      </div>
      <div className="absolute hidden lg:block bg-no-repeat bottom-0 left-0 bg-[left_2rem_top_2rem] bg-[url('/extra-1.png')] w-full h-full"></div>
      <div className="absolute hidden lg:block bg-no-repeat bottom-0 left-0 bg-[left_0_bottom_2rem] bg-[url('/extra-2.png')] w-full h-full"></div>
      <div className="absolute hidden lg:block bg-no-repeat bottom-0 left-0 bg-[right_0_top_2rem] bg-[url('/extra-3.png')] w-full h-full"></div>
      <div className="absolute hidden lg:block bg-no-repeat bottom-0 left-0 bg-[right_2rem_bottom_2rem] bg-[url('/extra-4.png')] w-full h-full"></div>
    </section>
  );
}

export default OurSolution;
