import React, { useState } from 'react';
import { Search as SearchIcon, Music, User, Disc } from 'lucide-react';

export default function SearchPage() {
  const [query, setQuery] = useState('');

  // Mock data for searching
  const mockResults = {
    top: { title: 'ML Music Hits 2026', type: 'Playlist', image: 'https://images.unsplash.com/photo-1493225255756-7952b23777a7?w=200&h=200&fit=crop' },
    artists: [
      { name: 'Drake', image: 'https://images.unsplash.com/photo-1508700115892-4be4c7767740?w=100&h=100&fit=crop' },
      { name: 'The Weeknd', image: 'https://images.unsplash.com/photo-1493225255756-7952b23777a7?w=100&h=100&fit=crop' },
    ],
    albums: [
      { title: 'After Hours', artist: 'The Weeknd', image: 'https://images.unsplash.com/photo-1614613535308-4c87769363ec?w=100&h=100&fit=crop' },
      { title: 'Certified Lover Boy', artist: 'Drake', image: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?w=100&h=100&fit=crop' },
    ],
    songs: [
      { title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20' },
      { title: 'Gods Plan', artist: 'Drake', duration: '3:18' },
      { title: 'Starboy', artist: 'The Weeknd', duration: '3:50' },
    ],
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="relative w-full max-w-md">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="O que você quer ouvir?"
          className="w-full pl-10 pr-4 py-3 bg-ml-light-grey rounded-full text-white outline-none focus:ring-2 focus:ring-ml-green transition-all"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {query ? (
        <div className="flex flex-col gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
          {/* Top Result */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Resultado Principal</h2>
            <div className="flex items-center gap-4 bg-ml-dark-grey p-4 rounded-lg hover:bg-ml-light-grey transition-colors cursor-pointer group w-fit">
              <img src={mockResults.top.image} alt="Top" className="h-16 w-16 rounded-md shadow-lg" />
              <div>
                <div className="font-bold text-lg">{mockResults.top.title}</div>
                <div className="text-sm text-gray-400">{mockResults.top.type}</div>
              </div>
              <div className="ml-4 opacity-0 group-hover:opacity-100 bg-ml-green p-3 rounded-full text-black transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
          </section>

          {/* Artists */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Artistas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {mockResults.artists.map((artist, i) => (
                <div key={i} className="bg-ml-dark-grey p-4 rounded-lg hover:bg-ml-light-grey transition-colors cursor-pointer text-center">
                  <img src={artist.image} alt={artist.name} className="aspect-square rounded-full mx-auto mb-4 shadow-lg" />
                  <div className="font-bold truncate">{artist.name}</div>
                  <div className="text-xs text-gray-400">Artista</div>
                </div>
              ))}
            </div>
          </section>

          {/* Albums */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Álbuns</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {mockResults.albums.map((album, i) => (
                <div key={i} className="bg-ml-dark-grey p-4 rounded-lg hover:bg-ml-light-grey transition-colors cursor-pointer group">
                  <img src={album.image} alt={album.title} className="aspect-square rounded-md mb-4 shadow-lg" />
                  <div className="font-bold truncate">{album.title}</div>
                  <div className="text-sm text-gray-400 truncate">{album.artist}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Songs */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Músicas</h2>
            <div className="flex flex-col gap-2">
              {mockResults.songs.map((song, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-md hover:bg-ml-light-grey transition-colors cursor-pointer group">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 bg-gray-800 rounded flex items-center justify-center text-gray-500 group-hover:text-white">
                      <Music size={18} />
                    </div>
                    <div>
                      <div className="font-medium">{song.title}</div>
                      <div className="text-xs text-gray-400">{song.artist}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-400">{song.duration}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center mt-20 text-center gap-4 opacity-60">
          <SearchIcon size={64} className="text-gray-500" />
          <div>
            <h3 className="text-xl font-bold">Busque por músicas, artistas ou álbuns</h3>
            <p className="text-gray-400">Encontre tudo o que você ama no ML Music</p>
          </div>
        </div>
      )}
    </div>
  );
}
