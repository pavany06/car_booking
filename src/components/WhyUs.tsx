import { Check, DollarSign, Heart, Smile } from 'lucide-react';

export default function WhyUs() {
  const features = [
    {
      icon: <Check className="text-green-500" size={48} />,
      title: 'On-Time Service',
      description: 'Punctuality is our guarantee.'
    },
    {
      icon: <Heart className="text-pink-500" size={48} />,
      title: 'Clean Cars',
      description: 'Hygienic and maintained vehicles.'
    },
    {
      icon: <Smile className="text-orange-500" size={48} />,
      title: 'Courteous Drivers',
      description: 'Polite and professional drivers.'
    },
    {
      icon: <DollarSign className="text-yellow-500" size={48} />,
      title: 'No Hidden Costs',
      description: 'Transparent pricing always.'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Travel With Us?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-gray-50 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}