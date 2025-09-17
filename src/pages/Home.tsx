import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import {
  CogIcon,
  CloudIcon,
  ChartBarIcon,
  LinkIcon,
  UsersIcon,
  ShieldCheckIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const Home: React.FC = () => {
  const services = [
    {
      title: 'Traceability Software',
      description: 'Track every part from production to delivery with complete visibility.',
      icon: <ChartBarIcon className="h-12 w-12" />,
      features: ['Real-time tracking', 'Quality assurance', 'Compliance reporting']
    },
    {
      title: 'PLC Connectors',
      description: 'Seamless integration with Siemens, Mitsubishi, and Allen-Bradley systems.',
      icon: <LinkIcon className="h-12 w-12" />,
      features: ['Multi-protocol support', 'Real-time data', 'Easy configuration']
    },
    {
      title: 'Web Platforms',
      description: 'Custom dashboards and reporting solutions for your business needs.',
      icon: <CogIcon className="h-12 w-12" />,
      features: ['Custom dashboards', 'Advanced analytics', 'Mobile responsive']
    },
    {
      title: 'Cloud Solutions',
      description: 'Secure hosting and IoT integration for modern manufacturing.',
      icon: <CloudIcon className="h-12 w-12" />,
      features: ['Secure hosting', 'IoT integration', 'Scalable infrastructure']
    }
  ];

  const stats = [
    { label: '10+ Clients', value: '10+', icon: <UsersIcon className="h-8 w-8" /> },
    { label: '100% Uptime', value: '100%', icon: <ShieldCheckIcon className="h-8 w-8" /> },
    { label: '24/7 Support', value: '24/7', icon: <ClockIcon className="h-8 w-8" /> }
  ];

  const testimonials = [
    {
      name: 'John Smith',
      company: 'Manufacturing Corp',
      text: 'IndustrialTech transformed our production visibility. We can now track every component in real-time.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      company: 'TechFactory Ltd',
      text: 'Their PLC connector solutions saved us months of development time. Excellent support team.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'AutoParts Inc',
      text: 'The traceability system helped us achieve ISO compliance and improve our quality control.',
      rating: 5
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  return (
    <div>
      <Hero />

      {/* Services Preview */}
      <section id="services-preview" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive industrial software solutions to modernize your manufacturing operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-green-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center text-green-500 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-slate-800 dark:text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-slate-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="relative h-64">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: index === currentTestimonial ? 1 : 0,
                  x: index === currentTestimonial ? 0 : 50
                }}
                transition={{ duration: 0.5 }}
                className={`absolute inset-0 ${index === currentTestimonial ? 'block' : 'hidden'}`}
              >
                <div className="bg-green-50 dark:bg-gray-800 rounded-xl p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-lg text-slate-600 dark:text-gray-300 mb-6 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-slate-800 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-green-500">{testimonial.company}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentTestimonial ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;