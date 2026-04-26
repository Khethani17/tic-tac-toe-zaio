// src/hooks/useSound.js

import { useCallback } from "react";

/**
 * Custom hook for playing sound effects.
 * Returns functions to play hover and click sounds.
 *
 * @returns {{ hoverSfx: Function, clickSfx: Function, completedSfx: Function }}
 */
export const useSound = () => {
  

  const playSound = useCallback((frequency = 400, duration = 100) => {
    try {
      const audioContext = new (
        window.AudioContext || window.webkitAudioContext
      )();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = frequency;
      oscillator.type = "sine";
      gainNode.gain.value = 0.1;

      oscillator.start();
      setTimeout(() => {
        oscillator.stop();
        audioContext.close();
      }, duration);
    } catch (e) {
      // Silently fail if audio isn't available
    }
  }, []);

  const hoverSfx = useCallback(() => {
    playSound(500, 50);
  }, [playSound]);

  const clickSfx = useCallback(() => {
    playSound(600, 100);
  }, [playSound]);

  const completedSfx = useCallback(() => {
    playSound(800, 200);
  }, [playSound]);

  return { hoverSfx, clickSfx, completedSfx };
};
