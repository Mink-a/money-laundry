"use client";
import Image from "next/image";
import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "@/lib/api";

function RecentPost() {
  const { data, isLoading } = useQuery({
    queryKey: ["posts", "recent"],
    queryFn: getPosts,
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  const posts = data?.slice(0, 4).map((post: any) => {
    return (
      <div className='flex flex-row items-center gap-3 pt-3'>
        <Image
          className='rounded-full bg-sky-400 w-12 h-12'
          src={post.imageUrl}
          width={100}
          height={100}
          alt='post'
        />
        <div className='flex flex-col justify-between'>
          <h4 className='font-semibold'>{post.title}</h4>
          <div className=''>
            {formatDistanceToNow(new Date(post.date), { addSuffix: true })}
          </div>
        </div>
      </div>
    );
  });

  return posts;
}

export default RecentPost;
