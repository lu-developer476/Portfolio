import { useRef } from "react";

type SoundType = "bleep" | "zoom";

export const useHoverSound = (type: SoundType = "bleep") => {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const getSoundPath = () => {
    switch (type) {
      case "zoom":
        return "/sounds/mixkit-sci-fi-interface-zoom-890.wav";
      case "bleep":
      default:
        return "/sounds/mixkit-fast-sci-fi-bleep-903.wav";
    }
  };

  const play = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(getSoundPath());
      audioRef.current.volume = 0.4;
    }

    audioRef.current.currentTime = 0;
    audioRef.current.play().catch(() => {});
  };

  return { play };
};
