import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import RecentPost from "./recent-post";
import TagsBox from "./tags-box";
import LatestBlogs from "./latest-blog";
import Categories from "./categories";

function BlogList() {
  return (
    <div className='max-w-screen-xl px-4 py-20 mx-auto'>
      <h1 className='mb-12 text-2xl text-center font-semibold leading-tight md:leading-snug xl:leading-snug md:text-3xl xl:text-4xl dark:text-white'>
        Latest News
      </h1>
      <div className=' grid grid-cols-3'>
        <div className='space-y-10 col-span-2'>
          <LatestBlogs />
        </div>
        <div className='col-span-1 hidden md:block space-y-7'>
          <Input placeholder='Search Here' className='text-base h-12' />
          <Card className='bg-slate-100'>
            <CardHeader className='text-xl font-semibold py-3'>
              Categories
            </CardHeader>
            <CardContent className='bg-white'>
              <Categories />
            </CardContent>
          </Card>
          <Card className='bg-slate-100'>
            <CardHeader className='text-xl font-semibold py-3'>
              Recent Posts
            </CardHeader>
            <CardContent className='bg-white'>
              <RecentPost />
            </CardContent>
          </Card>
          <Card className='bg-slate-100'>
            <CardHeader className='text-xl font-semibold py-3'>Tags</CardHeader>
            <CardContent className='bg-white'>
              <TagsBox />
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
