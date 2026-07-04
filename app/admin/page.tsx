'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getContacts, type ContactSubmission } from '@/firebase/database';
import { Mail, Phone, Calendar, Briefcase, Loader2, LogOut } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const router = useRouter();
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    // Check authentication
    const isAdmin = sessionStorage.getItem('isAdmin');
    if (isAdmin !== 'true') {
      router.replace('/');
      return;
    }
    setAuthChecked(true);

    // Fetch data
    const fetchData = async () => {
      const data = await getContacts();
      setContacts(data);
      setLoading(false);
    };

    fetchData();
  }, [router]);

  const handleLogout = () => {
    sessionStorage.removeItem('isAdmin');
    router.replace('/');
  };

  if (!authChecked) {
    return <div className="min-h-screen bg-[#050508]" />;
  }

  return (
    <div className="min-h-screen bg-[#050508] text-white p-6 md:p-12 font-sans relative overflow-hidden">
      {/* Background decoration */}
      <div className="fixed top-0 right-0 w-[50vw] h-[50vw] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-10 gap-4 border-b border-white/10 pb-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-display text-white">
              Admin <span className="text-blue-500">Dashboard</span>
            </h1>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              Manage your project inquiries and contacts.
            </p>
          </div>
          
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-2.5 rounded-full text-sm font-medium transition-colors"
          >
            <LogOut size={16} />
            Logout
          </button>
        </header>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32 gap-4">
            <Loader2 className="w-10 h-10 text-blue-500 animate-spin" />
            <p className="text-slate-400 animate-pulse">Loading inquiries...</p>
          </div>
        ) : contacts.length === 0 ? (
          <div className="bg-[#101016] border border-white/5 rounded-2xl p-16 text-center">
            <p className="text-slate-400 text-lg">No project inquiries found yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-[#101016] border border-white/10 rounded-2xl p-6 hover:border-blue-500/30 transition-colors shadow-lg relative group"
              >
                <div className="absolute top-0 right-0 p-4">
                  <span className="text-xs text-slate-500 font-mono">
                    {new Date(contact.timestamp).toLocaleDateString()}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1 pr-20 break-words">{contact.name}</h3>
                
                <div className="flex flex-col gap-3 mt-5">
                  <a href={`mailto:${contact.email}`} className="flex items-center gap-3 text-sm text-slate-300 hover:text-blue-400 transition-colors break-all">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                      <Mail size={14} className="text-blue-400" />
                    </div>
                    {contact.email}
                  </a>
                  
                  {contact.phone && (
                    <a href={`tel:${contact.phone}`} className="flex items-center gap-3 text-sm text-slate-300 hover:text-blue-400 transition-colors break-all">
                      <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                        <Phone size={14} className="text-blue-400" />
                      </div>
                      {contact.phone}
                    </a>
                  )}
                  
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                      <Briefcase size={14} className="text-blue-400" />
                    </div>
                    <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs font-medium">
                      {contact.projectType}
                    </span>
                  </div>
                </div>
                
                <div className="mt-6 pt-5 border-t border-white/10">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Message</h4>
                  <p className="text-sm text-slate-300 leading-relaxed bg-[#0a0a0f] p-4 rounded-xl border border-white/5 break-words whitespace-pre-wrap">
                    {contact.message}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
