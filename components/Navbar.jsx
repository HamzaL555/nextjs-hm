'use client';

import { useState, useEffect } from 'react';
import { Search, User, Heart, ShoppingBag, ChevronLeft, ChevronRight, X, Menu } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Brands', href: '#' },
  { label: 'The Edits', href: '#' },
  { label: 'Earrings', href: '#' },
  { label: 'Necklaces', href: '#' },
  { label: 'Rings', href: '#' },
  { label: 'Bracelets', href: '#' },
  { label: 'Gifts', href: '#' },
  { label: 'Personalized', href: '#' },
];

const ANNOUNCEMENTS = [
  'Free Home Shipping above 5000',
  'New Collection: Summer 2024 Arrivals',
  'Use code JEWEL10 for 10% off your first order',
];

const CURRENCIES = ['India (INR ₹)', 'UAE (AED د.إ)', 'USA (USD $)', 'UK (GBP £)'];

export default function Navbar() {
  const [announcementIndex, setAnnounceIndex] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState('India (INR ₹)');
  const [cartCount] = useState(3);
  const [activeLink, setActiveLink] = useState(null);

  // Auto-rotate announcements
  useEffect(() => {
    const timer = setInterval(() => {
      setAnnounceIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const prevAnnouncement = () =>
    setAnnounceIndex((prev) => (prev - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length);
  const nextAnnouncement = () =>
    setAnnounceIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);

  return (
    <>
      {/* ────────────────────────────────────────────────────────────── */}
      {/* 1. Announcement Bar */}
      {/* ────────────────────────────────────────────────────────────── */}
      <div style={{ backgroundColor: '#1a2332' }} className="text-white text-sm py-2.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <button
            onClick={prevAnnouncement}
            className="p-1 hover:opacity-70 transition-opacity flex-shrink-0"
            aria-label="Previous announcement"
          >
            <ChevronLeft size={16} />
          </button>

          <div className="flex-1 text-center overflow-hidden">
            <span
              key={announcementIndex}
              className="inline-block"
              style={{ animation: 'fadeInUp 0.4s ease' }}
            >
              {ANNOUNCEMENTS[announcementIndex]}
            </span>
          </div>

          <button
            onClick={nextAnnouncement}
            className="p-1 hover:opacity-70 transition-opacity flex-shrink-0"
            aria-label="Next announcement"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────── */}
      {/* 2. Main Header */}
      {/* ────────────────────────────────────────────────────────────── */}
      <header style={{ backgroundColor: '#faf6f0' }} className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 gap-4">

            {/* ── Left: Search ── */}
            <div className="flex-1 flex items-center">
              {searchOpen ? (
                <div className="flex items-center gap-2 w-full max-w-xs">
                  <div
                    className="flex items-center gap-2 border-b border-gray-400 pb-1 w-full"
                    style={{ color: '#1a2332' }}
                  >
                    <Search size={16} className="flex-shrink-0 opacity-60" />
                    <input
                      autoFocus
                      type="text"
                      value={searchValue}
                      onChange={(e) => setSearchValue(e.target.value)}
                      placeholder="Search jewellery..."
                      className="bg-transparent outline-none text-sm flex-1"
                      style={{ color: '#1a2332' }}
                    />
                    <button onClick={() => { setSearchOpen(false); setSearchValue(''); }}>
                      <X size={16} className="opacity-50 hover:opacity-100" />
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setSearchOpen(true)}
                  className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
                  style={{ color: '#1a2332' }}
                >
                  <Search size={18} />
                  <span className="hidden sm:inline text-sm opacity-70">What are you looking for?</span>
                </button>
              )}
            </div>

            {/* ── Center: Logo ── */}
            <div className="flex-shrink-0">
              <a href="#" className="block">
                <div
                  className="text-2xl font-bold tracking-wide"
                  style={{
                    color: '#1a2332',
                    fontFamily: 'Georgia, serif',
                    letterSpacing: '0.05em',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      borderTop: '2px solid #c8a96e',
                      borderLeft: '2px solid #c8a96e',
                      paddingTop: '2px',
                      paddingLeft: '2px',
                      marginRight: '-1px',
                    }}
                  >
                    J
                  </span>
                  ewellery
                </div>
              </a>
            </div>

            {/* ── Right: Currency + Icons ── */}
            <div className="flex-1 flex items-center justify-end gap-4">
              {/* Currency Selector — hidden on mobile */}
              <div className="hidden md:block relative">
                <select
                  value={selectedCurrency}
                  onChange={(e) => setSelectedCurrency(e.target.value)}
                  className="bg-transparent text-xs border-none outline-none cursor-pointer pr-1 appearance-none"
                  style={{ color: '#1a2332' }}
                >
                  {CURRENCIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
                <ChevronRight size={10} className="inline opacity-50 rotate-90 ml-0.5" />
              </div>

              {/* Account */}
              <button
                className="p-1 hover:opacity-70 transition-opacity"
                style={{ color: '#1a2332' }}
                aria-label="Account"
              >
                <User size={20} />
              </button>

              {/* Wishlist */}
              <button
                className="p-1 hover:opacity-70 transition-opacity"
                style={{ color: '#1a2332' }}
                aria-label="Wishlist"
              >
                <Heart size={20} />
              </button>

              {/* Cart */}
              <button
                className="p-1 hover:opacity-70 transition-opacity relative"
                style={{ color: '#1a2332' }}
                aria-label="Cart"
              >
                <ShoppingBag size={20} />
                {cartCount > 0 && (
                  <span
                    className="absolute -top-1 -right-1 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center"
                    style={{ backgroundColor: '#1a2332', fontSize: '10px' }}
                  >
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Hamburger — mobile only */}
              <button
                className="md:hidden p-1"
                style={{ color: '#1a2332' }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Menu"
              >
                <Menu size={22} />
              </button>
            </div>

          </div>
        </div>

        {/* ────────────────────────────────────────────────────────────── */}
        {/* 3. Navigation Links — desktop */}
        {/* ────────────────────────────────────────────────────────────── */}
        <nav className="hidden md:block border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <ul className="flex items-center justify-center gap-8 h-10">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setActiveLink(link.label)}
                    className="text-sm transition-all duration-200 relative pb-1"
                    style={{
                      color: activeLink === link.label ? '#c8a96e' : '#1a2332',
                      fontFamily: 'Georgia, serif',
                      letterSpacing: '0.02em',
                    }}
                    onMouseEnter={(e) => {
                      if (activeLink !== link.label) {
                        e.currentTarget.style.color = '#c8a96e';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeLink !== link.label) {
                        e.currentTarget.style.color = '#1a2332';
                      }
                    }}
                  >
                    {link.label}
                    {activeLink === link.label && (
                      <span
                        className="absolute bottom-0 left-0 w-full h-0.5"
                        style={{ backgroundColor: '#c8a96e' }}
                      />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* ────────────────────────────────────────────────────────────── */}
      {/* 4. Mobile Menu Drawer */}
      {/* ────────────────────────────────────────────────────────────── */}
      {mobileMenuOpen && (
        <div
          className="md:hidden border-b border-gray-200 py-4 px-6"
          style={{ backgroundColor: '#faf6f0' }}
        >
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => { setActiveLink(link.label); setMobileMenuOpen(false); }}
                  className="text-sm block py-1"
                  style={{
                    color: activeLink === link.label ? '#c8a96e' : '#1a2332',
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            {/* Currency on mobile */}
            <li className="pt-2 border-t border-gray-200">
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
                className="bg-transparent text-sm outline-none w-full"
                style={{ color: '#1a2332' }}
              >
                {CURRENCIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </li>
          </ul>
        </div>
      )}

      {/* ────────────────────────────────────────────────────────────── */}
      {/* CSS Animations */}
      {/* ────────────────────────────────────────────────────────────── */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
