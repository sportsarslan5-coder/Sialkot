
import React from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useAppContext } from '../components/AppContext';
import { WHATSAPP_NUMBER } from '../constants';

const Contact: React.FC = () => {
  const { t } = useAppContext();
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 animate-fade-in">
      <h1 className="text-4xl font-bold text-center mb-12">{t('contactUs')}</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Info */}
        <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <div className="bg-white p-3 rounded-full shadow-sm text-accent"><MapPin size={20} /></div>
                        <div>
                            <h4 className="font-bold">Head Office</h4>
                            <p className="text-gray-600">Sialkot, Pakistan</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-white p-3 rounded-full shadow-sm text-accent"><Phone size={20} /></div>
                        <div>
                            <h4 className="font-bold">Phone / WhatsApp</h4>
                            <p className="text-gray-600">0307 9490 721</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="bg-white p-3 rounded-full shadow-sm text-accent"><Mail size={20} /></div>
                        <div>
                            <h4 className="font-bold">Email</h4>
                            <p className="text-gray-600">arslanaliskt6@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="bg-green-500 text-white w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-colors shadow-lg transform hover:scale-[1.02] duration-200">
                        <MessageCircle size={20} /> Chat on WhatsApp
                    </a>
                </div>
            </div>
        </div>

        {/* Form */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input placeholder="Name" className="border p-4 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-accent outline-none transition-all" />
                    <input placeholder="Email" type="email" className="border p-4 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-accent outline-none transition-all" />
                </div>
                <input placeholder="Subject" className="border p-4 rounded-xl w-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-accent outline-none transition-all" />
                <textarea placeholder="Message" rows={4} className="border p-4 rounded-xl w-full bg-gray-50 focus:bg-white focus:ring-2 focus:ring-accent outline-none transition-all"></textarea>
                <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-accent hover:text-black transition-colors w-full shadow-lg transform hover:scale-[1.01] duration-200">
                    {t('sendMessage')}
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
