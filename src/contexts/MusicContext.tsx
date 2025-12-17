import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';

export interface MusicTrack {
  name: string;
  icon: string;
}

interface MusicContextType {
  isPlaying: boolean;
  volume: number;
  currentTrack: MusicTrack;
  tracks: MusicTrack[];
  togglePlay: () => void;
  setVolume: (volume: number) => void;
  selectTrack: (track: MusicTrack) => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

// Different music tracks with royalty-free URLs
const musicTracks: MusicTrack[] = [
  { name: 'Lofi', icon: '🎵' },
  { name: 'Ambient', icon: '🌊' },
  { name: 'Chill', icon: '❄️' },
  { name: 'Piano', icon: '🎹' },
  { name: 'Electronic', icon: '⚡' },
  { name: 'Nature', icon: '🌿' },
  { name: 'Jazz', icon: '🎷' },
  { name: 'Orchestral', icon: '🎻' },
  { name: 'Cinematic', icon: '🎬' },
  { name: 'Meditation', icon: '🧘' },
  { name: 'Beats', icon: '🥁' },
  { name: 'Study', icon: '📚' },
];

// Working royalty-free music URLs
const trackUrls: Record<string, string> = {
  'Lofi': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  'Ambient': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  'Chill': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  'Piano': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  'Electronic': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
  'Nature': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
  'Jazz': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
  'Orchestral': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
  'Cinematic': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
  'Meditation': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
  'Beats': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
  'Study': 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
};

export function MusicProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolumeState] = useState(50);
  const [currentTrack, setCurrentTrack] = useState(musicTracks[0]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(trackUrls[currentTrack.name]);
    audioRef.current.loop = true;
    audioRef.current.volume = volume / 100;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current) {
      const wasPlaying = isPlaying;
      audioRef.current.pause();
      audioRef.current.src = trackUrls[currentTrack.name];
      audioRef.current.load();
      if (wasPlaying) {
        audioRef.current.play().catch(console.error);
      }
    }
  }, [currentTrack]);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setIsPlaying(!isPlaying);
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
  };

  const selectTrack = (track: MusicTrack) => {
    setCurrentTrack(track);
  };

  return (
    <MusicContext.Provider
      value={{
        isPlaying,
        volume,
        currentTrack,
        tracks: musicTracks,
        togglePlay,
        setVolume,
        selectTrack,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (!context) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
}
