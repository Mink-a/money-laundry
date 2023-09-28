"use client";
import { getPostById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import format from "date-fns/format";
import Image from "next/image";
import React from "react";

function Blog({ params }: { params: any }) {
  const { data, isLoading } = useQuery({
    queryKey: ["posts", params.id],
    queryFn: () => getPostById(params.id),
  });
  if (isLoading) {
    return (
      <article className="col-span-3 md:col-span-2 space-y-8">
        <p>Loading...</p>
      </article>
    );
  }
  return (
    <article className="col-span-3 md:col-span-2 space-y-8">
      <h1 className="mb-4 text-2xl font-semibold leading-tight md:leading-snug xl:leading-snug md:text-3xl xl:text-4xl dark:text-white">
        {data.title}
      </h1>
      <div className="flex flex-col md:flex-row justify-center md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Image
            className="rounded-full bg-blue-400 w-10 h-10"
            src="/hero-img.png"
            width="100"
            height="100"
            alt=""
          />
          <h4>John Wick</h4>
        </div>
        <div className="flex items-center gap-4">
          <p>{format(new Date(data.date), "dd MMM yyyy")}</p>
          <p>25k views</p>
          <p>4 min read</p>
        </div>
      </div>
      <Image
        className="w-full rounded-lg aspect-video"
        src={data.imageUrl}
        width={650}
        height={470}
        alt={data.title}
      />
      <p className="">{data.body}</p>
    </article>
  );
}

export default Blog;
