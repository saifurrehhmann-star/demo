import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { ARTICLES } from '../data/articles';

export default function BlogArticlePage() {
  const { slug } = useParams();
  const article = ARTICLES.find((item) => item.slug === slug);
  if (!article) return <div className="mx-auto max-w-3xl px-4 py-32 text-center"><h1 className="text-3xl font-bold">Article not found</h1><Link to="/blog" className="mt-5 inline-flex text-emerald-700">Back to the journal</Link></div>;

  return <div className="pb-20"><PageBanner bgImage={article.image} badge={article.category} title={article.title} highlightText="" breadcrumb="Blog" description={article.intro} />
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16"><img src={article.image} alt={article.title} loading="lazy" className="mb-10 max-h-[460px] w-full rounded-3xl object-cover shadow-lg" /><div className="space-y-6 text-base leading-8 text-slate-700">{article.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
      <div className="mt-10 flex flex-wrap gap-3 border-t border-slate-200 pt-6"><Link to="/blog" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-700 transition hover:border-emerald-300 hover:text-emerald-800"><ArrowLeft className="h-4 w-4" />All articles</Link><Link to="/services" className="inline-flex items-center gap-2 rounded-xl bg-[#29945a] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#197543]">Explore services <ArrowRight className="h-4 w-4" /></Link></div>
    </article>
  </div>;
}
