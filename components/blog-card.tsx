import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ClockIcon, MoveRight } from "lucide-react";

interface BlogCardProps {
  imageUrl: string;
  title: string;
  author: string;
  date: string;
  body: string;
  id: string;
}

function BlogCard({ imageUrl, title, author, date, body, id }: BlogCardProps) {
  return (
    <div>
      <Card className='w-full lg:w-[400px] mb-3 border-0 shadow-lg h-fit'>
        <Image
          className='bg-blue-400 rounded-t-lg w-full'
          src={imageUrl}
          width={650}
          height={470}
          alt='hero image'
        />
        <CardHeader className='py-4'>
          <h4 className='font-semibold text-xl mb-2'>{title}</h4>
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
              <h4>{author}</h4>
            </div>
            <div className='flex items-center gap-2'>
              <ClockIcon className='w-4 h-4' /> {date}
            </div>
          </div>
          <p className=''>{body.slice(0, 100)} ...</p>
          <Link href={`/blog/${id}`}>
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
