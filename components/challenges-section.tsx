import Image from "next/image";
import React from "react";

function ChallengeSection() {
  return (
    <section className='max-w-screen-xl px-4 py-20 mx-auto grid lg:grid-cols-12 gap-5 lg:gap-0'>
      <div className='lg:col-span-7 place-self-center'>
        <Image
          className=''
          src='/challenge-img.png'
          width={550}
          height={470}
          alt='challenge image'
        />
      </div>
      <div className='lg:col-span-5'>
        <h1 className='max-w-xl mb-4 text-2xl font-semibold leading-tight md:leading-snug xl:leading-snug md:text-3xl xl:text-4xl dark:text-white'>
          The Current Challenges
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
    </section>
  );
}

export default ChallengeSection;
