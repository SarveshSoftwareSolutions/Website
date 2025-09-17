import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features?: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, features }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-green-100 dark:border-gray-700"
    >
      <div className="text-green-500 mb-4 flex justify-center">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3 text-center">
        {title}
      </h3>
      
      <p className="text-slate-600 dark:text-gray-300 mb-4 text-center">
        {description}
      </p>
      
      {features && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-slate-500 dark:text-gray-400 flex items-center">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 w-full bg-green-50 hover:bg-green-100 dark:bg-gray-700 dark:hover:bg-gray-600 text-green-600 dark:text-green-400 font-medium py-2 px-4 rounded-lg transition-colors duration-300"
      >
        Learn More
      </motion.button>
    </motion.div>
  );
};

export default ServiceCard;