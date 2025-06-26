import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Ready to book your ride? Contact us now for immediate assistance and bookings
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">Call Us</p>
                    <p className="text-white font-semibold text-lg">+91 9394445222</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">WhatsApp</p>
                    <p className="text-white font-semibold text-lg">+91 9394445222</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">Email</p>
                    <p className="text-white font-semibold text-lg">info@pavansaicars.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">Location</p>
                    <p className="text-white font-semibold text-lg">Vijayawada, Andhra Pradesh</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">Available</p>
                    <p className="text-white font-semibold text-lg">24/7 Service</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Service Areas</h3>
              <div className="grid grid-cols-2 gap-4">
                {['Vijayawada', 'Guntur', 'Machilipatnam', 'Eluru', 'Tenali', 'Ongole', 'Nellore', 'Tirupati'].map((city) => (
                  <div key={city} className="flex items-center gap-2 text-blue-100">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Contact Buttons */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Quick Contact</h3>
              
              <div className="space-y-4">
                <a
                  href="tel:+919394445222"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-3 transform hover:scale-105"
                >
                  <Phone size={24} />
                  Call Now
                </a>
                
                <a
                  href="https://wa.me/919394445222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-3 transform hover:scale-105"
                >
                  <MessageCircle size={24} />
                  WhatsApp
                </a>

                <a
                  href="#booking"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-colors flex items-center justify-center gap-3 transform hover:scale-105"
                >
                  Book Online
                </a>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-500/20 backdrop-blur-sm rounded-2xl p-6 border border-red-400/30">
              <h4 className="text-xl font-bold text-white mb-3">Emergency Support</h4>
              <p className="text-red-100 mb-4">24/7 emergency assistance available</p>
              <a
                href="tel:+918074644486"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <Phone size={20} />
                Emergency Line
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}