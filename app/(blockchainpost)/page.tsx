import { allPosts } from "@/.contentlayer/generated";
import BlogSection from "@/components/BlogSection";
import Container from "@/components/Container";
import { H1Heading } from "@/components/H1";
import { compareDesc } from "date-fns";

export default function Home() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => {
      return compareDesc(new Date(a.date), new Date(b.date));
    });
  return (
    <Container as="section" className="py-12">
      <div className="py-24 md:pt-32 md:pb-24">
        <H1Heading className="animate-in slide-in-from-left duration-500">
          La Blockchain como libertad, descentralización y transparencia.
        </H1Heading>
      </div>
      <BlogSection posts={posts} />
    </Container>
  );
}
