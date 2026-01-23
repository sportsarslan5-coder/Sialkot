
import React, { useState, useRef } from 'react';
import { Camera, Loader2, CheckCircle, RefreshCcw, MessageCircle, Info, Settings, ScanLine, User, ShoppingBag, Activity } from 'lucide-react';
import { analyzeImageForPricing } from '../services/geminiService';
import { PricingAnalysis } from '../types';
import { sendWhatsAppOrder } from '../services/whatsappService';

const AutoPricing: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [result, setResult] = useState<PricingAnalysis | null>(null);
  const [customerName, setCustomerName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [showConfig, setShowConfig] = useState(false);
  const [config, setConfig] = useState({
    accessToken: localStorage.getItem('wa_token') || '',
    phoneNumberId: localStorage.getItem('wa_phone_id') || '',
    targetPhoneNumber: localStorage.getItem('wa_target') || '923079490721'
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setOrderComplete(false);
    setResult(null);
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
    const data = await analyzeImageForPricing(base64Img);
    if (data) setResult(data);
    setLoading(false);
  };

  const handleOrderNow = async () => {
    if (!result || !image) return;
    if (!customerName.trim()) {
      alert("Please enter your name before placing an order.");
      return;
    }

    setSending(true);
    const orderId = `ORD-${Math.floor(Math.random() * 90000) + 10000}`;
    const caption = `*OFFICIAL AI ORDER REQUEST*
---------------------------
🆔 *Order ID:* ${orderId}
👤 *Customer:* ${customerName}
📦 *Product:* ${result.title}
💰 *Price:* ${result.estimatedPrice}
📝 *Description:* ${result.description}
---------------------------
✅ *Status:* Active System Verified.`;

    const hasApi = config.accessToken && config.phoneNumberId;

    if (!hasApi) {
      window.open(`https://wa.me/${config.targetPhoneNumber}?text=${encodeURIComponent(caption)}`, '_blank');
      setOrderComplete(true);
      setSending(false);
    } else {
      try {
        await sendWhatsAppOrder(image, caption, config);
        setOrderComplete(true);
      } catch (e: any) {
        window.open(`https://wa.me/${config.targetPhoneNumber}?text=${encodeURIComponent(caption)}`, '_blank');
        setOrderComplete(true);
      } finally {
        setSending(false);
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 relative min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div className="animate-fade-in-up">
          <div className="flex items-center gap-3 text-accent mb-2">
             <Activity size={20} className="animate-pulse" />
             <span className="font-black uppercase tracking-[0.3em] text-xs">System Status: Active</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-primary italic">AI <span className="text-accent underline decoration-4 underline-offset-8">HYPER-SCAN</span></h1>
          <p className="text-gray-500 max-w-xl mt-6 text-lg leading-relaxed">
            Our active neural system identifies items instantly. 
            Upload a photo to engage the 500-item master catalog recognition.
          </p>
        </div>
        <button onClick={() => setShowConfig(true)} className="p-4 bg-black text-white rounded-full hover:bg-accent transition-all hover:scale-110 shadow-xl">
          <Settings size={24} />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5 space-y-8">
          <div 
            className={`border-4 border-dashed rounded-[3rem] aspect-square flex flex-col items-center justify-center cursor-pointer transition-all relative overflow-hidden group shadow-2xl bg-white ${
              image ? 'border-accent ring-4 ring-accent/20' : 'border-gray-200 hover:border-accent'
            }`}
            onClick={() => fileInputRef.current?.click()}
          >
            {image ? (
              <div className="relative w-full h-full p-4">
                <img src={image} alt="Target" className="w-full h-full object-contain rounded-2xl group-hover:scale-105 transition-transform duration-500" />
                {loading && (
                    <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none rounded-2xl">
                        <div className="absolute top-0 left-0 w-full h-1 bg-accent/80 shadow-[0_0_15px_#FFD700] animate-scan-line"></div>
                        <div className="absolute inset-0 bg-accent/5"></div>
                    </div>
                )}
              </div>
            ) : (
              <div className="text-center p-12 transition-transform group-hover:scale-110">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-100">
                  <Camera size={48} className="text-gray-400" />
                </div>
                <h3 className="font-black text-2xl mb-2">ENGAGE SCANNER</h3>
                <p className="text-sm text-gray-400">Target any product image</p>
              </div>
            )}
            <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
          </div>
          
          <div className="bg-black text-white p-8 rounded-[2.5rem] relative overflow-hidden group">
             <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
             <div className="flex items-start gap-4 relative z-10">
                <Info className="text-accent flex-shrink-0 mt-1" />
                <div>
                   <h4 className="font-bold text-accent mb-1 uppercase tracking-wider text-xs">Active Protocol</h4>
                   <p className="text-sm text-gray-400">
                     "Identify. Verify. Excel." Sialkot Shop's active system ensures your style is always authentic.
                   </p>
                </div>
             </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-white rounded-[3.5rem] p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-gray-100 min-h-[600px] flex flex-col relative overflow-hidden">
            {!image && !loading && (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                 <ScanLine size={120} className="mb-8 text-gray-100" />
                 <h3 className="text-3xl font-black text-gray-300">SYSTEM READY</h3>
                 <p className="text-gray-400 mt-2">Waiting for neural input...</p>
              </div>
            )}

            {loading && (
              <div className="flex-1 flex flex-col items-center justify-center space-y-8 animate-pulse">
                <div className="relative">
                    <Loader2 size={100} className="animate-spin text-accent" />
                </div>
                <div className="space-y-2 text-center">
                    <h3 className="font-black text-4xl tracking-tighter uppercase italic">Analyzing Frame</h3>
                    <p className="text-gray-400 font-mono text-sm">Matching Master Catalog Data...</p>
                </div>
              </div>
            )}

            {result && !loading && !orderComplete && (
              <div className="animate-fade-in-up space-y-10">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                     <span className="bg-accent text-black px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">{result.category}</span>
                     <span className="text-[10px] text-green-600 font-bold flex items-center gap-1"><CheckCircle size={12}/> Verified Match</span>
                  </div>
                  <h2 className="text-6xl font-black text-primary leading-none tracking-tighter mb-6">{result.title}</h2>
                  <p className="text-gray-500 text-xl italic leading-relaxed font-light border-l-4 border-accent pl-8 py-2">
                    {result.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   <div className="bg-black text-white p-8 rounded-[2.5rem] shadow-2xl relative group overflow-hidden">
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform">
                          <ShoppingBag size={64} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-accent mb-3 block">Catalog Value</span>
                      <span className="text-5xl font-black">${result.estimatedPrice}</span>
                   </div>
                   <div className="bg-secondary p-8 rounded-[2.5rem] border border-gray-100 flex flex-col justify-center">
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3 block">System Confidence</span>
                      <span className="text-5xl font-black text-primary">{result.confidence}%</span>
                   </div>
                </div>

                <div className="space-y-4">
                   <label className="text-xs font-black uppercase text-gray-500 tracking-widest ml-1">
                      Identification Name (Required)
                   </label>
                   <input 
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Enter Your Name"
                      className="w-full bg-gray-50 border-2 border-gray-100 focus:border-accent p-6 rounded-[1.5rem] outline-none font-bold text-xl transition-all shadow-inner"
                   />
                </div>

                <button 
                  onClick={handleOrderNow}
                  disabled={sending}
                  className={`w-full py-8 rounded-[2rem] font-black text-2xl transition-all shadow-2xl flex items-center justify-center gap-5 group transform hover:scale-[1.02] active:scale-[0.98] ${
                    sending ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-black text-white hover:bg-accent hover:text-black'
                  }`}
                >
                  {sending ? (
                    <Loader2 size={32} className="animate-spin" />
                  ) : (
                    <>
                      <span>PROCEED TO ARD</span>
                      <MessageCircle size={32} className="group-hover:rotate-12 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            )}

            {orderComplete && (
               <div className="flex-1 flex flex-col items-center justify-center text-center animate-scale-in">
                  <div className="w-40 h-40 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-10 shadow-[0_20px_40px_rgba(34,197,94,0.15)] ring-8 ring-green-50">
                     <CheckCircle size={80} />
                  </div>
                  <h2 className="text-6xl font-black text-primary mb-6 tracking-tighter">ORDER FILED</h2>
                  <p className="text-gray-400 max-w-sm mx-auto mb-16 text-xl leading-relaxed">
                     The system has successfully logged the order for <strong>{customerName}</strong>.
                  </p>
                  <button 
                    onClick={() => {
                       setOrderComplete(false);
                       setImage(null);
                       setResult(null);
                       setCustomerName('');
                    }}
                    className="bg-black text-white px-16 py-6 rounded-full font-black text-xl hover:bg-accent hover:text-black shadow-2xl transform hover:-translate-y-1 transition-all"
                  >
                    Reset Active Scan
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
