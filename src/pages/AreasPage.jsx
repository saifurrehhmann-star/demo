import React from 'react';
import PageBanner from '../components/PageBanner';
import CoverageMap from '../components/CoverageMap';

export default function AreasPage({ onOpenBooking }) {
  return <div className="pb-12"><PageBanner bgImage="/images/banner-contact.jpg" badge="Dubai service areas" title="Cleaning across" highlightText="Dubai" breadcrumb="Areas We Serve" description="Check your community and contact our team to arrange a cleaning visit." /><CoverageMap onOpenBooking={onOpenBooking} /></div>;
}
