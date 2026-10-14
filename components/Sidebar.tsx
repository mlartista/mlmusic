import React from 'react';
import { Home, Search, Library, PlusSquare, Heart } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active = false }) => (
  <div className={`flex items-center gap-4 px-4 py-2 cursor-pointer transition-colors ${active ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
    <Icon size={24} />
    <span className="font-semibold">{label}</span>
  </div>
);

export default function Sidebar() {
  return (
    <div className="w-64 bg-black h-screen flex flex-col p-2 gap-2">
      <div className="p-4 mb-4">
        {/* Integration of the ML Music Logo */}
        <img src="/assets/logo.png" alt="ML Music Logo" className="h-10 w-auto" />
      </div>

      <nav className="flex flex-col gap-1">
        <SidebarItem icon={Home} label="Início" active />
        <SidebarItem icon={Search} label="Buscar" />
        <SidebarItem icon={Library} label="Sua Biblioteca" />
      </nav>

      <div className="mt-6 flex flex-col gap-1">
        <SidebarItem icon={PlusSquare} label="Criar Playlist" />
        <SidebarItem icon={Heart} label="Músicas Curtidas" />
      </div>

      <div className="mt-auto p-4 flex flex-col gap-3 border-t border-gray-800">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-gray-700 rounded-full overflow-hidden">
            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=50&h=50&fit=crop" alt="User" />
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-medium truncate">Usuário ML Music</span>
            <span className="text-xs text-gray-500 truncate">Plano Premium</span>
          </div>
        </div>
        <div className="text-[10px] text-gray-600 text-center">
          © 2026 ML Music Inc.
        </div>
      </div>
    </div>
  );
}
