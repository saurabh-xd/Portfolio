import Container from "@/components/common/Container";
import { getBlogFrontMatterBySlug, getSingleBlog } from "@/lib/mdx";
import { redirect } from "next/navigation";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const frontmatter = await getBlogFrontMatterBySlug(slug);

  if (!frontmatter) {
    return {
      title: "Blog not found",
    };
  }

  return {
    title: frontmatter.title + " - Saurabh Garkoti",
    description: frontmatter.description,
  };
}

async function SingleBlogPage({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const slug = (await params).slug;
  const blog = await getSingleBlog(slug);

  if (!blog) {
    redirect("/blog");
  }

  const { content, frontmatter } = blog;

  return (
    <div className="min-h-screen flex items-start justify-start pt-10">
      <Container className="py-20 px-6">
        {frontmatter.image && (
          <Image
            src={frontmatter?.image}
            alt={frontmatter.title}
            width={800}
            height={400}
            className="w-full h-auto max-w-4xl rounded-lg mx-auto mb-12 shadow-2xl object-cover"
          />
        )}

        {/* Blog Header */}
        <header className="max-w-4xl mx-auto mb-12 text-center">
          <time className="text-xs text-muted-foreground font-medium tracking-wide uppercase">
            {new Date(frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            {frontmatter.title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground leading-relaxed">
            {frontmatter.description}
          </p>
          <div className="mt-8 h-px bg-border w-24 mx-auto" />
        </header>

        <article className="prose prose-lg dark:prose-invert mx-auto max-w-4xl ">
          {content}
        </article>
      </Container>
    </div>
  );
}

export default SingleBlogPage;
