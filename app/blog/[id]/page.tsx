import React from "react";
import Blog from "./components/blog";
import Header from "@/components/header";
import Title from "../components/title";
import Footer from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import RecentPost from "../components/recent-post";
import TagsBox from "../components/tags-box";
import RelatedPosts from "./components/related-posts";
import Categories from "../components/categories";

function BlogPage({ params }: { params: { id: string } }) {
  return (
    <>
      <Header />
      <main>
        <Title params={params} />
        <section className='max-w-screen-xl px-4 py-20 mx-auto grid grid-cols-3 gap-10'>
          <Blog params={params} />
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
              <CardHeader className='text-xl font-semibold py-3'>
                Tags
              </CardHeader>
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
                <Button className='rounded-lg bg-[#20C2FF]'>
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </section>
        <div className='bg-slate-50'>
          <div className='max-w-screen-xl px-4 py-20 mx-auto space-y-10'>
            <h1 className='mb-4 text-2xl text-center font-semibold leading-tight md:leading-snug xl:leading-snug md:text-3xl xl:text-4xl dark:text-white'>
              Related Posts
            </h1>
            <div className='grid lg:grid-cols-3 gap-4'>
              <RelatedPosts />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default BlogPage;
