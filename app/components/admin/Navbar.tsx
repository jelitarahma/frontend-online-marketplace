'use client';

import Image from 'next/image';
import avatarJs from "@/app/assets/images/avatar-js.png";

const COLORS = {
  primary: '#3b82f6',
  primaryLight: '#60a5fa',
  blueBg: '#eff6ff',
};

export default function AdminNavbar() {
  return (
    <nav 
      className="fixed top-0 right-0 h-16 bg-white shadow-sm z-40"
      style={{ 
        left: '80px',
        borderBottom: '1px solid #e2e8f0'
      }}
    >
      <div className="h-full px-8 flex items-center justify-between">
        <div className="flex items-center">
          <Image 
            src="/assets/online-ecommerce-logo.png" 
            alt="Brand Logo" 
            width={150} 
            height={50}
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        <div className="flex items-center gap-3" style={{ marginRight: '32px' }}>
          <div className="text-right flex flex-col justify-center gap-1">
            <p className="text-sm font-semibold leading-none" style={{ color: COLORS.primary, marginBottom: '0px' }}>Admin</p>
            <p className="text-xs text-gray-500 leading-none" style={{ marginBottom: '0px' }}>Administrator</p>
          </div>
          <div 
            className="w-10 h-10 rounded-full overflow-hidden border-2"
            style={{ borderColor: COLORS.blueBg }}
          >
            <Image 
              src={avatarJs} 
              alt="Admin Avatar" 
              width={40} 
              height={40}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
