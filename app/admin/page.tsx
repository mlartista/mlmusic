'use client';

import React, { useState } from 'react';
import { LayoutDashboard, UserPlus, Disc, Music, Upload, Plus, Trash2, Edit3 } from 'lucide-react';
import { createArtist, createAlbum, uploadSong } from './actions';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex h-screen bg-ml-black text-white">
      {/* Admin Sidebar */}
      <div className="w-64 bg-ml-dark-grey p-4 flex flex-col gap-4 border-r border-gray-800">
        <div className="mb-8">
          <img src="/assets/logo.png" alt="ML Music Admin" className="h-10 w-auto" />
          <p className="text-xs text-gray-500 mt-2 font-bold uppercase tracking-widest">Painel Admin</p>
        </div>

        <nav className="flex flex-col gap-2">
          <AdminNavItem
            icon={LayoutDashboard}
            label="Dashboard"
            active={activeTab === 'dashboard'}
            onClick={() => setActiveTab('dashboard')}
          />
          <AdminNavItem
            icon={UserPlus}
            label="Artistas"
            active={activeTab === 'artists'}
            onClick={() => setActiveTab('artists')}
          />
          <AdminNavItem
            icon={Disc}
            label="Álbuns"
            active={activeTab === 'albums'}
            onClick={() => setActiveTab('albums')}
          />
          <AdminNavItem
            icon={Music}
            label="Músicas"
            active={activeTab === 'songs'}
            onClick={() => setActiveTab('songs')}
          />
        </nav>
      </div>

      {/* Admin Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        {activeTab === 'dashboard' && <AdminDashboard />}
        {activeTab === 'artists' && <ArtistManager />}
        {activeTab === 'albums' && <AlbumManager />}
        {activeTab === 'songs' && <SongManager />}
      </div>
    </div>
  );
}

function AdminNavItem({ icon: Icon, label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-ml-green text-black font-bold' : 'text-gray-400 hover:bg-ml-light-grey hover:text-white'}`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </div>
  );
}

function AdminDashboard() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Visão Geral</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard label="Total de Músicas" value="1,240" color="bg-blue-600" />
        <StatCard label="Artistas" value="156" color="bg-purple-600" />
        <StatCard label="Usuários Ativos" value="8,902" color="bg-ml-green" />
      </div>
      <div className="bg-ml-dark-grey p-6 rounded-xl border border-gray-800">
        <h2 className="text-xl font-bold mb-4">Atividade Recente</h2>
        <div className="flex flex-col gap-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex justify-between items-center p-3 bg-ml-black rounded-lg border border-gray-800 text-sm">
              <span>Nova música adicionada: <span className="text-ml-green font-bold">Track {i}</span></span>
              <span className="text-gray-500">há 2 horas</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, color }) {
  return (
    <div className={`${color} p-6 rounded-2xl text-white shadow-lg`}>
      <div className="text-sm font-medium opacity-80">{label}</div>
      <div className="text-4xl font-black mt-2">{value}</div>
    </div>
  );
}

function ArtistManager() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Gerenciar Artistas</h1>
      </div>

      <div className="bg-ml-dark-grey p-6 rounded-xl border border-gray-800">
        <h2 className="text-xl font-bold mb-4">Adicionar Novo Artista</h2>
        <form action={createArtist} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input name="name" placeholder="Nome do Artista" className="bg-ml-black p-3 rounded-lg border border-gray-700 outline-none focus:border-ml-green" required />
          <input name="imageUrl" placeholder="URL da Imagem" className="bg-ml-black p-3 rounded-lg border border-gray-700 outline-none focus:border-ml-green" required />
          <input name="bio" placeholder="Breve Bio" className="bg-ml-black p-3 rounded-lg border border-gray-700 outline-none focus:border-ml-green" />
          <button type="submit" className="bg-ml-green text-black font-bold p-3 rounded-lg hover:scale-105 transition-transform col-span-full">Salvar Artista</button>
        </form>
      </div>

      <table className="w-full text-left border-collapse">
        <thead className="text-gray-500 border-b border-gray-800">
          <tr>
            <th className="py-3 px-4">Nome</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4 text-right">Ações</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map(i => (
            <tr key={i} className="border-b border-gray-900 hover:bg-ml-light-grey transition-colors">
              <td className="py-3 px-4 flex items-center gap-3">
                <div className="h-8 w-8 bg-gray-700 rounded-full overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Artist" />
                </div>
                <span>Artista {i}</span>
              </td>
              <td className="py-3 px-4">
                <span className="text-xs bg-ml-green/20 text-ml-green px-2 py-1 rounded-full font-bold">Verificado</span>
              </td>
              <td className="py-3 px-4 text-right">
                <button className="text-gray-500 hover:text-white transition-colors mr-4"><Edit3 size={16}/></button>
                <button className="text-gray-500 hover:text-red-500 transition-colors"><Trash2 size={16}/></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function AlbumManager() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Gerenciar Álbuns</h1>
      <div className="bg-ml-dark-grey p-6 rounded-xl border border-gray-800">
        <h2 className="text-xl font-bold mb-4">Criar Novo Álbum</h2>
        <form action={createAlbum} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input name="title" placeholder="Título do Álbum" className="bg-ml-black p-3 rounded-lg border border-gray-700 outline-none focus:border-ml-green" required />
          <input name="coverUrl" placeholder="URL da Capa" className="bg-ml-black p-3 rounded-lg border border-gray-700 outline-none focus:border-ml-green" required />
          <input name="artistId" placeholder="ID do Artista" className="bg-ml-black p-3 rounded-lg border border-gray-700 outline-none focus:border-ml-green" required />
          <button type="submit" className="bg-ml-green text-black font-bold p-3 rounded-lg hover:scale-105 transition-transform col-span-full">Criar Álbum</button>
        </form>
      </div>
    </div>
  );
}

function SongManager() {
  const [isUploading, setIsUploading] = useState(false);

  async function handleUpload(formData: FormData) {
    setIsUploading(true);
    try {
      await uploadSong(formData);
      alert('Música enviada com sucesso!');
    } catch (e) {
      alert('Erro ao enviar música.');
    } finally {
      setIsUploading(false);
    }
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-3xl font-bold">Gerenciar Músicas</h1>

      <div className="bg-ml-dark-grey p-8 rounded-2xl border-2 border-dashed border-gray-700 flex flex-col items-center justify-center gap-4 group hover:border-ml-green transition-colors">
        <div className="h-16 w-16 bg-ml-black rounded-full flex items-center justify-center text-ml-green group-hover:scale-110 transition-transform">
          <Upload size={32} />
        </div>
        <div className="text-center">
          <h3 className="text-xl font-bold">Subir Nova Música</h3>
          <p className="text-gray-500 text-sm">Envie seu arquivo .mp3 e vincule a um álbum</p>
        </div>

        <form action={handleUpload} className="flex flex-col gap-4 w-full max-w-md">
          <input name="title" placeholder="Nome da Música" className="bg-ml-black p-3 rounded-lg border border-gray-700 outline-none focus:border-ml-green" required />
          <input name="albumId" placeholder="ID do Álbum" className="bg-ml-black p-3 rounded-lg border border-gray-700 outline-none focus:border-ml-green" required />
          <input type="file" name="file" accept="audio/*" className="block w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-ml-green file:text-black hover:file:bg-green-400 cursor-pointer" required />
          <button
            type="submit"
            disabled={isUploading}
            className="bg-ml-green text-black font-bold p-3 rounded-full hover:scale-105 transition-transform disabled:opacity-50"
          >
            {isUploading ? 'Enviando...' : 'Confirmar Upload'}
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 gap-4">
         {[1, 2, 3].map(i => (
           <div key={i} className="p-4 bg-ml-dark-grey rounded-lg flex justify-between items-center border border-gray-800">
              <div className="flex items-center gap-4">
                 <div className="h-10 w-10 bg-gray-800 rounded flex items-center justify-center"><Music size={20}/></div>
                 <div className="flex flex-col">
                    <span className="font-bold">Música Sample {i}</span>
                    <span className="text-xs text-gray-500">Artista Teste - Álbum 1</span>
                 </div>
              </div>
              <div className="flex gap-2">
                 <button className="p-2 hover:bg-gray-800 rounded text-gray-400 hover:text-white"><Edit3 size={18}/></button>
                 <button className="p-2 hover:bg-red-900 rounded text-gray-400 hover:text-red-500"><Trash2 size={18}/></button>
              </div>
           </div>
         ))}
      </div>
    </div>
  );
}
