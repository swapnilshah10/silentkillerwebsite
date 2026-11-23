import { notFound } from "next/navigation";
import { articles, getArticle } from "@/lib/articles";
import { PlayButton, GuideLinks } from "@/components/AtomPage";

export const dynamicParams = false;

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return { title: a.title, description: a.description, alternates: { canonical: `/atom-reaction/${a.slug}` } };
}

export default async function Article({ params }) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  const ld = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    author: { "@type": "Person", name: "Swapnil Shah", url: "https://silentkillerop.me/about" },
    datePublished: "2026-11-23T00:00:00+05:30",
    dateModified: "2026-11-23T00:00:00+05:30",
    mainEntityOfPage: `https://silentkillerop.me/atom-reaction/${a.slug}`,
  };
  return (
    <main className="prose-page prose-page--wide">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <p className="prose-meta">{a.kind || "Atom Reaction guide"} · by Swapnil Shah · 23 November 2026</p>
      <h1>{a.h1}</h1>
      <p>{a.intro}</p>
      {a.sections.map((s) => (
        <section key={s.h}>
          <h2>{s.h}</h2>
          {(s.p || []).map((t, i) => <p key={i}>{t}</p>)}
          {s.ul && <ul>{s.ul.map((t) => <li key={t}>{t}</li>)}</ul>}
        </section>
      ))}
      <PlayButton>Put it into practice</PlayButton>
      <GuideLinks exclude={`/atom-reaction/${a.slug}`} />
    </main>
  );
}
