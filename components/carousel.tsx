"use client";
import { getPosts } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BlogCard from "./blog-card";
import format from "date-fns/format";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function ProductCarousel() {
  const { data } = useQuery({ queryKey: ["posts"], queryFn: getPosts });
  if (!data) {
    return;
  }
  return (
    <Carousel responsive={responsive} ssr={true}>
      {data.map((post: any) => {
        let date = format(new Date(post.date), "dd MMM yyyy");
        return (
          <BlogCard
            imageUrl={post.imageUrl}
            title={post.title}
            author='John Wick'
            date={date}
            body={post.body}
            id={post.id}
          />
        );
      })}
    </Carousel>
  );
}

export default ProductCarousel;
