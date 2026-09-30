import React from 'react';
import { Link } from 'react-router-dom';

export default function FloatingWhatsApp() {
  return <Link to="/contact" aria-label="Contact Golden Home" title="Contact Golden Home" className="fixed bottom-4 right-4 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#174b32]/25 transition duration-200 hover:-translate-y-1 hover:bg-[#20bd5a] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#174b32] sm:bottom-6 sm:right-6 sm:h-16 sm:w-16">
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-8 w-8 fill-current sm:h-9 sm:w-9">
      <path d="M16.03 3C8.87 3 3.04 8.75 3.04 15.82c0 2.27.61 4.5 1.78 6.45L3 29l6.96-1.79a13.2 13.2 0 0 0 6.06 1.46h.01c7.16 0 13-5.75 13-12.82 0-3.43-1.35-6.66-3.8-9.09A12.94 12.94 0 0 0 16.03 3Zm0 23.5h-.01c-1.88 0-3.72-.5-5.33-1.45l-.38-.22-4.13 1.06 1.1-4.01-.25-.41a10.56 10.56 0 0 1-1.62-5.65c0-5.82 4.77-10.55 10.63-10.55 2.84 0 5.51 1.1 7.52 3.1a10.42 10.42 0 0 1 3.12 7.45c0 5.82-4.77 10.55-10.65 10.55Zm5.84-7.9c-.32-.16-1.9-.93-2.2-1.04-.3-.11-.52-.16-.74.16-.22.32-.84 1.04-1.03 1.25-.19.22-.38.24-.7.08-.33-.16-1.39-.51-2.64-1.63-.98-.87-1.64-1.94-1.83-2.27-.19-.32-.02-.5.14-.66.15-.14.33-.38.49-.57.16-.19.22-.32.33-.54.11-.22.05-.41-.03-.57-.08-.16-.73-1.73-1-2.37-.26-.62-.53-.54-.73-.55h-.63c-.22 0-.57.08-.87.41-.3.32-1.14 1.1-1.14 2.67s1.17 3.1 1.33 3.32c.16.22 2.3 3.48 5.56 4.88.78.33 1.39.53 1.87.68.78.24 1.49.21 2.05.13.63-.09 1.9-.77 2.17-1.52.27-.76.27-1.4.19-1.53-.08-.14-.3-.22-.62-.38Z" />
    </svg>
  </Link>;
}
