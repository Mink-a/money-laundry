import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { CircuitBoardIcon, MoveRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Separator } from "./ui/separator";

function ClientFootprint() {
  return (
    <section className='max-w-screen-xl px-4 py-8 mx-auto space-y-10'>
      <div className='max-w-2xl mx-auto text-center'>
        <h1 className='mb-4 text-2xl font-semibold leading-tight md:leading-snug xl:leading-snug md:text-3xl xl:text-4xl dark:text-white'>
          Our Clients and Footprint
        </h1>
        <p className='leading-loose mb-3'>
          Rhoncus mattis rhoncus urna neque viverra justo nec. Magna etiam
          tempor orci eu. Praesent semper feugiat nibh sed pulvinar proin
          gravida hendrerit lectus. Cicero's De Finibus Bonorum et Malorum for
          use in a type specimen book.
        </p>
      </div>
      <div className='grid lg:grid-cols-4 gap-4'>
        <Card className='w-full mb-3 border-0 shadow-lg h-fit'>
          <Image
            className='bg-blue-400 rounded-t-lg'
            src='/hero-img.png'
            width={650}
            height={470}
            alt='hero image'
          />
          <CardHeader className='py-4'>
            <h4 className='font-semibold text-xl mb-2'>AML Technology</h4>
            <Separator className='h-[2px]' />
          </CardHeader>
          <CardContent>
            <ul>
              <li>one</li>
              <li>two</li>
              <li>three</li>
              <li>four</li>
            </ul>
          </CardContent>
        </Card>
        <Card className='w-full mb-3 border-0 shadow-lg h-fit'>
          <Image
            className='bg-blue-400 rounded-t-lg'
            src='/hero-img.png'
            width={650}
            height={470}
            alt='hero image'
          />
          <CardHeader className='py-4'>
            <h4 className='font-semibold text-xl mb-2'>
              Central &amp; South America
            </h4>
            <Separator className='h-[2px]' />
          </CardHeader>
          <CardContent>
            <ul>
              <li>one</li>
              <li>two</li>
              <li>three</li>
              <li>four</li>
              <li>five</li>
              <li>six</li>
              <li>seven</li>
            </ul>
          </CardContent>
        </Card>
        <Card className='w-full mb-3 border-0 shadow-lg h-fit'>
          <Image
            className='bg-blue-400 rounded-t-lg'
            src='/hero-img.png'
            width={650}
            height={470}
            alt='hero image'
          />
          <CardHeader className='py-4'>
            <h4 className='font-semibold text-xl mb-2'>Europe &amp; Africa</h4>
            <Separator className='h-[2px]' />
          </CardHeader>
          <CardContent>
            <ul>
              <li>one</li>
              <li>two</li>
              <li>three</li>
              <li>four</li>
            </ul>
          </CardContent>
        </Card>
        <Card className='w-full mb-3 border-0 shadow-lg h-fit'>
          <Image
            className='bg-blue-400 rounded-t-lg'
            src='/hero-img.png'
            width={650}
            height={470}
            alt='hero image'
          />
          <CardHeader className='py-4'>
            <h4 className='font-semibold text-xl mb-2'>
              Middle East &amp; Far East
            </h4>
            <Separator className='h-[2px]' />
          </CardHeader>
          <CardContent>
            <ul>
              <li>one</li>
              <li>two</li>
              <li>three</li>
              <li>four</li>
              <li>five</li>
              <li>six</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default ClientFootprint;
