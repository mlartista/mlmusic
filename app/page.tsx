import React from 'react';

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <header className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Bom dia</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="flex items-center gap-4 bg-ml-light-grey/50 hover:bg-ml-light-grey transition-colors rounded-md overflow-hidden group cursor-pointer">
            <div className="h-20 w-20 bg-gray-700 overflow-hidden">
              <img src={`https://images.unsplash.com/photo-1614613535308-4c87769363ec?w=100&h=100&fit=crop&sig=${i}`} alt="Album" />
            </div>
            <span className="font-bold">Playlist Favorita {i}</span>
            <div className="ml-auto mr-4 opacity-0 group-hover:opacity-100 transition-opacity bg-ml-green p-3 rounded-full text-black cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Feito para você</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-ml-dark-grey p-4 rounded-lg hover:bg-ml-light-grey transition-colors cursor-pointer group">
              <div className="relative aspect-square mb-4">
                <img src={`https://images.unsplash.com/photo-1470225620780-dba8a0b2754f?w=200&h=200&fit=crop&sig=${i}`} alt="Album cover" className="rounded-md shadow-lg w-full h-full object-cover" />
                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-ml-green p-3 rounded-full text-black shadow-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </div>
              </div>
              <div className="font-bold truncate">Álbum Top {i}</div>
              <div className="text-sm text-gray-400 truncate">Artista do ML Music</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
