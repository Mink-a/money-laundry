import Footer from "@/components/footer";
import Header from "@/components/header";
import React from "react";
import BlogList from "./components/blog-list";
import Title from "./components/title";

function BlogHome() {
  return (
    <>
      <Header />
      <main>
        <Title params='Blog' />
        <BlogList />
      </main>
      <Footer />
    </>
  );
}

export default BlogHome;
