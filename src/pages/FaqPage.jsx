import React from 'react';
import PageBanner from '../components/PageBanner';
import FaqSection from '../components/FaqSection';

export default function FaqPage() {
  return <div className="pb-12"><PageBanner bgImage="/images/banner-services.jpg" badge="Helpful answers" title="Frequently Asked" highlightText="Questions" breadcrumb="FAQs" description="Find clear answers about cleaning services, booking and the areas we serve." /><FaqSection /></div>;
}
