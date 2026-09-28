"use client";
import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { User, Package, Settings, LogOut, Mail, Lock, ArrowRight } from "lucide-react";

export default function ProfilePage() {
  const { user, isAuthenticated, login, logout } = useAuth();
  const [tab, setTab] = useState<"login" | "register">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email);
  };

  // Not logged in — show auth UI
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen pt-[116px] md:pt-[140px] pb-28 md:pb-16 bg-[#F5F7FA] flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-md w-full">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <User size={32} className="text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">প্রবাসমার্ট অ্যাকাউন্ট</h1>
            <p className="text-gray-500 text-sm mt-1">আপনার অ্যাকাউন্টে প্রবেশ করুন</p>
          </div>

          {/* Tabs */}
          <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
            <button
              onClick={() => setTab("login")}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold transition ${tab === "login" ? "bg-white text-primary shadow-sm" : "text-gray-500"}`}
            >
              লগইন
            </button>
            <button
              onClick={() => setTab("register")}
              className={`flex-1 py-2 rounded-lg text-sm font-semibold transition ${tab === "register" ? "bg-white text-primary shadow-sm" : "text-gray-500"}`}
            >
              নিবন্ধন
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {tab === "register" && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">আপনার নাম</label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="আপনার পুরো নাম"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition text-sm"
                  />
                </div>
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ইমেইল ঠিকানা</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition text-sm"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">পাসওয়ার্ড</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="আপনার পাসওয়ার্ড"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition text-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:opacity-90 transition flex items-center justify-center gap-2 mt-2"
            >
              {tab === "login" ? "লগইন করুন" : "নিবন্ধন করুন"} <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-xl text-xs text-amber-700 text-center">
            💡 ডেমো: যেকোনো ইমেইল দিয়ে লগইন করুন
          </div>
        </div>
      </main>
    );
  }

  // Logged in — show profile
  return (
    <main className="min-h-screen pt-[116px] md:pt-[140px] pb-28 md:pb-16 bg-[#F5F7FA]">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">আমার অ্যাকাউন্ট</h1>

        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 border-b text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User size={40} className="text-primary" />
                </div>
                <h2 className="font-bold text-gray-800">{user?.name}</h2>
                <p className="text-sm text-gray-500 break-all">{user?.email}</p>
              </div>
              <div className="p-3 space-y-1">
                <button className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-medium text-primary bg-primary/5 rounded-xl">
                  <Package size={18} /> আমার অর্ডার
                </button>
                <button className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-xl transition">
                  <Settings size={18} /> সেটিংস
                </button>
                <button
                  onClick={logout}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left text-sm font-medium text-red-500 hover:bg-red-50 rounded-xl transition border-t border-gray-100 mt-2"
                >
                  <LogOut size={18} /> লগআউট
                </button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-6 pb-4 border-b">সাম্প্রতিক অর্ডার</h2>
              <div className="space-y-4">
                {[
                  { id: "#ORD-582910", date: "১ সেপ্টেম্বর, ২০২৬", status: "Delivered", statusBg: "bg-green-100 text-green-700", total: "৳৭৮০" },
                  { id: "#ORD-109283", date: "২৮ আগস্ট, ২০২৬", status: "Processing", statusBg: "bg-blue-100 text-blue-700", total: "৳৩৪০" },
                ].map(order => (
                  <div key={order.id} className="border border-gray-100 rounded-xl p-4">
                    <div className="flex flex-wrap justify-between items-center mb-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-800">{order.id}</p>
                        <p className="text-xs text-gray-400">{order.date}</p>
                      </div>
                      <div className="text-right mt-1">
                        <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${order.statusBg}`}>{order.status}</span>
                        <p className="font-bold text-gray-800 mt-1 text-sm">{order.total}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-3 border-t border-gray-50">
                      <img src="/images/product_hilsa.jpg" alt="" className="w-12 h-12 object-contain rounded-lg border" />
                      <img src="/images/product_rice.jpg" alt="" className="w-12 h-12 object-contain rounded-lg border" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
