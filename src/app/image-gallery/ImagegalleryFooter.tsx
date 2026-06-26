import React from 'react';

export default function ImagegalleryFooter() {
  return (
    <footer id="footer-board" className="w-full py-4 bg-black border-t border-amber-500/20 relative z-10 mt-auto">
      <div className="flex flex-col items-center justify-center px-4 max-w-[1440px] mx-auto gap-2">
        
        {/* Top Text */}
        <div className="font-inter text-[11px] md:text-[12px] text-amber-500/80 text-center tracking-widest uppercase">
          © 2025 Solar Energy Society of India · VIT Student Chapter
        </div>

        {/* Social Icons */}
        <div className="flex gap-5 mt-0.5">
          <a
            href="https://www.instagram.com/sesi.vit/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-amber-400 hover:scale-110 transition-all duration-300 flex items-center justify-center"
            aria-label="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
          </a>
          <a
            href="https://sesivit.wordpress.com/2025/10/16/revolutionizing-renewable-energy-the-aureus-solar-panel-innovation/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-amber-400 hover:scale-110 transition-all duration-300 flex items-center justify-center"
            aria-label="WordPress"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M7 8.5L9.5 16.5L12 11.5L14.5 16.5L17 8.5" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/sesi-vit/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-amber-400 hover:scale-110 transition-all duration-300 flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
}
