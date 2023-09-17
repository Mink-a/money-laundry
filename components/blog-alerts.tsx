import React from "react";
import BlogCard from "./blog-card";
import { Button } from "./ui/button";
import { MoveLeftIcon, MoveRightIcon } from "lucide-react";

function BlogAlerts() {
  return (
    <>
      <div className='max-w-screen-xl px-4 py-20 mx-auto space-y-10'>
        <div className='grid lg:grid-cols-3 gap-4'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
        <div className='text-center'>
          <Button className='mx-auto'>
            Load More <MoveRightIcon />
          </Button>
        </div>
      </div>
    </>
  );
}

export default BlogAlerts;
