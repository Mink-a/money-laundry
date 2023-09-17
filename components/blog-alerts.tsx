"use client";
import React from "react";
import BlogCard from "./blog-card";
import { Button, buttonVariants } from "./ui/button";
import { MoveLeftIcon, MoveRight, MoveRightIcon } from "lucide-react";
import Link from "next/link";
// import { data } from "../data/data";
import format from "date-fns/format";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/lib/api";

function BlogAlerts() {
  const { data } = useQuery({ queryKey: ["posts"], queryFn: getPosts });
  if (!data) {
    return;
  }
  return (
    <>
      <div className='max-w-screen-xl px-4 py-20 mx-auto space-y-10'>
        <h1 className='mb-4 text-2xl text-center font-semibold leading-tight md:leading-snug xl:leading-snug md:text-3xl xl:text-4xl dark:text-white'>
          KBZ Money Alerts
        </h1>
        <div className='grid lg:grid-cols-3 gap-4'>
          {data.map((post: any) => {
            let date = format(new Date(post.date), "dd MMM yyyy");
            return (
              <BlogCard
                imageUrl={post.imageUrl}
                title={post.title}
                author="John Wick"
                date={date}
                body={post.body}
                id={post.id}
              />
            );
          })}
        </div>
        <div className='text-center'>
          <Link href='/blog' className={buttonVariants({ variant: "default" })}>
            Load More
            <MoveRight className='ml-2 h-4 w-4' />
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogAlerts;
