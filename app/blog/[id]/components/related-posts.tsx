"use client";
import BlogCard from "@/components/blog-card";
import { getPosts } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import format from "date-fns/format";
import React from "react";

function RelatedPosts() {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  if (isLoading) {
    return <p>Loading...</p>;
  }
  const posts = data.map((post: any) => {
    return (
      <BlogCard
        imageUrl={post.imageUrl}
        title={post.title}
        author='Jonh Wick'
        date={format(new Date(post.date), "dd MMM yyyy")}
        body={post.body}
        id={post.id}
      />
    );
  });
  return posts.slice(0, 3);
}

export default RelatedPosts;
