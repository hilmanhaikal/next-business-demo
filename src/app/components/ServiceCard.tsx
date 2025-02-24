'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.JSX.Element;
  link: string;
}

export default function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Initial animation state
      animate={{ opacity: 1, y: 0 }} // Animation target state
      transition={{ duration: 0.5 }} // Animation duration
      whileHover={{ scale: 1.05, boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)' }} // Hover animation
      className="bg-white rounded-lg shadow-lg p-8 transition-shadow duration-300"
    >
      {icon && <div className="mb-6 text-4xl text-primary">{icon}</div>}
      <h3 className="text-2xl font-semibold text-neutral mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link href={link}>
        <span className="text-primary hover:underline transition-colors duration-300">Learn More</span>
      </Link>
    </motion.div>
  );
}