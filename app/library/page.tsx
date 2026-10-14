import React from 'react';
import { Heart, Plus, Clock, Music } from 'lucide-react';

export default function LibraryPage() {
  const myPlaylists = [
    { title: 'Favoritos do Verão', songsCount: 42, image: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?w=200&h=200&fit=crop' },
    { title: 'Foco no Trabalho', songsCount: 118, image: 'https://images.unsplash.com/photo-1470225620780-dba8a0b2754f?w=200&h=200&fit=crop' },
    { title: 'ML Music Mix', songsCount: 85, image: 'https://images.unsplash.com/photo-1614613535308-4c87769363ec?w=200&h=200&fit=crop' },
  ];

  return (
    <div className="flex flex-col gap-8">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Sua Biblioteca</h1>
        <button className="bg-white text-black px-4 py-2 rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2">
          <Plus size={20} />
          Criar Playlist
        </button>
      </header>

      <div className="flex flex-col gap-8">
        {/* Quick Filter Chips */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {['Playlists', 'Álbuns', 'Artistas', 'Músicas Curtidas'].map((filter) => (
            <span key={filter} className="px-3 py-1 rounded-full bg-ml-dark-grey text-sm font-medium hover:bg-ml-light-grey cursor-pointer transition-colors whitespace-nowrap">
              {filter}
            </span>
          ))}
        </div>

        {/* My Playlists Grid */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Suas Playlists</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {myPlaylists.map((playlist, i) => (
              <div key={i} className="bg-ml-dark-grey p-4 rounded-lg hover:bg-ml-light-grey transition-colors cursor-pointer group">
                <div className="relative aspect-square mb-4">
                  <img src={playlist.image} alt={playlist.title} className="rounded-md shadow-lg w-full h-full object-cover" />
                  <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 bg-ml-green p-3 rounded-full text-black shadow-xl transition-opacity">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
                <div className="font-bold truncate">{playlist.title}</div>
                <div className="text-sm text-gray-400">{playlist.songsCount} músicas</div>
              </div>
            ))}

            {/* New Playlist Placeholder */}
            <div className="bg-ml-dark-grey p-4 rounded-lg border-2 border-dashed border-gray-700 hover:border-ml-green transition-colors cursor-pointer flex flex-col items-center justify-center aspect-square text-center gap-2">
              <div className="h-12 w-12 bg-gray-800 rounded-full flex items-center justify-center text-gray-500 group-hover:text-white">
                <Plus size={24} />
              </div>
              <span className="font-bold text-gray-400">Nova Playlist</span>
            </div>
          </div>
        </section>

        {/* Liked Songs Special Section */}
        <section className="bg-gradient-to-br from-indigo-900 to-ml-dark-grey p-6 rounded-xl flex items-center gap-6 cursor-pointer hover:brightness-110 transition-all group">
          <div className="h-32 w-32 bg-indigo-600 rounded-lg flex items-center justify-center shadow-2xl relative overflow-hidden">
            <Heart size={64} fill="white" className="text-white z-10" />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-800 to-transparent opacity-50"></div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-sm font-bold uppercase tracking-wider">Playlist</div>
            <h2 className="text-4xl font-black">Músicas Curtidas</h2>
            <div className="text-sm text-gray-300">Todas as músicas que você amou no ML Music</div>
          </div>
          <div className="ml-auto opacity-0 group-hover:opacity-100 bg-ml-green p-4 rounded-full text-black transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </section>
      </div>
    </div>
  );
}
