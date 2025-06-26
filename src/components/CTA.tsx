import { MessageCircle, Phone } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-slate-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Ready to book your ride?
        </h2>
        <p className="text-xl text-gray-300 mb-10">
          Call or message us now for any inquiries.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 transition-colors transform hover:scale-105">
            <Phone size={20} />
            Call Us
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 transition-colors transform hover:scale-105">
            <MessageCircle size={20} />
            WhatsApp
          </button>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400 mb-2">
            Pavan Sai Car Travels | Serving Vijayawada
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 PavanSai Car Travels. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}