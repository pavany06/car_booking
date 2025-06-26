import { Fuel, Users } from 'lucide-react';

export default function Fleet() {
  const vehicles = [
    {
      name: 'Maruti Ertiga',
      specs: '6+1 Seater',
      fuel: 'Petrol + CNG',
      features: ['AC', 'Music System', 'GPS Tracking'],
      image: '/ertiga.jpg',
      color: 'red'
    },
    {
      name: 'Kia Carens',
      specs: '6+1 Seater',
      fuel: 'Premium Comfort',
      features: ['Premium AC', 'Leather Seats', 'Advanced Safety'],
      image: '/carens.jpg',
      color: 'blue'
    },
    {
      name: 'Maruti Dzire',
      specs: '4+1 Seater',
      fuel: 'Sedan Comfort',
      features: ['Comfortable Seats', 'Smooth Ride', 'Fuel Efficient'],
      image: '/dzire.jpg',
      color: 'purple'
    }
  ];

  return (
    <section id="fleet" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Fleet</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our collection of well-maintained, clean, and comfortable vehicles for your journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className={`bg-${vehicle.color}-500 text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    Available
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {vehicle.name}
                </h3>
                
                <div className="flex items-center gap-4 mb-4 text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span className="text-sm">{vehicle.specs}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Fuel size={16} />
                    <span className="text-sm">{vehicle.fuel}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {vehicle.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-700">
                      <div className={`w-2 h-2 bg-${vehicle.color}-500 rounded-full`}></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full mt-6 bg-${vehicle.color}-500 hover:bg-${vehicle.color}-600 text-white py-3 rounded-xl font-semibold transition-colors`}>
                  Select Vehicle
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Vehicles</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Service</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-blue-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5★</div>
              <div className="text-blue-100">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}