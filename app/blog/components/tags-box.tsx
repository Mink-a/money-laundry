"use client";
import { getPosts } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";

function TagsBox() {
  const { data, isLoading } = useQuery({
    queryKey: ["posts", "recent"],
    queryFn: getPosts,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const tagsArray = [
    ...new Set(data?.map((item: any) => item.tags).flat()),
  ] as unknown as string[];

  const tags = tagsArray.map((tag) => {
    return <div key={tag} className='px-3 py-2 bg-slate-100 rounded-lg'>{tag}</div>;
  });
  return <div className='pt-6 flex gap-3 flex-wrap'>{tags}</div>;
}

export default TagsBox;
