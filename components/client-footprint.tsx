import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { CircuitBoardIcon, MoveRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Separator } from "./ui/separator";

function ClientFootprint() {
  return (
    <section className='max-w-screen-xl px-4 py-20 mx-auto space-y-10'>
      <div className='max-w-2xl mx-auto text-center'>
        <h1 className='mb-4 text-2xl font-semibold leading-tight md:leading-snug xl:leading-snug md:text-3xl xl:text-4xl dark:text-white'>
          Our Clients and Footprint
        </h1>
        <p className='leading-loose mb-3'>
          Rhoncus mattis rhoncus urna neque viverra justo nec. Magna etiam
          tempor orci eu. Praesent semper feugiat nibh sed pulvinar proin
          gravida hendrerit lectus. Cicero&apos;s De Finibus Bonorum et Malorum
          for use in a type specimen book.
        </p>
      </div>
      <div className='grid lg:grid-cols-4 gap-4'>
        <Card className='w-full mb-3 border-0 shadow-lg h-fit'>
          <Image
            className='bg-[#FFEFD8] rounded-t-lg w-full p-7 h-56'
            src='/north-america.png'
            width={150}
            height={100}
            alt='north image'
          />
          <CardHeader className='py-4'>
            <h4 className='font-semibold text-xl mb-2'>AML Technology</h4>
            <Separator className='h-[2px]' />
          </CardHeader>
          <CardContent>
            <ul>
              <li>United States</li>
              <li>Mexico</li>
              <li>Dominican Republic</li>
              <li>Jamaica</li>
            </ul>
          </CardContent>
        </Card>
        <Card className='w-full mb-3 border-0 shadow-lg h-fit'>
          <Image
            className='bg-[#F2FBFF] rounded-t-lg w-full h-56 p-7 px-20'
            src='/central.png'
            width={150}
            height={100}
            alt='central image'
          />
          <CardHeader className='py-4'>
            <h4 className='font-semibold text-xl mb-2'>
              Central &amp; South America
            </h4>
            <Separator className='h-[2px]' />
          </CardHeader>
          <CardContent>
            <ul>
              <li>Costa Rica</li>
              <li>El Salvador</li>
              <li>Panama</li>
              <li>Venezuela</li>
              <li>Ecuador</li>
              <li>Chile</li>
              <li>Argentina</li>
              <li>Colombia</li>
              <li>Uruguay</li>
            </ul>
          </CardContent>
        </Card>
        <Card className='w-full mb-3 border-0 shadow-lg h-fit'>
          <Image
            className='bg-[#FCEBFF] rounded-t-lg w-full p-7 h-56'
            src='/europe.png'
            width={150}
            height={100}
            alt='europe image'
          />
          <CardHeader className='py-4'>
            <h4 className='font-semibold text-xl mb-2'>Europe &amp; Africa</h4>
            <Separator className='h-[2px]' />
          </CardHeader>
          <CardContent>
            <ul>
              <li>United Kingdom</li>
              <li>Spain</li>
              <li>Bulgaria</li>
              <li>Ethiopia</li>
              <li>Somalia</li>
              <li>Cote de Ivory</li>
              <li>Djibouti</li>
            </ul>
          </CardContent>
        </Card>
        <Card className='w-full mb-3 border-0 shadow-lg h-fit'>
          <Image
            className='bg-[#E1F6EF] rounded-t-lg w-full p-7 h-56'
            src='/middle.png'
            width={150}
            height={100}
            alt='middle image'
          />
          <CardHeader className='py-4'>
            <h4 className='font-semibold text-xl mb-2'>
              Middle East &amp; Far East
            </h4>
            <Separator className='h-[2px]' />
          </CardHeader>
          <CardContent>
            <ul>
              <li>Israel</li>
              <li>Saudi Arabia</li>
              <li>Dubai</li>
              <li>Philippines</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default ClientFootprint;
