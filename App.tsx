
import React from 'react';
import ChatAssistant from './components/ChatAssistant';
import { PHONE_NUMBER, ADDRESS, SERVICES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Banner */}
      <div className="bg-gray-100 py-2 px-4 flex justify-between items-center text-xs border-b">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 font-medium">
            <img src="https://www.rotorooter.com/favicon.ico" alt="logo" className="w-4 h-4" />
            <span>Get the Roto-Rooter App</span>
          </div>
          <span className="text-gray-500">Easy scheduling and exclusive coupons</span>
        </div>
        <button className="bg-gray-200 px-4 py-1 rounded font-bold uppercase tracking-wider text-[10px] border border-gray-300">Download</button>
      </div>

      {/* Main Header */}
      <header className="bg-white py-4 px-4 sm:px-8 flex flex-col gap-4 shadow-sm">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto w-full">
          <img 
            src="https://www.rotorooter.com/images/roto-rooter-logo.png" 
            alt="Roto-Rooter" 
            className="h-12 md:h-16"
          />
          <div className="flex flex-col items-end gap-2 w-full md:w-auto">
            <div className="flex items-center gap-4 text-xs font-medium text-gray-600">
              <a href="#" className="hover:text-red-600">Careers</a>
              <a href="#" className="hover:text-red-600">Contact Us</a>
              <a href="#" className="hover:text-red-600">Resources</a>
              <div className="relative flex items-center bg-gray-100 rounded border">
                <input type="text" placeholder="How can we help you today?" className="bg-transparent px-3 py-1 text-xs outline-none w-48" />
                <i className="fa-solid fa-magnifying-glass px-2 text-gray-400"></i>
              </div>
            </div>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-black text-[#002855] uppercase">
              <a href="#" className="hover:text-red-600">Locations</a>
              <a href="#" className="hover:text-red-600">Plumbing <i className="fa-solid fa-chevron-down text-[10px]"></i></a>
              <a href="#" className="hover:text-red-600">Drains <i className="fa-solid fa-chevron-down text-[10px]"></i></a>
              <a href="#" className="hover:text-red-600">Commercial <i className="fa-solid fa-chevron-down text-[10px]"></i></a>
              <a href="#" className="hover:text-red-600">Water Quality <i className="fa-solid fa-chevron-down text-[10px]"></i></a>
              <a href="#" className="hover:text-red-600">Water Damage <i className="fa-solid fa-chevron-down text-[10px]"></i></a>
              <a href="#" className="hover:text-red-600">Coupons</a>
            </nav>
          </div>
        </div>
        <div className="max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center py-2 border-t mt-2">
          <div className="flex items-center gap-2 text-[#e21a22] font-bold">
            <i className="fa-solid fa-location-dot"></i>
            <span>MANHATTAN, NY</span>
          </div>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <button className="bg-[#e21a22] text-white px-6 py-2 rounded font-bold flex items-center gap-2 text-sm uppercase">
              <i className="fa-regular fa-calendar-check"></i>
              Schedule
            </button>
            <a href={`tel:${PHONE_NUMBER}`} className="bg-[#002855] text-white px-6 py-2 rounded font-bold flex items-center gap-2 text-sm">
              <i className="fa-solid fa-phone"></i>
              CALL {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="relative z-10 p-8 md:p-16">
            <h2 className="text-[#002855] text-2xl font-black uppercase mb-1">Experts in Plumbing, Drains & Water Cleanup</h2>
            <h3 className="text-[#e21a22] text-4xl font-black italic mb-6">Trusted Since 1935</h3>
            <div className="text-[#002855] text-6xl font-black mb-8 leading-tight">
              {PHONE_NUMBER}
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <button className="bg-[#002855] text-white px-10 py-4 rounded font-bold flex items-center gap-2 uppercase tracking-wide">
                Schedule Online
                <i className="fa-regular fa-calendar-check ml-2"></i>
              </button>
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex items-center gap-1 text-yellow-400">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <span className="text-gray-400 text-xs ml-1">4.9</span>
                </div>
                <div className="text-[10px] text-gray-500 font-bold uppercase mt-1">Rated 4.9 on Google</div>
              </div>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[500px]">
            <img 
              src="https://picsum.photos/id/1070/1200/800" 
              alt="Plumber Van" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay simulation of the cutout from screenshot */}
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Red Callout */}
      <div className="bg-[#e21a22] text-white py-4 text-center font-bold text-sm uppercase flex items-center justify-center gap-2 tracking-widest">
        Free Estimates & No Extra Charge on Christmas Day
        <i className="fa-solid fa-chevron-right"></i>
      </div>

      {/* Services and Features */}
      <section className="bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
          {/* Why Choose Us */}
          <div className="bg-[#002855] text-white p-12 md:p-16">
            <h2 className="text-3xl font-black uppercase mb-4 leading-none">Plumbers You've Trusted for Over 90 Years</h2>
            <div className="text-2xl font-bold mb-8 italic">Open 24/7</div>
            <ul className="space-y-4 font-medium text-lg">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                No Extra Charge Nights, Weekends, and Holidays
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                Free Estimates
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                Full-Service Plumbing For Home & Business
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                State-of-the-Art Drain Cleaning Equipment
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                Licensed & Insured. Trusted Since 1935
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                Ask About Our Senior and Military Discounts
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                Special Financing Available
                <i className="fa-solid fa-chevron-right text-xs ml-1"></i>
              </li>
            </ul>
          </div>

          {/* Our Services Grid */}
          <div className="bg-white p-12 md:p-16">
            <h2 className="text-[#002855] text-2xl font-black uppercase mb-8">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {SERVICES.map((service, idx) => (
                <div key={idx} className="flex items-start gap-4 group cursor-pointer">
                  <div className="text-blue-600 text-3xl">
                    <i className={`fa-solid ${service.icon}`}></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[#002855] text-sm font-black uppercase group-hover:text-red-600 flex items-center">
                      {service.title}
                      <i className="fa-solid fa-chevron-right text-[10px] ml-2"></i>
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coupons Section */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto bg-[#002855] rounded-xl overflow-hidden relative shadow-2xl">
          <div className="bg-[#e21a22] absolute top-0 left-0 p-4 font-black text-white italic text-xl -rotate-12 translate-x-[-10px] translate-y-[-10px] shadow-lg">
            SAVE!
          </div>
          <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-white text-3xl font-black uppercase tracking-widest border-r md:border-r-0 md:border-b-0 border-white/20 pr-8">
              COUPONS
            </div>
            <div className="flex-1 text-white text-xl md:text-3xl font-bold text-center md:text-left">
              $55 Off Any Plumbing or Drain Cleaning Service
            </div>
            <button className="bg-[#e21a22] text-white px-8 py-4 rounded font-black uppercase tracking-widest hover:bg-[#c0161b] transition-colors">
              View Coupons
            </button>
          </div>
        </div>
      </section>

      {/* Manhattan Specific Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-[#002855] text-4xl font-black uppercase leading-none mb-4">Manhattan NY Plumbers Near You</h1>
            <h4 className="text-[#002855] text-xl font-bold mb-6">Manhattan Plumbing & Drain Solutions: Licensed Manhattan Plumber Providing Emergency Plumbing and Drain Services 24/7</h4>
            <p className="text-gray-600 mb-6 leading-relaxed">
              RR Plumbing Roto-Rooter is a full-service licensed plumber in Manhattan that provides expert plumbing maintenance, repairs, and drain cleaning services. Clogged drain? Leaky faucet? Running toilet Water heater leaking? Sump pump broken? Our licensed and insured plumbers are <strong>available 24 hours a day, 7 days a week, 365 days a year</strong> to handle every type of plumbing emergency.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Since 1935, RR Plumbing Roto-Rooter's Manhattan plumbers have been providing complete residential and commercial plumbing services throughout New York City.
            </p>
            <button className="text-[#002855] font-black uppercase tracking-widest border-b-2 border-[#e21a22] pb-1">Read More</button>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
             <img src="https://picsum.photos/id/1/800/600" alt="Plumbing Work" className="w-full h-auto" />
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-stretch">
          <div className="flex-1 bg-white p-8 rounded-xl shadow-sm border">
            <h3 className="text-[#002855] text-2xl font-black uppercase mb-6">Serving the entire New York Metro Area, including:</h3>
            <p className="text-gray-500 font-bold mb-8">COUNTIES IN THE MANHATTAN METRO AREA</p>
            <p className="text-gray-700 font-medium mb-12 italic">Richmond, New York, Kings</p>
            <button className="bg-[#e21a22] text-white px-8 py-4 rounded font-black uppercase tracking-widest text-sm">View Service Areas</button>
          </div>
          <div className="flex-1 min-h-[400px] bg-gray-200 rounded-xl overflow-hidden relative">
            <div className="absolute inset-0 flex items-center justify-center">
               {/* Simulating Map UI */}
               <img src="https://picsum.photos/id/351/1000/1000" className="w-full h-full object-cover opacity-60" alt="Map Area" />
               <div className="absolute p-4 bg-white rounded shadow-lg max-w-[250px] text-xs">
                 <div className="font-bold text-[#e21a22] mb-1">RR Plumbing Roto-Rooter</div>
                 <p className="mb-2">{ADDRESS}</p>
                 <div className="flex justify-between font-bold">
                    <span>Phone:</span>
                    <span>{PHONE_NUMBER}</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-16 px-4 border-t mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
            <img src="https://www.rotorooter.com/images/roto-rooter-logo.png" alt="logo" className="h-10 opacity-50 grayscale" />
            <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-gray-500 uppercase tracking-widest">
              <a href="#">Schedule Service</a>
              <a href="#">Contact Us</a>
              <a href="#">Products</a>
              <a href="#">About Us</a>
              <a href="#">Company Store</a>
              <a href="#">Careers</a>
            </div>
          </div>
          <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-gray-400 font-medium uppercase tracking-widest">
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#">Do Not Sell My Personal Information</a>
              <a href="#">Unsubscribe</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Use</a>
              <a href="#">CCPA Notice</a>
              <a href="#">TIC Rule</a>
            </div>
            <div className="flex gap-4 text-xl">
              <i className="fa-brands fa-youtube"></i>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-pinterest"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
          <p className="text-center mt-8 text-[10px] text-gray-400">
            © {new Date().getFullYear()} RR Plumbing Roto-Rooter. All rights reserved. Licensed Manhattan Plumber.
          </p>
        </div>
      </footer>

      {/* Smart Assistant */}
      <ChatAssistant />
    </div>
  );
};

export default App;
