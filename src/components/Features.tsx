import { Check, Clock, DollarSign, Heart, Phone, Shield, Smile } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Clock className="text-green-500" size={48} />,
      title: 'On-Time Service',
      description: 'Punctuality guaranteed with real-time tracking and professional scheduling.',
      color: 'green'
    },
    {
      icon: <Heart className="text-pink-500" size={48} />,
      title: 'Clean & Hygienic',
      description: 'Sanitized vehicles with regular maintenance and cleanliness standards.',
      color: 'pink'
    },
    {
      icon: <Smile className="text-orange-500" size={48} />,
      title: 'Professional Drivers',
      description: 'Courteous, experienced, and verified drivers for your safety and comfort.',
      color: 'orange'
    },
    {
      icon: <DollarSign className="text-yellow-500" size={48} />,
      title: 'Transparent Pricing',
      description: 'No hidden charges, upfront pricing with competitive rates.',
      color: 'yellow'
    },
    {
      icon: <Shield className="text-blue-500" size={48} />,
      title: 'Safe & Secure',
      description: 'GPS tracking, emergency support, and comprehensive insurance coverage.',
      color: 'blue'
    },
    {
      icon: <Phone className="text-purple-500" size={48} />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for bookings and assistance.',
      color: 'purple'
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Choose Us?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the difference with our premium cab services designed for your comfort and convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex justify-center mb-6">
                <div className={`p-4 bg-${feature.color}-50 rounded-2xl group-hover:bg-${feature.color}-100 transition-colors`}>
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
              <div className="text-gray-600">Verified Drivers</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">Safe</div>
              <div className="text-gray-600">GPS Tracking</div>
            </div>
           <div className="flex flex-col items-center">
  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
    <Smile className="w-8 h-8 text-yellow-500" />
  </div>
  <div className="text-2xl font-bold text-gray-900 mb-1">Many</div>
  <div className="text-gray-600">Happy Customers</div>
</div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">24/7</div>
              <div className="text-gray-600">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}