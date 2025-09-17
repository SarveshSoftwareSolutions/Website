import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import {
  ChartBarIcon,
  LinkIcon,
  CogIcon,
  CloudIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Traceability Systems',
      description: 'Complete visibility from raw materials to finished products with comprehensive tracking and quality control.',
      icon: <ChartBarIcon className="h-12 w-12" />,
      features: [
        'Real-time tracking throughout production',
        'Quality assurance and defect tracking',
        'Regulatory compliance reporting',
        'Batch and lot management',
        'Integration with existing ERP systems'
      ]
    },
    {
      title: 'PLC Connectors',
      description: 'Seamless integration with major PLC brands including Siemens, Mitsubishi, and Allen-Bradley.',
      icon: <LinkIcon className="h-12 w-12" />,
      features: [
        'Multi-protocol support (Modbus, Ethernet/IP, Profinet)',
        'Real-time data acquisition',
        'Easy configuration and setup',
        'Secure data transmission',
        'Support for legacy systems'
      ]
    },
    {
      title: 'Web Platforms',
      description: 'Custom dashboards and reporting solutions tailored to your specific business requirements.',
      icon: <CogIcon className="h-12 w-12" />,
      features: [
        'Custom dashboard development',
        'Advanced analytics and KPIs',
        'Mobile-responsive design',
        'User role management',
        'API integration capabilities'
      ]
    },
    {
      title: 'Cloud Solutions',
      description: 'Secure, scalable cloud infrastructure with IoT integration for modern manufacturing operations.',
      icon: <CloudIcon className="h-12 w-12" />,
      features: [
        'Secure cloud hosting and management',
        'IoT device integration',
        'Scalable infrastructure',
        'Data backup and recovery',
        '24/7 monitoring and support'
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$2,999',
      period: '/month',
      description: 'Perfect for small manufacturing operations',
      features: [
        'Up to 5 PLC connections',
        'Basic traceability tracking',
        'Standard dashboard',
        'Email support',
        'Monthly reports'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$7,999',
      period: '/month',
      description: 'Ideal for medium-scale operations',
      features: [
        'Up to 20 PLC connections',
        'Advanced traceability with quality control',
        'Custom dashboards',
        'Priority support',
        'Real-time analytics',
        'Cloud integration',
        'Mobile app access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'Tailored solutions for large enterprises',
      features: [
        'Unlimited PLC connections',
        'Full traceability suite',
        'Completely custom platform',
        'Dedicated support team',
        'Advanced AI analytics',
        'Multi-site management',
        'Custom integrations',
        'On-premise deployment options'
      ],
      popular: false
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
              Our <span className="text-green-500">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive industrial software solutions to transform your manufacturing operations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-green-100 dark:border-gray-700 h-full group-hover:border-green-300 dark:group-hover:border-green-600">
                  <div className="text-green-500 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 text-center">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-gray-300 mb-6 text-center">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 + featureIndex * 0.05 }}
                        className="text-slate-600 dark:text-gray-300 flex items-start"
                      >
                        <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
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
              Pricing Plans
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300">
              Choose the plan that best fits your manufacturing needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 ${
                  plan.popular 
                    ? 'ring-4 ring-green-500 ring-opacity-50 scale-105' 
                    : 'hover:scale-105'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300 mb-4">
                    {plan.description}
                  </p>
                  <div className="text-4xl font-bold text-green-500">
                    {plan.price}
                    <span className="text-lg text-slate-500 dark:text-gray-400">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-slate-600 dark:text-gray-300 flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                    plan.popular
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : 'bg-green-50 hover:bg-green-100 dark:bg-gray-700 dark:hover:bg-gray-600 text-green-600 dark:text-green-400'
                  }`}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;