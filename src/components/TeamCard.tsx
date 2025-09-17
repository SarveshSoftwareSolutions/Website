import React from 'react';
import { motion } from 'framer-motion';

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  bio: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, role, image, bio }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center"
    >
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-green-100 dark:bg-gray-700">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=10b981&color=ffffff&size=96`;
          }}
        />
      </div>
      
      <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-1">
        {name}
      </h3>
      
      <p className="text-green-500 font-medium mb-3">
        {role}
      </p>
      
      <p className="text-sm text-slate-600 dark:text-gray-300">
        {bio}
      </p>
    </motion.div>
  );
};

export default TeamCard;