"use client";
import { getPostById } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { ChevronRightIcon } from "lucide-react";
import React, { useState } from "react";

function Title({ params }: { params: any }) {
  let title = "";
  const { data, isLoading } = useQuery({
    queryKey: ["posts", params.id],
    queryFn: () => getPostById(params.id),
  });

  if (isLoading) {
    title = "Loading...";
  } else {
    title = data?.title;
  }

  if (params === "Blog") {
    title = "Blog";
  }

  return (
    <div className="relative bg-[#06458D]">
      <div className="max-w-screen-xl px-4 py-16 mx-auto text-center text-white space-y-3">
        <h1 className=" text-xl font-semibold leading-tight md:leading-snug xl:leading-snug md:text-2xl xl:text-3xl dark:text-white">
          {title}
        </h1>
        <div className="text-center space-x-4">
          <span>Home</span>
          <ChevronRightIcon className="inline w-4 h-4" />
          <span>Blog</span>
        </div>
      </div>
      <div className="absolute hidden lg:block bg-no-repeat -bottom-6 left-0 bg-[url('/left-leaf.png')] w-full h-full"></div>
      <div className="absolute hidden lg:block bg-no-repeat -bottom-4 left-0 bg-right-bottom bg-[url('/right-leaf.png')] w-full h-full"></div>
      {/* <div className="absolute hidden lg:block bg-no-repeat -bottom-4 left-0 bg-right-bottom bg-[url('/right-leaf.png')] w-full h-full"></div> */}
    </div>
  );
}

export default Title;
