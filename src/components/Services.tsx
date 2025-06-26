import React from 'react';
import { ArrowRight, RotateCcw, Plane, Clock, Shield, Star } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <ArrowRight className="text-blue-500" size={48} />,
      title: 'One-Way Trips',
      description: 'Direct and comfortable travel to your destination with professional drivers.',
      features: ['Door-to-door service', 'Real-time tracking', 'Fixed pricing'],
      color: 'blue'
    },
    {
      icon: <RotateCcw className="text-green-500" size={48} />,
      title: 'Round Trips',
      description: 'Complete round-trip solutions with flexible timing and competitive rates.',
      features: ['Flexible waiting time', 'Multiple stops allowed', 'Best value pricing'],
      color: 'green'
    },
    {
      icon: <Plane className="text-purple-500" size={48} />,
      title: 'Airport Transfers',
      description: 'Reliable airport pickups and drops with flight tracking and punctuality.',
      features: ['Flight tracking', 'Meet & greet service', '24/7 availability'],
      color: 'purple'
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive transportation solutions designed to meet all your travel needs in Vijayawada and beyond
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex justify-center mb-6">
                <div className={`p-4 bg-${service.color}-50 rounded-2xl group-hover:bg-${service.color}-100 transition-colors`}>
                  {service.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <div className={`w-2 h-2 bg-${service.color}-500 rounded-full`}></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Service</h3>
            <p className="text-gray-600">Available round the clock for your convenience</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe & Secure</h3>
            <p className="text-gray-600">Verified drivers and well-maintained vehicles</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
            <p className="text-gray-600">Top-rated service with excellent customer satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
}