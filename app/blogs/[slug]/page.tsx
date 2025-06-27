import { notFound } from "next/navigation"
import BlogDetail from "@/components/BlogDetail"
import { blogPosts } from "@/data/blogPosts"

export async function generateStaticParams() {
  // Pre-generate each slug at build time (or on-demand with ISR)
  return blogPosts.map(post => ({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: [{ url: post.image }],
    },
  }
}

export default function BlogSlugPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)
  if (!post) return notFound()
  return <BlogDetail post={post} />
}
