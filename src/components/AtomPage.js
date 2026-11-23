import Link from "next/link";
import { PLAY_URL, guides, faqs } from "@/lib/atom";

export function PlayButton({ children = "Play Atom Reaction free" }) {
  return (
    <p>
      <a className="game-link" href={PLAY_URL} target="_blank" rel="noopener noreferrer">{children} &rarr;</a>
    </p>
  );
}

export function GuideLinks({ exclude }) {
  return (
    <>
      <h2>More Atom Reaction guides</h2>
      <ul>
        {guides.filter((g) => g.href !== exclude).map((g) => (
          <li key={g.href}><Link href={g.href}><strong>{g.title}</strong></Link>: {g.blurb}</li>
        ))}
      </ul>
    </>
  );
}

export function FaqList({ items = faqs }) {
  return (
    <>
      {items.map((f) => (
        <div key={f.q}>
          <h3 style={{ fontSize: "1.15rem", marginTop: "1.4rem", color: "var(--gold-soft)" }}>{f.q}</h3>
          <p>{f.a}</p>
        </div>
      ))}
    </>
  );
}

export function FaqJsonLd({ items = faqs }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />;
}
