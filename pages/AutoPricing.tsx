
import React, { useState, useRef } from 'react';
import { Camera, Loader2, CheckCircle, AlertTriangle, MessageCircle, Info, Settings, ScanLine, ShoppingBag, Activity, Zap, ShieldCheck } from 'lucide-react';
import { analyzeImageForPricing } from '../services/geminiService';
import { PricingAnalysis } from '../types';
import { sendWhatsAppOrder } from '../services/whatsappService';

const AutoPricing: React.FC = () => {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderComplete, setOrderComplete] = useState(false);
  const [result, setResult] = useState<PricingAnalysis | null>(null);
  const [customerName, setCustomerName] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [config] = useState({
    accessToken: localStorage.getItem('wa_token') || '',
    phoneNumberId: localStorage.getItem('wa_phone_id') || '',
    targetPhoneNumber: localStorage.getItem('wa_target') || '923079490721'
  });

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
        setError("NEURAL_MISMATCH: The system could not find a clear match. Please try a different angle.");
      }
    } catch (e) {
      setError("CONNECTION_FAULT: The Active System is temporarily out of range.");
    } finally {
      setLoading(false);
    }
  };

  const handleOrderNow = async () => {
    if (!result || !image) return;
    if (!customerName.trim()) {
      alert("Active Protocol: Subject Name Required.");
      return;
    }

    setSending(true);
    const caption = `*OFFICIAL AI ORDER REQUEST*
---------------------------
👤 *Customer:* ${customerName}
📦 *Product:* ${result.title}
💰 *Price:* ${result.estimatedPrice}
📝 *Description:* ${result.description}
---------------------------
✅ *Status:* Active System Verified. "Excel Through Action."`;

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
             <span className="font-black uppercase tracking-[0.3em] text-xs">System Status: Fully Operational</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-primary italic uppercase">Sialkot <span className="text-accent underline decoration-4 underline-offset-8">Active-Scan</span></h1>
          <p className="text-gray-500 max-w-xl mt-6 text-lg leading-relaxed font-medium italic">
            "The Sialkot Neural Core is now synchronized." Upload your frame to engage global recognition.
          </p>
        </div>
        <div className="flex gap-4">
           <div className="p-4 bg-black text-accent rounded-2xl flex items-center gap-2 shadow-xl border border-accent/20">
              <Zap size={20} fill="currentColor" />
              <span className="font-black text-xs uppercase tracking-widest">Neural Priority</span>
           </div>
        </div>
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
                        <div className="absolute inset-0 bg-accent/10"></div>
                    </div>
                )}
              </div>
            ) : (
              <div className="text-center p-12 transition-transform group-hover:scale-110">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-gray-100">
                  <Camera size={48} className="text-gray-400" />
                </div>
                <h3 className="font-black text-2xl mb-2">ENGAGE CORE</h3>
                <p className="text-sm text-gray-400 uppercase tracking-widest">Select Target Image</p>
              </div>
            )}
            <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
          </div>
          
          <div className="bg-black text-white p-8 rounded-[2.5rem] relative overflow-hidden group shadow-2xl border border-accent/10">
             <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
             <div className="flex items-start gap-4 relative z-10">
                <ShieldCheck className="text-accent flex-shrink-0 mt-1" />
                <div>
                   <h4 className="font-bold text-accent mb-1 uppercase tracking-wider text-xs">Active Protocol Alpha</h4>
                   <p className="text-sm text-gray-400 leading-relaxed italic">
                     "Identify. Verify. Excel." Identification is the first step toward dominance.
                   </p>
                </div>
             </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-white rounded-[3.5rem] p-12 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-gray-100 min-h-[600px] flex flex-col relative overflow-hidden">
            {!image && !loading && !error && (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                 <ScanLine size={120} className="mb-8 text-gray-100 animate-pulse" />
                 <h3 className="text-3xl font-black text-gray-300 italic tracking-tighter">NEURAL CORE: STANDBY</h3>
                 <p className="text-gray-400 mt-2 font-mono uppercase text-xs tracking-[0.3em]">Awaiting Visual Input</p>
              </div>
            )}

            {loading && (
              <div className="flex-1 flex flex-col items-center justify-center space-y-10 animate-fade-in">
                <div className="relative">
                    <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"></div>
                    <Loader2 size={120} className="animate-spin text-accent relative z-10" />
                </div>
                <div className="space-y-4 text-center">
                    <h3 className="font-black text-5xl tracking-tighter uppercase italic text-primary">Engaging Core</h3>
                    <div className="flex items-center justify-center gap-2">
                       <span className="w-2 h-2 bg-accent rounded-full animate-bounce"></span>
                       <span className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:0.2s]"></span>
                       <span className="w-2 h-2 bg-accent rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </div>
                    <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">Matching Master Catalog...</p>
                </div>
              </div>
            )}

            {error && !loading && (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8 animate-scale-in">
                 <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-6 ring-8 ring-red-50/50">
                    <AlertTriangle size={40} />
                 </div>
                 <h3 className="text-3xl font-black text-primary mb-4 tracking-tighter uppercase">Protocol Fault</h3>
                 <p className="text-gray-500 mb-8 max-w-sm font-medium">{error}</p>
                 <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="bg-black text-white px-10 py-4 rounded-full font-black text-sm hover:bg-accent hover:text-black transition-all shadow-xl"
                 >
                   RE-ENGAGE SCANNER
                 </button>
              </div>
            )}

            {result && !loading && !orderComplete && (
              <div className="animate-fade-in-up space-y-10">
                <div className="relative">
                  <div className="flex items-center gap-2 mb-6">
                     <span className="bg-black text-accent px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] shadow-lg">{result.category}</span>
                     <span className="text-[11px] text-green-600 font-black flex items-center gap-1.5 uppercase tracking-widest"><CheckCircle size={14}/> Precision Match Verified</span>
                  </div>
                  <h2 className="text-6xl md:text-7xl font-black text-primary leading-none tracking-tighter mb-8 italic uppercase">{result.title}</h2>
                  <div className="relative">
                    <div className="absolute -left-6 top-0 bottom-0 w-1.5 bg-accent rounded-full"></div>
                    <p className="text-gray-600 text-2xl italic leading-relaxed font-light pl-6">
                      {result.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                   <div className="bg-black text-white p-10 rounded-[3rem] shadow-2xl relative group overflow-hidden border border-accent/20">
                      <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:scale-150 transition-transform duration-700">
                          <ShoppingBag size={120} />
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-[0.3em] text-accent mb-4 block">Core Value Estimate</span>
                      <span className="text-6xl font-black tracking-tighter">${result.estimatedPrice.replace('$', '')}</span>
                   </div>
                   <div className="bg-secondary p-10 rounded-[3rem] border border-gray-100 flex flex-col justify-center relative group">
                      <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors"></div>
                      <span className="text-[11px] font-black uppercase tracking-[0.3em] text-gray-400 mb-4 block">Neural Confidence</span>
                      <span className="text-6xl font-black text-primary tracking-tighter">{result.confidence}%</span>
                   </div>
                </div>

                <div className="space-y-4 pt-4">
                   <div className="flex items-center justify-between px-2">
                     <label className="text-[10px] font-black uppercase text-gray-500 tracking-[0.25em]">
                        Subject Identification
                     </label>
                     <span className="text-[10px] font-bold text-accent">Required Field</span>
                   </div>
                   <input 
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Enter Name for Log"
                      className="w-full bg-gray-50 border-2 border-gray-100 focus:border-accent p-8 rounded-[2rem] outline-none font-black text-2xl transition-all shadow-inner placeholder:text-gray-300"
                   />
                </div>

                <button 
                  onClick={handleOrderNow}
                  disabled={sending}
                  className={`w-full py-10 rounded-[2.5rem] font-black text-3xl transition-all shadow-2xl flex items-center justify-center gap-6 group transform hover:scale-[1.02] active:scale-[0.98] tracking-tighter uppercase italic ${
                    sending ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-black text-white hover:bg-accent hover:text-black'
                  }`}
                >
                  {sending ? (
                    <Loader2 size={40} className="animate-spin" />
                  ) : (
                    <>
                      <span>Engage Order Protocol</span>
                      <MessageCircle size={40} className="group-hover:rotate-12 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            )}

            {orderComplete && (
               <div className="flex-1 flex flex-col items-center justify-center text-center animate-scale-in">
                  <div className="w-48 h-48 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-10 shadow-[0_30px_60px_rgba(34,197,94,0.2)] ring-[16px] ring-green-50/50">
                     <CheckCircle size={100} />
                  </div>
                  <h2 className="text-7xl font-black text-primary mb-6 tracking-tighter uppercase italic">Protocol Complete</h2>
                  <p className="text-gray-400 max-w-sm mx-auto mb-16 text-2xl leading-tight italic font-medium">
                     The system has logged the request for <strong>{customerName}</strong> and initiated WhatsApp sync.
                  </p>
                  <button 
                    onClick={() => {
                       setOrderComplete(false);
                       setImage(null);
                       setResult(null);
                       setCustomerName('');
                       setError(null);
                    }}
                    className="bg-black text-white px-20 py-8 rounded-full font-black text-2xl hover:bg-accent hover:text-black shadow-2xl transform hover:-translate-y-2 transition-all uppercase italic tracking-tighter"
                  >
                    Reset Active Protocol
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
