
export const getPlyrOptions = (hlsRef) => {
  const availableQualities = hlsRef.levels.map(l => l.height)

  const plyrOptions = {
    controls: [
      'rewind', 'play', 'play-large', 'fast-forward', 'progress',
      'current-time', 'duration', 'mute', 'volume',
      'captions', 'settings', 'pip', 'airplay', 'fullscreen',
    ],
    settings: ['captions', 'quality', 'speed'],
    invertTime: true,
    toggleInvert: false,
    keyboard: { 
      focused: true, global: true,
    },
    ratio: '16:9',
    speed: { 
      selected: 1, 
      options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] 
    },
    storage: { enabled: true, key: 'gojou-preferences' },
    tooltips: { controls: true, seek: true },
    captions: {
      active: true,
      language: 'auto',
      update: true
    },
    quality: {
      default: availableQualities[0],
      options: availableQualities,
      forced: true,
      onChange: (newQuality) => {
        for (const [levelIndex, level] of hlsRef.levels.entries()) {
          if (level.height === newQuality)
            hlsRef.currentLevel = levelIndex;
        }
      }
    },
    debug: false
  
  };

  return plyrOptions;

}

