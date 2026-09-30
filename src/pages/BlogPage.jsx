import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import { ARTICLES } from '../data/articles';

export default function BlogPage() {
  return <div className="pb-20"><PageBanner bgImage="/images/banner-about.jpg" badge="Ideas for a brighter home" title="Cleaning tips &" highlightText="Guides" breadcrumb="Blog" description="Useful ideas for caring for your home, furniture and holiday property." />
    <section className="py-14 sm:py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="mb-10 flex items-center gap-3"><span className="rounded-xl bg-emerald-100 p-3 text-emerald-800"><BookOpen className="h-5 w-5" /></span><div><p className="text-xs font-bold uppercase tracking-[.18em] text-emerald-700">The Golden Home journal</p><h2 className="mt-1 font-serif text-3xl font-bold text-slate-900">Ideas, care and useful checklists</h2></div></div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{ARTICLES.map((article) => <article key={article.slug} className="group overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="h-56 overflow-hidden"><img src={article.image} alt={article.title} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div><div className="space-y-3 p-6"><span className="text-xs font-bold uppercase tracking-wider text-emerald-700">{article.category}</span><h3 className="font-serif text-xl font-bold leading-snug text-slate-900">{article.title}</h3><p className="text-sm leading-6 text-slate-600">{article.intro}</p><Link to={`/blog/${article.slug}`} className="inline-flex items-center gap-2 pt-1 text-sm font-bold text-emerald-800">Read article <ArrowRight className="h-4 w-4" /></Link></div></article>)}</div>
    </div></section>
  </div>;
}
