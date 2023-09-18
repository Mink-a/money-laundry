"use client";
import BlogCard from "@/components/blog-card";
import { Button } from "@/components/ui/button";
import { getPostsByPaginate } from "@/lib/api";
import { useInfiniteQuery } from "@tanstack/react-query";
import format from "date-fns/format";
import { MoveRight } from "lucide-react";
import React from "react";

function LatestBlogs() {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["posts", "infinite"],
      queryFn: ({ pageParam = 1 }) => getPostsByPaginate(pageParam),
      getNextPageParam: (prev) => prev.nextPage,
    });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const blogs = data?.pages
    .flatMap((data) => data.posts)
    .map((post) => {
      let date = format(new Date(post.date), "dd MMM yyyy");
      return (
        <BlogCard
          key={post.id}
          imageUrl={post.imageUrl}
          title={post.title}
          author='Jonh Wick'
          date={date}
          body={post.body}
          id={post.id}
        />
      );
    });
  return (
    <>
      <div className='flex gap-4'>
        <div className='flex flex-wrap gap-3'>{blogs}</div>
      </div>
      <div className='text-center'>
        <Button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load More"
            : "Nothing more to load"}{" "}
          <MoveRight className='ml-2 h-4 w-4' />
        </Button>
      </div>
    </>
  );
}

export default LatestBlogs;
