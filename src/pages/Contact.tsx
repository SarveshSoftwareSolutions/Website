import React from 'react';
import { color, motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: 'Address',
      content: 'Flat No.F2, BN Flat, Plot No.5, Kuppusamy Nagar, Sivabootham, Vanagaram, Chennai-95, India',
      subContent: 'Serving clients worldwide'
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: 'Phone',
      content: '+91-93448-21040',
      subContent: 'Mon-Sat 10AM-6PM IST'
    },
   {
  icon: <EnvelopeIcon className="h-6 w-6" />,
  title: 'Email',
  content: (
    <a style={{color:"black"}}
    
      href="mailto:sarvesh@sarveshsoftwaresolutions.com" 
      className="break-all text-blue-600 hover:underline"
    >
      sarvesh@sarveshsoftwaresolutions.com
    </a>
  ),
  subContent: 'We reply within 24 hours'
},

    {
      icon: <ClockIcon className="h-6 w-6" />,
      title: 'Support',
      content: '24/7 Support',
      subContent: 'Emergency support available'
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
              Contact <span className="text-green-500">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to transform your manufacturing operations? Let's discuss your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-green-50 dark:bg-gray-800 rounded-xl hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-green-500 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-slate-600 dark:text-gray-300 font-medium mb-1">
                  {info.content}
                </p>
                <p className="text-sm text-slate-500 dark:text-gray-400">
                  {info.subContent}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
                Get in Touch
              </h2>
              <p className="text-slate-600 dark:text-gray-300 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. 
                Let us know about your specific requirements and how we can help 
                modernize your manufacturing operations.
              </p>
              <ContactForm />
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">
                  Our Location
                </h2>
                <p className="text-slate-600 dark:text-gray-300 mb-8">
                  Based in Chennai, India, we serve manufacturing clients worldwide 
                  with our comprehensive industrial software solutions. Our team is 
                  available to support your operations across different time zones.
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="bg-green-100 dark:bg-gray-700 rounded-xl p-8 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <MapPinIcon className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-2">
                    Chennai, India
                  </h3>
                  <p className="text-slate-600 dark:text-gray-300">
                    Interactive map placeholder
                  </p>
                  <p className="text-sm text-slate-500 dark:text-gray-400 mt-4">
                    Serving clients globally with local expertise
                  </p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-green-50 dark:bg-gray-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-white mb-3">
                  Why Choose Us?
                </h3>
                <ul className="space-y-2 text-slate-600 dark:text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    10+ years of industry experience
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Proven track record with global clients
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    24/7 support and maintenance
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
                    Custom solutions tailored to your needs
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-slate-600 dark:text-gray-300 mb-8">
              Join leading manufacturers who trust Sarvesh Software Solutions to power their digital transformation.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Schedule a Free Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;