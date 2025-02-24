"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-semibold text-primary">Business Name</div>

        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-neutral">
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        <nav className="space-x-6 hidden md:flex items-center">
          <Link href="/">
            <span className="text-neutral hover:text-primary transition-colors duration-300">Home</span>
          </Link>
          <Link href="/services">
            <span className="text-neutral hover:text-primary transition-colors duration-300">Services</span>
          </Link>
          <Link href="/about">
            <span className="text-neutral hover:text-primary transition-colors duration-300">About</span>
          </Link>
          <Link href="/contact">
            <span className="text-neutral hover:text-primary transition-colors duration-300">Contact</span>
          </Link>
          <button className="bg-primary hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300">
            Get Started
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && isClient && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 w-full bg-white shadow-md p-6 z-50"
          >
            <div className="flex flex-col space-y-4">
              <Link href="/" onClick={toggleMobileMenu}>
                <span className="text-neutral hover:text-primary transition-colors duration-300 block py-2">Home</span>
              </Link>
              <Link href="/services" onClick={toggleMobileMenu}>
                <span className="text-neutral hover:text-primary transition-colors duration-300 block py-2">Services</span>
              </Link>
              <Link href="/about" onClick={toggleMobileMenu}>
                <span className="text-neutral hover:text-primary transition-colors duration-300 block py-2">About</span>
              </Link>
              <Link href="/contact" onClick={toggleMobileMenu}>
                <span className="text-neutral hover:text-primary transition-colors duration-300 block py-2">Contact</span>
              </Link>
              <button className="bg-primary hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-300" onClick={toggleMobileMenu}>
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isMobileMenuOpen && isClient && (
        <div
          onClick={toggleMobileMenu}
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
        ></div>
      )}
    </header>
  );
}