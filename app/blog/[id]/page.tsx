"use client";
import React from "react";
import Blog from "./components/blog";
import Header from "@/components/header";
import Title from "../components/title";
import Footer from "@/components/footer";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button, buttonVariants } from "@/components/ui/button";
import BlogAlerts from "@/components/blog-alerts";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import BlogCard from "@/components/blog-card";
import { useQuery } from "@tanstack/react-query";
import { getPostById, getPosts } from "@/lib/api";
import format from "date-fns/format";

function BlogPage({ params }: { params: { id: string } }) {
  const { data } = useQuery({
    queryKey: ["posts", params.id],
    queryFn: () => getPostById(params.id),
  });
  const { data: posts } = useQuery({ queryKey: ["posts"], queryFn: getPosts });
  if (!data || !posts) {
    return;
  }
  return (
    <>
      <Header />
      <main>
        <Title title={data.title} />
        <section className='max-w-screen-xl px-4 py-20 mx-auto grid grid-cols-3 gap-10'>
          <Blog post={data} />
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
                <p className='pt-3'>Alerts</p>
                <p className='pt-3'>Company News</p>
              </CardContent>
            </Card>
            <Card className='bg-slate-100'>
              <CardHeader className='text-xl font-semibold py-3'>
                Tags
              </CardHeader>
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
              {posts.slice(0, 4).map((post: any) => {
                if (post.category === data.category) {
                  return (
                    <BlogCard
                      imageUrl={post.imageUrl}
                      title={post.title}
                      author="Jonh Wick"
                      date={format(new Date(post.date), 'dd MMM yyyy')}
                      body={post.body}
                      id={post.id}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default BlogPage;
