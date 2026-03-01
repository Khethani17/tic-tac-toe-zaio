// src/contexts/SfxContext.js

import React, { createContext } from "react";
import { useSound } from "../hooks/useSound";

/**
 * SfxContext — provides sound effect functions throughout the app.
 */
export const SfxContext = createContext();

export function SfxContextProvider({ children }) {
  const { hoverSfx, clickSfx, completedSfx } = useSound();

  return (
    <SfxContext.Provider value={{ hoverSfx, clickSfx, completedSfx }}>
      {children}
    </SfxContext.Provider>
  );
}
