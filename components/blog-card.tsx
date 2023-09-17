import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ClockIcon, MoveRight } from "lucide-react";

function BlogCard() {
  return (
    <div>
      <Card className='w-full mb-3 border-0 shadow-lg h-fit'>
        <Image
          className='bg-blue-400 rounded-t-lg w-full'
          src='/hero-img.png'
          width={650}
          height={470}
          alt='hero image'
        />
        <CardHeader className='py-4'>
          <h4 className='font-semibold text-xl mb-2'>AML Technology</h4>
        </CardHeader>
        <CardContent>
          <div className='flex justify-between items-center py-2'>
            <div className='flex items-center gap-4'>
              <Image
                className='rounded-full bg-blue-400 w-10 h-10'
                src='/hero-img.png'
                width='100'
                height='100'
                alt=''
              />
              <h4>Name here</h4>
            </div>
            <div className='flex items-center gap-2'>
              <ClockIcon className='w-4 h-4' /> 22 Dec 2022
            </div>
          </div>
          <p className=''>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            tenetur nihil, temporibus et sit in. Distinctio, eaque dignissimos
            libero atque provident odit neque reiciendis?
          </p>
          <Link href='#'>
            <Button variant='link' className='px-0 text-[#06458D]'>
              Read More <MoveRight className='ml-2 h-4 w-4' />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

export default BlogCard;
