// src/components/Modal/Modal.jsx

import React, { useContext } from "react";
import { ModalContext } from "../../contexts/ModalContext";
import { Overlay, ModalBox } from "./Modal.styled";

/**
 * Generic Modal component.
 * Reads open state and content from ModalContext.
 */
function Modal() {
  const { modal, modalContent, handleModal } = useContext(ModalContext);

  if (!modal) return null;

  return (
    <Overlay onClick={() => handleModal()}>
      <ModalBox onClick={(e) => e.stopPropagation()}>{modalContent}</ModalBox>
    </Overlay>
  );
}

export default Modal;
