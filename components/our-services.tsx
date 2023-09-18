import Image from "next/image";
import React from "react";

function OurServices() {
  return (
    <section className='px-4 py-20  bg-[#F2FBFF]'>
      <div className='max-w-screen-xl mx-auto space-y-10'>
        <div className='max-w-2xl mx-auto text-center'>
          <h1 className='mb-4 text-2xl font-semibold leading-tight md:leading-snug xl:leading-snug md:text-3xl xl:text-4xl dark:text-white'>
            Our Services
          </h1>
          <p className='leading-loose mb-3'>
            Rhoncus mattis rhoncus urna neque viverra justo nec. Magna etiam
            tempor orci eu. Praesent semper feugiat nibh sed pulvinar proin
            gravida hendrerit lectus.
          </p>
        </div>
        <div className='grid lg:grid-cols-3 lg:grid-rows-2 gap-3 text-center'>
          <div className='w-full py-8 rounded-lg shadow-sm bg-white'>
            <Image src="/cons.png" alt="" width={55} height={55} className='mx-auto m-4' />
            <h3 className='text-lg lg:text-2xl'>Consulting</h3>
          </div>
          <div className='w-full py-8 rounded-lg shadow-sm bg-white'>
            <Image src="/lic.png" alt="" width={55} height={55} className='mx-auto m-4' />
            <h3 className='text-lg lg:text-2xl'>Licensing</h3>
          </div>
          <div className='w-full py-8 rounded-lg shadow-sm bg-white'>
            <Image src="/train.png" alt="" width={55} height={55} className='mx-auto m-4' />
            <h3 className='text-lg lg:text-2xl'>Training</h3>
          </div>
          <div className='w-full py-8 rounded-lg shadow-sm bg-white'>
            <Image src="/acc.png" alt="" width={55} height={55} className='mx-auto m-4' />
            <h3 className='text-lg lg:text-2xl'>Correspondent Account</h3>
          </div>
          <div className='w-full py-8 rounded-lg shadow-sm bg-white'>
            <Image src="/dep.png" alt="" width={55} height={55} className='mx-auto m-4' />
            <h3 className='text-lg lg:text-2xl'>Independent AML/BSA Reviews</h3>
          </div>
          <div className='w-full py-8 rounded-lg shadow-sm bg-white'>
            <Image src="/rev.png" alt="" width={55} height={55} className='mx-auto m-4' />
            <h3 className='text-lg lg:text-2xl'>Look Back Reviews</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurServices;
