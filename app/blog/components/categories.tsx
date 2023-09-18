"use client";
import { getPosts } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function Categories() {
  const { data, isLoading } = useQuery({
    queryKey: ["posts", "recent"],
    queryFn: getPosts,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const result: { [key: string]: number } = {};

  data?.forEach((item: any) => {
    const cat = item.category;
    result[cat] = (result[cat] || 0) + 1;
  });

  return (
    <div>
      <div className='pt-3 flex items-center'>
        <p className=''>Alerts </p>
        <div className='ml-auto'>{result["0"]}</div>
      </div>
      <div className='pt-3 flex items-center'>
        <p className=''>Company News </p>
        <div className='ml-auto'>{result["1"]}</div>
      </div>
    </div>
  );
}

export default Categories;
