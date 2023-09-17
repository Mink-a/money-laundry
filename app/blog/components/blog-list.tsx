"use client";
import BlogCard from "@/components/blog-card";
import React from "react";
import { data } from "@/data/data";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getPosts, getPostsByPaginate } from "@/lib/api";
import format from "date-fns/format";
import { MoveRight } from "lucide-react";
import RecentPost from "./recent-post";

function BlogList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["posts", "infinite"],
      queryFn: ({ pageParam = 1 }) => getPostsByPaginate(pageParam),
      getNextPageParam: (prev) => prev.nextPage,
    });
  const { data: recentPosts } = useQuery({
    queryKey: ["posts", "recent"],
    queryFn: getPosts,
  });
  if (!data || !recentPosts) {
    return;
  }

  return (
    <div className='max-w-screen-xl px-4 py-20 mx-auto'>
      <h1 className='mb-12 text-2xl text-center font-semibold leading-tight md:leading-snug xl:leading-snug md:text-3xl xl:text-4xl dark:text-white'>
        Latest News
      </h1>
      <div className=' grid grid-cols-3'>
        <div className='space-y-10 col-span-2'>
          <div className='flex gap-4'>
            <div className='flex flex-wrap gap-3'>
              {data.pages
                .flatMap((data) => data.posts)
                .map((post) => {
                  let date = format(new Date(post.date), "dd MMM yyyy");
                  return (
                    <BlogCard
                      imageUrl={post.imageUrl}
                      title={post.title}
                      author="Jonh Wick"
                      date={date}
                      body={post.body}
                      id={post.id}
                    />
                  );
                })}
            </div>
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
        </div>
        <div className='col-span-1 hidden md:block space-y-7'>
          <Input placeholder='Search Here' className='text-base h-12' />
          <Card className='bg-slate-100'>
            <CardHeader className='text-xl font-semibold py-3'>
              Categories
            </CardHeader>
            <CardContent className='bg-white'>
              <p className='pt-3'>Alerts</p>
              <p className='pt-3'>Company News</p>
            </CardContent>
          </Card>
          <Card className='bg-slate-100'>
            <CardHeader className='text-xl font-semibold py-3'>
              Recent Posts
            </CardHeader>
            <CardContent className='bg-white'>
              {recentPosts.slice(0, 3).map((post: any) => {
                return <RecentPost post={post} />;
              })}
            </CardContent>
          </Card>
          <Card className='bg-slate-100'>
            <CardHeader className='text-xl font-semibold py-3'>Tags</CardHeader>
            <CardContent className='bg-white'>
              <div className='pt-6 flex gap-3 flex-wrap'>
                <div className='px-3 py-2 bg-slate-100 rounded-lg'>
                  Money Alerts
                </div>
                <div className='px-3 py-2 bg-slate-100 rounded-lg'>News</div>
                <div className='px-3 py-2 bg-slate-100 rounded-lg'>
                  Technology
                </div>
                <div className='px-3 py-2 bg-slate-100 rounded-lg'>
                  Crypto Currency
                </div>
                <div className='px-3 py-2 bg-slate-100 rounded-lg'>
                  AML Outsourcing
                </div>
              </div>
            </CardContent>
          </Card>
          <div className='p-12 bg-[#015EB9] text-center space-y-12 rounded-lg text-white'>
            <h3 className='font-semibold text-3xl'>
              Subscribe to KBZ Money Alerts
            </h3>
            <div className='space-y-5'>
              <Input placeholder='Email Address' className='h-12 text-base' />
              <Button className='rounded-lg bg-[#20C2FF]'>Subscribe Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogList;
