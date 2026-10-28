import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "@/components/icons";
import { Reveal } from "@/components/Reveal";
import { ArticleCard, CtaBand, JsonLd } from "@/components/sections";
import { articles, formatDate, getArticle, type Block } from "@/content/insights";
import { absoluteUrl, site } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return {
    title: a.title,
    description: a.excerpt,
    alternates: { canonical: `/insights/${a.slug}` },
    openGraph: {
      type: "article",
      publishedTime: a.published,
      images: [{ url: absoluteUrl(a.cover.src.src), alt: a.cover.alt }],
    },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return <h2 key={i}>{block.text}</h2>;
    case "ul":
      return (
        <ul key={i}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote key={i}>
          <p>{block.text}</p>
        </blockquote>
      );
    default:
      return <p key={i}>{block.text}</p>;
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: article.title,
          description: article.excerpt,
          datePublished: article.published,
          image: absoluteUrl(article.cover.src.src),
          author: { "@type": "Organization", name: site.name },
          publisher: { "@type": "Organization", name: site.name },
          mainEntityOfPage: `${site.url}/insights/${article.slug}`,
        }}
      />

      <article>
        <header className="pt-32 md:pt-44">
          <div className="shell max-w-4xl">
            <Link href="/insights" className="link-draw inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-ink">
              <ArrowLeft width={16} height={16} /> All insights
            </Link>
            <p className="eyebrow mt-10 text-teak motion-safe:animate-rise">
              {article.category} · {article.readMinutes} min read
            </p>
            <h1 className="display-lg mt-6 motion-safe:animate-rise [animation-delay:80ms]">{article.title}</h1>
            <p className="lede mt-8 text-ink-soft motion-safe:animate-rise [animation-delay:160ms]">{article.excerpt}</p>
            <p className="mt-8 text-sm text-muted">
              By {site.name} · <time dateTime={article.published}>{formatDate(article.published)}</time>
            </p>
          </div>
          <div className="shell mt-14 max-w-6xl">
            <div className="relative aspect-[16/10] overflow-hidden bg-sand">
              <Image
                src={article.cover.src}
                alt={article.cover.alt}
                fill
                priority
                placeholder="blur"
                sizes="(min-width: 1152px) 1072px, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </header>

        <div className="shell max-w-3xl py-20 md:py-28">
          <div className="prose-article">{article.body.map(renderBlock)}</div>
        </div>
      </article>

      <section className="border-t border-stone bg-sand/60 py-24 md:py-32">
        <div className="shell">
          <h2 className="display-md">Keep reading</h2>
          <ul className="mt-14 grid gap-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {related.map((a, i) => (
              <Reveal as="li" key={a.slug} delay={i * 90}>
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
