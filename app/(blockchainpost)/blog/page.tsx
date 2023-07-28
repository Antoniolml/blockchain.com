"use client";

import { allPosts } from "@/.contentlayer/generated";
import BlogSection from "@/components/BlogSection";
import Container from "@/components/Container";
import { H1Heading } from "@/components/H1";
import { compareDesc } from "date-fns";
import React, { useState } from "react";

const BlogIndexPage = () => {
  const [searchValue, setSearchValue] = useState("");
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    })
    .filter((post) => {
      if (searchValue === "") {
        return post;
      } else if (
        post.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        post.description.toLowerCase().includes(searchValue.toLowerCase())
      ) {
        return post;
      }
    });

  return (
    <Container className="py-24">
      <div className="flex max-w-4xl flex-col items-start justify-center animate-in slide-in-from-left duration-500">
        <H1Heading className="mb-4 md:mb-6">
          El futuro de la Blockchain y las crytomonedas...
        </H1Heading>
        <p className="max-w-2xl text-2xl leading-8">
          En los siguienes artículos aprenderás de una manera sencilla y facil
          de entender, todo lo relacionado con la tecnología Blockchain y las
          criptomonedas.
        </p>
      </div>
      <div className="mt-10 mb-24 max-w-3xl animate-in slide-in-from-right duration-500">
        <input
          type="text"
          name="search"
          id="search"
          onChange={(e) => setSearchValue(e.target.value)}
          aria-label="Search all articles"
          placeholder="Buscar articulos..."
          className="block w-full rounded-md border border-gray-500 bg-light tracking-wide focus:border-gray-400 focus:ring-slate-500 text-black"
        />
      </div>
      <BlogSection posts={posts} />
    </Container>
  );
};

export default BlogIndexPage;
