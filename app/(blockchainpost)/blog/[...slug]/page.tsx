import { allAuthors, allPosts } from "@/.contentlayer/generated";
import React from "react";
import { notFound } from "next/navigation";
import BlogHeader from "@/components/BlogHeader";
import { formatDate } from "@/utils";
import Container from "@/components/Container";
import Alinks from "@/components/Alinks";
import MDXComponents from "@/components/MDXComponents";
import "./mdx.css";

interface SingleBlogPost {
  params: {
    slug: string[];
  };
}

export async function generateStaticParams(): Promise<
  SingleBlogPost["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

const SingleBlogPost = ({ params }: SingleBlogPost) => {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    notFound();
  }

  const authors = post.authors.map((author) =>
    allAuthors.find(({ slug }) => slug === `authors/${author}`)
  );

  return (
    <>
      <BlogHeader
        authorName={
          authors?.length ? (
            authors.map((author) => (
              <span
                key={author?._id}
                className="after:content-[',_'] last-of-type:before:content-['and_'] last-of-type:after:content-none only-of-type:before:content-none"
              >
                {author?.name}
              </span>
            ))
          ) : (
            <span />
          )
        }
        coverImageAttributionLink={post.cover_image_attribution_link}
        coverImageAttributionText={post.cover_image_attribution_text}
        date={formatDate(post.date)}
        title={post.title}
        imgSrc={post.cover_image}
        imgAlt={post.cover_image}
        readingTime={post.readingTime.text}
      />
      <Container className="flex flex-col items-center justify-start lg:flex-row lg:items-start lg:justify-between">
        <article className="max-w-full px-4 pb-8 text-white lg:max-w-3xl">
          <MDXComponents code={post.body.code} />
          <p className="mt-4 text-xl text-white">
            I would love to hear your comments, revisions, or suggestions on
            this post. Let&apos;s{" "}
            <Alinks
              dottedLine
              animatedUnderline
              href={`https://twitter.com/intent/tweet?text=${post.title}
                &url=https://ekomenyong.com/insights/${post.slugAsParams}`}
            >
              discuss it on Twitter
            </Alinks>
            !
          </p>
        </article>
      </Container>
    </>
  );
};

export default SingleBlogPost;
