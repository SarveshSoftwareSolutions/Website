import React from 'react';
import { motion } from 'framer-motion';
import TeamCard from '../components/TeamCard';
import { 
  RocketLaunchIcon, 
  GlobeAltIcon, 
  CloudIcon,
  CalendarDaysIcon 
} from '@heroicons/react/24/outline';

const About: React.FC = () => {
  const timeline = [
    {
      year: '2024',
      title: 'Founded',
      description: 'Started with a vision to digitize industrial operations',
      icon: <RocketLaunchIcon className="h-6 w-6" />
    },
    {
      year: '2024',
      title: 'Serving Global Clients',
      description: 'Expanded to serve manufacturing companies worldwide',
      icon: <GlobeAltIcon className="h-6 w-6" />
    },
    {
      year: '2025',
      title: 'Cloud Expansion',
      description: 'Launching comprehensive cloud and IoT solutions',
      icon: <CloudIcon className="h-6 w-6" />
    }
  ];

  const team = [
    {
      name: 'Silambarasan ',
      role: 'Automation Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      bio: 'Expert in PLC systems with 10+ years in industrial automation and manufacturing processes.'
    },
    {
      name: 'Sarah Kim',
      role: 'Software Architect',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b9511daf?w=200&h=200&fit=crop&crop=face',
      bio: 'Full-stack developer specializing in scalable industrial software solutions and system integration.'
    },
    {
      name: 'Marcus Johnson',
      role: 'Cloud Specialist',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      bio: 'Cloud infrastructure expert focused on secure, scalable IoT and manufacturing data platforms.'
    },
    {
      name: 'Emma Chen',
      role: 'Quality Assurance Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      bio: 'Quality systems specialist ensuring compliance and reliability in industrial software solutions.'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We continuously push the boundaries of industrial technology to deliver cutting-edge solutions.'
    },
    {
      title: 'Reliability',
      description: 'Our systems are built for 24/7 operation with enterprise-grade security and uptime guarantees.'
    },
    {
      title: 'Partnership',
      description: 'We work closely with clients to understand their unique challenges and deliver tailored solutions.'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in code quality, system design, and customer service.'
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
              About <span className="text-green-500">Sarvesh Software Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              We build digital bridges between machines and business systems
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-8">
              Our Mission
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed mb-8">
              At Sarvesh Software Solutions, we believe that every manufacturing operation deserves complete visibility 
              and control over their processes. We specialize in creating seamless connections between 
              industrial equipment and business systems, enabling manufacturers to make data-driven decisions 
              that improve efficiency, quality, and profitability.
            </p>
            <p className="text-lg text-slate-600 dark:text-gray-300 leading-relaxed">
              Our comprehensive solutions span from shop floor to top floor, providing real-time insights 
              and automated workflows that transform traditional manufacturing into smart, connected operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-green-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300">
              From startup to industry leader
            </p>
          </motion.div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className={`bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg ${
                    index % 2 === 0 ? 'mr-8' : 'ml-8'
                  }`}>
                    <div className="flex items-center mb-4">
                      <div className="text-green-500 mr-3">
                        {item.icon}
                      </div>
                      <span className="text-2xl font-bold text-green-500">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 dark:text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  {index < timeline.length - 1 && (
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-green-200 dark:bg-green-700"></div>
                  )}
                </div>
                
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-green-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300">
              Industry experts committed to your success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TeamCard {...member} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;