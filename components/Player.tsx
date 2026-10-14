'use client';

import React, { useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Repeat, Shuffle, Volume2 } from 'lucide-react';
import { usePlayerStore } from '@/lib/player-store';

export default function Player() {
  const { currentSong, isPlaying, volume, progress, togglePlay, setVolume, setProgress } = usePlayerStore();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener('timeupdate', updateProgress);
    return () => audio.removeEventListener('timeupdate', updateProgress);
  }, []);

  if (!currentSong) {
    return (
      <div className="fixed bottom-0 left-0 right-0 h-24 bg-ml-dark-grey border-t border-gray-800 px-4 flex items-center justify-center text-gray-500 italic">
        Selecione uma música para começar a ouvir no ML Music
      </div>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 h-24 bg-ml-dark-grey border-t border-gray-800 px-4 flex items-center justify-between text-white">
      <audio
        ref={audioRef}
        src={currentSong.audioUrl}
        onEnded={() => usePlayerStore.getState().togglePlay()}
      />

      {/* Song Info */}
      <div className="flex items-center gap-4 w-1/3">
        <div className="h-14 w-14 bg-gray-700 rounded-md overflow-hidden">
          <img src={currentSong.coverUrl} alt="Album cover" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium hover:underline cursor-pointer">{currentSong.title}</span>
          <span className="text-xs text-gray-400 hover:underline cursor-pointer">{currentSong.artist}</span>
        </div>
      </div>

      {/* Player Controls */}
      <div className="flex flex-col items-center gap-2 w-1/3">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-gray-400 hover:text-white cursor-pointer" />
          <SkipBack size={24} className="fill-current hover:scale-105 transition-transform cursor-pointer" />
          <div
            onClick={togglePlay}
            className="h-10 w-10 bg-white rounded-full flex items-center justify-center text-black hover:scale-105 transition-transform cursor-pointer"
          >
            {isPlaying ? <Pause size={24} fill="black" /> : <Play size={24} fill="black" />}
          </div>
          <SkipForward size={24} className="fill-current hover:scale-105 transition-transform cursor-pointer" />
          <Repeat size={20} className="text-gray-400 hover:text-white cursor-pointer" />
        </div>
        <div className="flex items-center gap-2 w-full max-w-md">
          <span className="text-xs text-gray-400">0:00</span>
          <div
            className="h-1 flex-1 bg-gray-600 rounded-full relative group cursor-pointer"
            onClick={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const pct = x / rect.width;
              if (audioRef.current) audioRef.current.currentTime = pct * audioRef.current.duration;
            }}
          >
            <div style={{ width: `${progress}%` }} className="absolute h-full bg-white group-hover:bg-ml-green rounded-full"></div>
          </div>
          <span className="text-xs text-gray-400">3:45</span>
        </div>
      </div>

      {/* Volume & Extra Controls */}
      <div className="flex items-center justify-end gap-4 w-1/3">
        <Volume2 size={20} className="text-gray-400" />
        <div
          className="h-1 w-24 bg-gray-600 rounded-full relative group cursor-pointer"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            setVolume((x / rect.width));
          }}
        >
          <div style={{ width: `${volume * 100}%` }} className="absolute h-full bg-white group-hover:bg-ml-green rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
