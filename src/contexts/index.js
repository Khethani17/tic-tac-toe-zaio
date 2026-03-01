// src/contexts/index.js

import React from "react";
import { ThemeContextProvider } from "./ThemeContext";
import { GameContextProvider } from "./GameContext";
import { SfxContextProvider } from "./SfxContext";

/**
 * Combined Provider that nests all context providers.
 * Keeps App.js and Router.js clean.
 */
function Provider({ children }) {
  return (
    <ThemeContextProvider>
      <GameContextProvider>
        <SfxContextProvider>{children}</SfxContextProvider>
      </GameContextProvider>
    </ThemeContextProvider>
  );
}

export default Provider;
