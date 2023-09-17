import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import BlogList from "./components/blog-list";
import Title from "./components/title";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function BlogHome() {
  return (
    <>
      <Header />
      <main>
        <Title title='Blog' />
        <BlogList />
      </main>
      <Footer />
    </>
  );
}

export default BlogHome;
