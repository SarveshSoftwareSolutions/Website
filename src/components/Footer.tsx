import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold text-slate-700 dark:text-green-400 mb-4">
              Sarvesh Software Solution
            </h3>
            <p className="text-slate-600 dark:text-gray-300 mb-4">
              Building digital bridges between machines and business systems.
            </p>
            <div className="flex space-x-4">
              {/* Social Links */}
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-slate-500 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-slate-500 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-700 dark:text-green-400 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-slate-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400">
                  Our Services
                </a>
              </li>
              <li>
                <a href="/about" className="text-slate-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-slate-600 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-slate-700 dark:text-green-400 mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-slate-600 dark:text-gray-300">Chennai, India</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-slate-600 dark:text-gray-300">+91-93448-21040</span>
              </div>
              <div className="flex items-center">
                <EnvelopeIcon className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-slate-600 dark:text-gray-300">sarvesh@sarveshsoftwaresolutions.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-green-200 dark:border-gray-700">
          <p className="text-center text-slate-500 dark:text-gray-400">
            © {currentYear} Sarvesh Software Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;