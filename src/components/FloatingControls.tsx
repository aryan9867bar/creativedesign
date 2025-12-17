import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Volume2, VolumeX, X } from 'lucide-react';
import { useTheme, themeColors } from '@/contexts/ThemeContext';
import { useMusic } from '@/contexts/MusicContext';
import { Slider } from '@/components/ui/slider';

export default function FloatingControls() {
  const [showTheme, setShowTheme] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const { color, setColor } = useTheme();
  const { isPlaying, volume, currentTrack, tracks, togglePlay, setVolume, selectTrack } = useMusic();

  const handleThemeClick = () => {
    setShowTheme(!showTheme);
    setShowMusic(false);
  };

  const handleMusicClick = () => {
    setShowMusic(!showMusic);
    setShowTheme(false);
  };

  return (
    <>
      {/* Floating Buttons - Top Right Corner */}
      <div className="fixed top-20 right-4 z-50 flex items-center gap-2">
        {/* Theme Button */}
        <motion.button
          onClick={handleThemeClick}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            showTheme ? 'bg-primary text-primary-foreground' : 'bg-secondary/80 backdrop-blur-sm text-foreground hover:bg-secondary'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Palette className="w-5 h-5" />
        </motion.button>

        {/* Music Button */}
        <motion.button
          onClick={handleMusicClick}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
            showMusic ? 'bg-primary text-primary-foreground' : 'bg-secondary/80 backdrop-blur-sm text-foreground hover:bg-secondary'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </motion.button>
      </div>

      {/* Theme Panel Dropdown */}
      <AnimatePresence>
        {showTheme && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-32 right-4 z-50 w-64 glass-card rounded-xl p-4 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-semibold uppercase tracking-wider">Select Theme</span>
              <button onClick={() => setShowTheme(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {themeColors.map((t) => (
                <button
                  key={t.name}
                  onClick={() => setColor(t.name)}
                  className={`w-9 h-9 rounded-full transition-all hover:scale-110 flex items-center justify-center ${
                    color === t.name ? 'ring-2 ring-offset-2 ring-offset-background ring-foreground scale-110' : ''
                  }`}
                  style={{ background: t.hsl }}
                  title={t.name}
                >
                  {color === t.name && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-white text-sm"
                    >
                      ✓
                    </motion.span>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Music Panel Dropdown */}
      <AnimatePresence>
        {showMusic && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed top-32 right-4 z-50 w-64 glass-card rounded-xl p-4 shadow-xl"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                {isPlaying ? <Volume2 className="w-4 h-4 text-primary" /> : <VolumeX className="w-4 h-4" />}
                <span className="text-sm font-semibold uppercase tracking-wider">Sound Lab</span>
              </div>
              <button onClick={() => setShowMusic(false)} className="text-muted-foreground hover:text-foreground">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Master Audio Toggle */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-muted-foreground">Master Audio</span>
              <button
                onClick={togglePlay}
                className={`w-12 h-6 rounded-full relative transition-colors ${
                  isPlaying ? 'bg-primary' : 'bg-muted'
                }`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  isPlaying ? 'translate-x-7' : 'translate-x-1'
                }`} />
              </button>
            </div>

            {/* Volume Slider */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-muted-foreground">Volume</span>
              <div className="flex-1">
                <Slider
                  value={[volume]}
                  onValueChange={(v) => setVolume(v[0])}
                  max={100}
                  step={1}
                />
              </div>
              <span className="text-xs text-primary w-8">{volume}%</span>
            </div>

            {/* Track Selection Grid - 4x3 */}
            <div className="grid grid-cols-4 gap-2">
              {tracks.map((track) => (
                <button
                  key={track.name}
                  onClick={() => selectTrack(track)}
                  className={`p-2 rounded-lg text-center transition-colors ${
                    currentTrack.name === track.name
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  <div className="text-base">{track.icon}</div>
                  <div className="text-[8px] truncate mt-0.5">{track.name}</div>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
