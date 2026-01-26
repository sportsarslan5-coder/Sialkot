
import React, { useState, useRef, useMemo } from 'react';
import { Camera, Loader2, CheckCircle, AlertTriangle, MessageCircle, ShoppingBag, Activity, Zap, ShieldCheck, Search, RefreshCw, ChevronRight, ScanLine, User, Phone, Mail, MapPin } from 'lucide-react';
import { analyzeImageForPricing } from '../services/geminiService';
import { PricingAnalysis } from '../types';
import { MASTER_CATALOG_DATA, WHATSAPP_NUMBER } from '../constants';
import { useAppContext } from '../components/AppContext';
import { sendWhatsAppOrder } from '../services/whatsappService';

interface CatalogItem {
  id: number;
  name: string;
  price: number;
}

const AutoPricing: React.FC = () => {
  const { convertPrice } = useAppContext();
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<{message: string, type: 'network' | 'mismatch'} | null>(null);
  const [result, setResult] = useState<PricingAnalysis | null>(null);
  const [orderComplete, setOrderComplete] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Customer Data State
  const [customerData, setCustomerData] = useState({
    name: '',
    phone: '',
    email: '',
    location: ''
  });

  const [searchQuery, setSearchQuery] = useState('');

  // Parse Catalog for Manual Search
  const catalogItems = useMemo(() => {
    return MASTER_CATALOG_DATA.split(',').map(item => {
      const match = item.trim().match(/(\d+)\.\s*(.*?)\s*–\s*\$(\d+)/);
      if (match) {
        return { id: parseInt(match[1]), name: match[2], price: parseInt(match[3]) };
      }
      return null;
    }).filter((i): i is CatalogItem => i !== null);
  }, []);

  const filteredCatalog = useMemo(() => {
    if (!searchQuery) return [];
    return catalogItems.filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 5);
  }, [searchQuery, catalogItems]);

  const handleManualSelect = (item: CatalogItem) => {
    setResult({
      title: item.name,
      category: "Catalog Item",
      description: `Premium quality ${item.name} from the Sialkot Master Catalog. Engineered for performance.`,
      estimatedPrice: `$${item.price}`,
      confidence: 100
    });
    setSearchQuery('');
    setError(null);
    setOrderComplete(false);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setOrderComplete(false);
    setResult(null);
    setError(null);
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      setImage(base64String);
      processImage(base64String);
    };
    reader.readAsDataURL(file);
  };

  const processImage = async (base64Img: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await analyzeImageForPricing(base64Img);
      if (data) {
        setResult(data);
      } else {
        setError({
          message: "NEURAL_MISMATCH: No exact match found. Try a clearer angle or manual search.",
          type: 'mismatch'
        });
      }
    } catch (e: any) {
      setError({
        message: e.message === "RPC_FAILURE" 
          ? "SYNC_INTERRUPT: Network temporarily busy. Please use manual override."
          : "CORE_FAILURE: Recalibrating sensors.",
        type: 'network'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleOrder = async () => {
    if (!result || !image) return;
    if (!customerData.name || !customerData.phone || !customerData.location) {
      alert("Active Protocol: Please provide Name, Phone, and Location.");
      return;
    }

    setSending(true);
    
    // Construct order details text
    const orderDetails = 
      `*SIALKOT SHOP - NEURAL SCAN ORDER*%0A` +
      `----------------------------%0A` +
      `👤 *NAME:* ${customerData.name}%0A` +
      `📞 *PHONE:* ${customerData.phone}%0A` +
      `📧 *GMAIL:* ${customerData.email || 'N/A'}%0A` +
      `📍 *LOCATION:* ${customerData.location}%0A` +
      `----------------------------%0A` +
      `📦 *PRODUCT:* ${result.title}%0a` +
      `💰 *PRICE:* ${result.estimatedPrice}%0A` +
      `📂 *CATEGORY:* ${result.category}%0A` +
      `----------------------------%0A` +
      `✅ *STATUS:* Verified via Sialkot Neural Core.%0A` +
      `📸 *NOTE:* Attached is the product color/style scan.`;

    // Try to send via official API if configured, otherwise fallback to wa.me link
    const waConfig = {
      accessToken: localStorage.getItem('wa_token') || '',
      phoneNumberId: localStorage.getItem('wa_phone_id') || '',
      targetPhoneNumber: WHATSAPP_NUMBER
    };

    if (waConfig.accessToken && waConfig.phoneNumberId) {
      try {
        await sendWhatsAppOrder(image, orderDetails.replace(/%0A/g, '\n').replace(/\*/g, ''), waConfig);
        setOrderComplete(true);
      } catch (e) {
        // Fallback to wa.me if API fails
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${orderDetails}`, '_blank');
        setOrderComplete(true);
      }
    } else {
      // Direct Link Fallback (Standard)
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${orderDetails}`, '_blank');
      setOrderComplete(true);
    }
    setSending(false);
  };

  const updateCustomerData = (field: string, value: string) => {
    setCustomerData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 animate-fade-in">
        <div>
          <div className="flex items-center gap-3 text-accent mb-2">
             <Activity size={20} className="animate-pulse" />
             <span className="font-black uppercase tracking-[0.3em] text-xs">Core Sync: Active</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-primary italic uppercase">Sialkot <span className="text-accent underline decoration-4 underline-offset-8">Neural-Scan</span></h1>
          <p className="text-gray-500 max-w-xl mt-6 text-lg italic font-medium leading-relaxed">
            "Identify. Price. Dominate." Our scanner identifies the product, color, and catalog price instantly.
          </p>
        </div>
        <div className="p-4 bg-black text-accent rounded-2xl border border-accent/20 shadow-xl flex items-center gap-3">
           <Zap size={20} fill="currentColor" />
           <span className="font-black text-xs uppercase tracking-widest">Active System</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Input & Scanner */}
        <div className="lg:col-span-5 space-y-8">
          <div 
            className={`border-4 border-dashed rounded-[3rem] aspect-square flex flex-col items-center justify-center cursor-pointer transition-all relative overflow-hidden bg-white shadow-2xl ${
              image ? 'border-accent ring-8 ring-accent/5' : 'border-gray-200 hover:border-accent hover:bg-gray-50'
            }`}
            onClick={() => fileInputRef.current?.click()}
          >
            {image ? (
              <div className="relative w-full h-full p-4">
                <img src={image} alt="Target" className="w-full h-full object-contain rounded-2xl" />
                {loading && (
                    <div className="absolute inset-0 pointer-events-none rounded-2xl overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-accent shadow-[0_0_15px_#FFD700] animate-scan-line"></div>
                        <div className="absolute inset-0 bg-accent/5"></div>
                    </div>
                )}
              </div>
            ) : (
              <div className="text-center p-12 transition-transform hover:scale-105">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-100 shadow-inner">
                  <Camera size={48} className="text-gray-400" />
                </div>
                <h3 className="font-black text-2xl mb-1 uppercase tracking-tighter">Initiate Scan</h3>
                <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em] font-bold">Detect Color & Style</p>
              </div>
            )}
            <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
          </div>

          {/* Manual Search Fallback */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-100">
             <div className="flex items-center gap-2 mb-4">
                <Search size={18} className="text-accent" />
                <h4 className="font-black text-xs uppercase tracking-widest text-gray-500">Search Master Catalog</h4>
             </div>
             <div className="relative">
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Type product name (e.g. Hoodie, T-Shirt)..."
                  className="w-full bg-gray-50 border-2 border-gray-100 focus:border-accent p-5 rounded-2xl outline-none font-bold text-sm transition-all"
                />
                {filteredCatalog.length > 0 && (
                  <div className="absolute top-full left-0 w-full mt-2 bg-white border border-gray-100 rounded-2xl shadow-2xl z-30 overflow-hidden divide-y divide-gray-50">
                     {filteredCatalog.map(item => (
                       <button 
                         key={item.id}
                         onClick={() => handleManualSelect(item)}
                         className="w-full p-5 text-left hover:bg-gray-50 flex justify-between items-center group transition-colors"
                       >
                         <div>
                            <span className="block font-black text-sm group-hover:text-accent">{item.name}</span>
                            <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">${item.price}</span>
                         </div>
                         <ChevronRight size={16} className="text-gray-300 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                       </button>
                     ))}
                  </div>
                )}
             </div>
          </div>
        </div>

        {/* Right: Results & Customer Data */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-[3.5rem] p-12 shadow-2xl border border-gray-100 min-h-[600px] flex flex-col relative overflow-hidden">
            {!result && !loading && !error && (
              <div className="flex-1 flex flex-col items-center justify-center text-center py-20">
                 <ScanLine size={100} className="mb-8 text-gray-100 animate-pulse" />
                 <h3 className="text-2xl font-black text-gray-300 tracking-tighter italic uppercase">Ready for Sync</h3>
                 <p className="text-[10px] text-gray-400 font-mono mt-2 uppercase tracking-[0.4em]">Awaiting Visual Input</p>
              </div>
            )}

            {loading && (
              <div className="flex-1 flex flex-col items-center justify-center space-y-8 py-20">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent/20 blur-3xl animate-pulse"></div>
                  <Loader2 size={100} className="animate-spin text-accent relative z-10" />
                </div>
                <div className="text-center">
                   <h3 className="font-black text-4xl tracking-tighter uppercase italic">Engaging Neural Core</h3>
                   <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.3em] mt-2">Checking Color & Catalog...</p>
                </div>
              </div>
            )}

            {error && !loading && !result && (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 animate-scale-in">
                 <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6 ring-8 ring-red-50/50">
                    <AlertTriangle size={36} />
                 </div>
                 <h3 className="text-2xl font-black text-primary mb-3 uppercase tracking-tighter italic">Sync Error</h3>
                 <p className="text-gray-500 mb-10 max-w-xs font-medium text-sm leading-relaxed">{error.message}</p>
                 <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-black text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] hover:bg-accent hover:text-black transition-all shadow-xl"
                 >
                   Try Again
                 </button>
              </div>
            )}

            {result && !loading && !orderComplete && (
              <div className="animate-fade-in-up space-y-10">
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                     <span className="bg-black text-accent px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">Target: Identified</span>
                     <span className="text-[10px] text-green-600 font-black flex items-center gap-1.5 uppercase tracking-widest"><CheckCircle size={14}/> Core Synchronized</span>
                  </div>
                  <h2 className="text-5xl md:text-6xl font-black text-primary leading-none tracking-tighter mb-4 italic uppercase underline decoration-accent/40 decoration-8 underline-offset-4">{result.title}</h2>
                  <p className="text-gray-600 text-xl italic font-light leading-relaxed border-l-4 border-accent pl-6">
                    {result.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="bg-black text-white p-8 rounded-[2.5rem] shadow-2xl border border-accent/20">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent mb-3 block">Catalog Price</span>
                      <span className="text-6xl font-black tracking-tighter text-accent">{result.estimatedPrice}</span>
                   </div>
                   <div className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 flex flex-col justify-center">
                      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 mb-3 block">Neural Confidence</span>
                      <span className="text-5xl font-black text-primary tracking-tighter">{result.confidence}%</span>
                   </div>
                </div>

                {/* Customer Identity Form */}
                <div className="space-y-6 pt-6 border-t border-gray-100">
                   <h4 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-4">Customer Identity Protocol</h4>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                         <User className="absolute left-6 top-1/2 -translate-y-1/2 text-accent" size={20} />
                         <input 
                            type="text" 
                            placeholder="Full Name" 
                            value={customerData.name}
                            onChange={(e) => updateCustomerData('name', e.target.value)}
                            className="w-full bg-gray-50 p-6 pl-14 rounded-2xl border-2 border-transparent focus:border-accent outline-none font-bold text-sm transition-all"
                         />
                      </div>
                      <div className="relative">
                         <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-accent" size={20} />
                         <input 
                            type="tel" 
                            placeholder="Phone Number" 
                            value={customerData.phone}
                            onChange={(e) => updateCustomerData('phone', e.target.value)}
                            className="w-full bg-gray-50 p-6 pl-14 rounded-2xl border-2 border-transparent focus:border-accent outline-none font-bold text-sm transition-all"
                         />
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                         <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-accent" size={20} />
                         <input 
                            type="email" 
                            placeholder="Gmail (Optional)" 
                            value={customerData.email}
                            onChange={(e) => updateCustomerData('email', e.target.value)}
                            className="w-full bg-gray-50 p-6 pl-14 rounded-2xl border-2 border-transparent focus:border-accent outline-none font-bold text-sm transition-all"
                         />
                      </div>
                      <div className="relative">
                         <MapPin className="absolute left-6 top-1/2 -translate-y-1/2 text-accent" size={20} />
                         <input 
                            type="text" 
                            placeholder="Location (City/Area)" 
                            value={customerData.location}
                            onChange={(e) => updateCustomerData('location', e.target.value)}
                            className="w-full bg-gray-50 p-6 pl-14 rounded-2xl border-2 border-transparent focus:border-accent outline-none font-bold text-sm transition-all"
                         />
                      </div>
                   </div>
                </div>

                <button 
                  onClick={handleOrder}
                  disabled={sending}
                  className="w-full py-10 rounded-[2.5rem] bg-black text-white font-black text-3xl hover:bg-accent hover:text-black transition-all shadow-2xl flex items-center justify-center gap-6 group uppercase italic tracking-tighter transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                >
                  {sending ? (
                    <Loader2 size={40} className="animate-spin" />
                  ) : (
                    <>
                      <span>Order Now</span>
                      <MessageCircle size={40} className="group-hover:rotate-12 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            )}

            {orderComplete && (
               <div className="flex-1 flex flex-col items-center justify-center text-center animate-scale-in py-12">
                  <div className="w-40 h-40 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-10 shadow-[0_20px_50px_rgba(34,197,94,0.2)] ring-8 ring-green-50/50">
                     <CheckCircle size={80} />
                  </div>
                  <h2 className="text-5xl font-black text-primary mb-4 tracking-tighter uppercase italic">Sync Complete</h2>
                  <p className="text-gray-400 max-w-sm mx-auto mb-12 text-lg italic font-medium">
                     Order Protocol logged for <strong>{customerData.name}</strong>. Redirecting to WhatsApp for final color verification.
                  </p>
                  <button 
                    onClick={() => {
                       setOrderComplete(false);
                       setResult(null);
                       setImage(null);
                       setCustomerData({ name: '', phone: '', email: '', location: '' });
                    }}
                    className="bg-black text-white px-16 py-6 rounded-full font-black text-xl hover:bg-accent hover:text-black shadow-xl transition-all uppercase italic tracking-tighter"
                  >
                    Initiate New Sync
                  </button>
               </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoPricing;
