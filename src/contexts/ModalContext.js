// src/contexts/ModalContext.js

import React, { createContext } from "react";
import { useModal } from "../hooks/useModal";

/**
 * ModalContext — wraps the useModal hook into a context
 * so any component in the tree can open/close modals.
 */
export const ModalContext = createContext();

export function ModalContextProvider({ children }) {
  const { modal, modalContent, handleModal } = useModal();

  return (
    <ModalContext.Provider value={{ modal, modalContent, handleModal }}>
      {children}
    </ModalContext.Provider>
  );
}
