
import React, { useState, useRef } from 'react';
import { Upload, Camera, Loader2, CheckCircle, RefreshCcw, MessageCircle, Tag, Info, Settings, AlertTriangle, ScanLine, User, ShoppingBag } from 'lucide-react';
import { analyzeImageForPricing, PricingAnalysis } from '../services/geminiService';
import { sendWhatsAppOrder } from '../services/whatsappService';
import { useAppContext } from '../context/AppContext';

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

  const saveConfig = () => {
    localStorage.setItem('wa_token', config.accessToken.trim());
    localStorage.setItem('wa_phone_id', config.phoneNumberId.trim());
    localStorage.setItem('wa_target', config.targetPhoneNumber.trim());
    setShowConfig(false);
  };

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
      alert("Please enter your name (e.g., Drax) before placing an order.");
      return;
    }

    setSending(true);
    const orderId = `ORD-${Math.floor(Math.random() * 90000) + 10000}`;
    const caption = `*OFFICIAL AI ORDER REQUEST*
---------------------------
🆔 *Order ID:* ${orderId}
👤 *Customer:* ${customerName}
📦 *Product Identification:* ${result.title}
🏷️ *Catalog Category:* ${result.category}
💰 *Catalog/Master Price:* ${result.estimatedPrice}
📝 *Description:* ${result.description}
---------------------------
✅ *System Status:* Automated Recognition Confirmed.`;

    const hasApi = config.accessToken && config.phoneNumberId;

    if (!hasApi) {
      // Manual Mode via WhatsApp Web
      const encodedMsg = encodeURIComponent(caption);
      window.open(`https://wa.me/${config.targetPhoneNumber}?text=${encodedMsg}`, '_blank');
      setOrderComplete(true);
      setSending(false);
    } else {
      // Full Automated Mode via WhatsApp Cloud API
      try {
        await sendWhatsAppOrder(image, caption, config);
        setOrderComplete(true);
      } catch (e: any) {
        console.error("Automation error, falling back to web:", e);
        window.open(`https://wa.me/${config.targetPhoneNumber}?text=${encodeURIComponent(caption)}`, '_blank');
        setOrderComplete(true);
      } finally {
        setSending(false);
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 relative min-h-screen">
      {/* Configuration Drawer */}
      {showConfig && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-[2rem] p-8 w-full max-w-md shadow-[0_0_50px_rgba(255,215,0,0.2)] border border-accent/20">
            <h2 className="text-2xl font-black mb-6 flex items-center gap-2">
              <Settings className="text-accent" /> System Config
            </h2>
            <p className="text-xs text-gray-400 mb-6 bg-gray-50 p-3 rounded-xl">
              <strong>Optional:</strong> Add your Meta Cloud API keys for fully background automated orders. If blank, we use manual WhatsApp redirection.
            </p>
            <div className="space-y-4">
              <div>
                <label className="text-[10px] font-black uppercase text-gray-400 mb-1 block">Access Token</label>
                <input type="password" value={config.accessToken} onChange={e => setConfig({...config, accessToken: e.target.value})} className="w-full border-2 border-gray-100 p-3 rounded-xl focus:border-accent outline-none font-mono text-sm" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase text-gray-400 mb-1 block">Phone ID</label>
                <input value={config.phoneNumberId} onChange={e => setConfig({...config, phoneNumberId: e.target.value})} className="w-full border-2 border-gray-100 p-3 rounded-xl focus:border-accent outline-none font-mono text-sm" />
              </div>
              <div>
                <label className="text-[10px] font-black uppercase text-gray-400 mb-1 block">Recipient WhatsApp</label>
                <input value={config.targetPhoneNumber} onChange={e => setConfig({...config, targetPhoneNumber: e.target.value})} className="w-full border-2 border-gray-100 p-3 rounded-xl focus:border-accent outline-none font-mono text-sm" />
              </div>
              <div className="pt-4 flex gap-3">
                <button onClick={saveConfig} className="flex-1 bg-black text-white py-4 rounded-xl font-bold hover:bg-accent hover:text-black transition-all">Save Config</button>
                <button onClick={() => setShowConfig(false)} className="px-6 py-4 rounded-xl font-bold bg-gray-100 text-gray-400">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
        <div className="animate-fade-in-up">
          <div className="flex items-center gap-2 text-accent mb-2">
             <ScanLine size={24} />
             <span className="font-black uppercase tracking-[0.2em] text-sm">Universal Recognition System</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-primary">AI PRODUCT <span className="text-accent">SCANNER</span></h1>
          <p className="text-gray-500 max-w-xl mt-4 leading-relaxed">
            Identify and price any of our <strong>500+ master catalog items</strong> instantly. 
            Upload a photo of any item—from hoodies to solar chargers—and place your order with a single click.
          </p>
        </div>
        <button onClick={() => setShowConfig(true)} className="p-4 bg-black text-white rounded-full hover:bg-accent hover:text-black transition-all shadow-xl">
          <Settings size={24} />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Upload Zone */}
        <div className="lg:col-span-5 space-y-8">
          <div 
            className={`border-4 border-dashed rounded-[3rem] aspect-square flex flex-col items-center justify-center cursor-pointer transition-all relative overflow-hidden group shadow-2xl ${
              image ? 'border-accent bg-black' : 'border-gray-100 hover:border-accent bg-white'
            }`}
            onClick={() => fileInputRef.current?.click()}
          >
            {image ? (
              <img src={image} alt="Target" className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500" />
            ) : (
              <div className="text-center p-12 transition-transform group-hover:scale-110">
                <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:bg-accent/10 transition-colors">
                  <Camera size={48} className="text-gray-400 group-hover:text-accent" />
                </div>
                <h3 className="font-black text-2xl mb-2">Upload Photo</h3>
                <p className="text-sm text-gray-400">Identify all 500 catalog items</p>
              </div>
            )}
            <input type="file" ref={fileInputRef} onChange={handleImageUpload} className="hidden" accept="image/*" />
            
            {image && (
                <div className="absolute top-6 right-6 bg-accent text-black p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    <RefreshCcw size={20} />
                </div>
            )}
          </div>
          
          <div className="bg-accent/10 border border-accent/20 p-6 rounded-3xl flex items-start gap-4">
             <Info className="text-accent flex-shrink-0 mt-1" />
             <div className="text-sm">
                <p className="font-black uppercase mb-1">How it works</p>
                <p className="text-gray-600">1. Upload a picture. 2. Our AI matches it to our 500+ items. 3. Enter your name and click 'Order Now' to send to WhatsApp.</p>
             </div>
          </div>
        </div>

        {/* Right Side: Analysis & Ordering */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-[3rem] p-10 shadow-2xl border border-gray-50 min-h-[600px] flex flex-col relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            {!image && !loading && (
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                 <ScanLine size={100} className="text-gray-100 mb-6" />
                 <h3 className="text-2xl font-black text-gray-300">Awaiting Product Image...</h3>
                 <p className="text-gray-400 text-sm mt-2">Upload an item to see AI Recognition in action.</p>
              </div>
            )}

            {loading && (
              <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                <div className="relative">
                    <Loader2 size={80} className="animate-spin text-accent" />
                    <ScanLine size={32} className="absolute inset-0 m-auto text-primary" />
                </div>
                <div className="text-center">
                    <h3 className="font-black text-3xl mb-2">Scanning Inventory...</h3>
                    <p className="text-gray-400 animate-pulse">Consulting 500-item Master Catalog</p>
                </div>
              </div>
            )}

            {result && !loading && !orderComplete && (
              <div className="animate-fade-in-up space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-black text-white px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em]">{result.category}</span>
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                            <div className="h-full bg-accent" style={{width: `${result.confidence}%`}}></div>
                        </div>
                        <span className="text-[10px] font-black text-gray-400">{result.confidence}% Match</span>
                    </div>
                  </div>
                  <h2 className="text-5xl font-black text-primary leading-none tracking-tighter mb-4">{result.title}</h2>
                  <p className="text-gray-500 text-lg italic leading-relaxed">"{result.description}"</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <div className="bg-black text-white p-6 rounded-[2rem] shadow-xl relative overflow-hidden group">
                      <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-125 transition-transform">
                        <Tag size={100} />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-accent mb-2 block">Catalog Price</span>
                      <span className="text-4xl font-black">${result.estimatedPrice}</span>
                   </div>
                   <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100">
                      <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-2 block">Available Stocks</span>
                      <span className="text-4xl font-black text-primary">In Stock</span>
                      <span className="block text-[10px] text-green-600 font-bold mt-1 flex items-center gap-1">
                        <CheckCircle size={10} /> Ships within 24 Hours
                      </span>
                   </div>
                </div>

                {/* Identity Input */}
                <div className="space-y-4 pt-6 border-t border-gray-100">
                   <label className="text-xs font-black uppercase text-primary flex items-center gap-2">
                      <User size={16} className="text-accent" /> Customer Name (e.g. Drax)
                   </label>
                   <div className="relative">
                      <input 
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Enter your name to authorize..."
                        className="w-full bg-gray-50 border-2 border-transparent focus:border-accent p-5 rounded-2xl outline-none font-bold text-lg transition-all pr-12"
                      />
                      <User className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-300" size={20} />
                   </div>
                </div>

                <button 
                  onClick={handleOrderNow}
                  disabled={sending}
                  className={`w-full py-6 rounded-[2rem] font-black text-2xl transition-all shadow-2xl flex items-center justify-center gap-4 group ${
                    sending ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-black text-white hover:bg-accent hover:text-black transform hover:-translate-y-2'
                  }`}
                >
                  {sending ? (
                    <Loader2 size={32} className="animate-spin" />
                  ) : (
                    <>
                      <ShoppingBag size={28} className="group-hover:rotate-12 transition-transform" />
                      ORDER NOW
                      <MessageCircle size={28} className="text-accent group-hover:text-black" />
                    </>
                  )}
                </button>
              </div>
            )}

            {orderComplete && (
               <div className="flex-1 flex flex-col items-center justify-center text-center animate-scale-in">
                  <div className="w-32 h-32 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8 shadow-[0_20px_40px_rgba(22,163,74,0.2)]">
                     <CheckCircle size={64} />
                  </div>
                  <h2 className="text-5xl font-black text-primary mb-4 tracking-tighter">ORDER INITIATED</h2>
                  <p className="text-gray-500 max-w-sm mx-auto mb-12 text-lg">
                     Great choice, <strong>{customerName}</strong>! Your request for the <strong>{result?.title}</strong> is being processed via WhatsApp.
                  </p>
                  <button 
                    onClick={() => {
                       setOrderComplete(false);
                       setImage(null);
                       setResult(null);
                       setCustomerName('');
                    }}
                    className="bg-black text-white px-12 py-5 rounded-full font-black text-xl hover:bg-accent hover:text-black transition-all shadow-xl flex items-center gap-3"
                  >
                    <RefreshCcw size={24} /> New Scan
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
