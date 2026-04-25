// src/hooks/useModal.js

import { useState } from "react";

/**
 * Custom hook for managing modal state.
 * Handles opening/closing and setting content.
 *
 * @returns {{ modal: boolean, modalContent: React.ReactNode, handleModal: Function }}
 */
export const useModal = () => {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState("IM A MODAL");

  /**
   * Toggles modal visibility and optionally sets content.
   * @param {React.ReactNode|false} content - Content to show, or false to just toggle
   */
  const handleModal = (content = false) => {
    setModal(!modal);
    if (content) {
      setModalContent(content);
    }
  };

  return { modal, modalContent, handleModal };
};

// handleModal(<Component />)
