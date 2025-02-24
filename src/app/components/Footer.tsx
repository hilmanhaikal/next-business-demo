// components/Footer.tsx
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import icons

export default function Footer() {
  return (
    <footer className="bg-neutral text-light py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Your Company</h4>
            <p className="text-sm">
              123 Main Street, Kuala Lumpur, Malaysia
              <br />
              test123@example.com
              <br />
              +60 (123) 456-7890
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="hover:underline">About Us</span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="hover:underline">Contact Us</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="hover:underline">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy">
                  <span className="hover:underline">Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service">
                  <span className="hover:underline">Terms of Service</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-light hover:text-primary">
                <FaFacebook />
              </a>
              <a href="#" className="text-light hover:text-primary">
                <FaTwitter />
              </a>
              <a href="#" className="text-light hover:text-primary">
                <FaInstagram />
              </a>
              <a href="#" className="text-light hover:text-primary">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Your Business Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}