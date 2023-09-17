import React, { useEffect } from "react";
import { X } from "react-bootstrap-icons";
import ReactDOM from "react-dom";

import "./Modal.scss";

interface IModalProps {
  portalId?: string;
  children: JSX.Element;
  className?: string;
  onClose: () => any;
  title?: string;
  visible: boolean;
  hideTitle?: boolean;
}
const Modal = ({
  portalId,
  children,
  onClose,
  className,
  title = "",
  visible = false,
  hideTitle = false,
}: IModalProps) => {
  const handleKeyPress = (event: any) => {
    if (event.key === "Escape") onClose();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress, false);
    return () => {
      document.removeEventListener("keydown", handleKeyPress, false);
    };
  }, []);

  const Modal = (
    <div
      className={`modal__container ${
        visible ? "modal__container--visible" : ""
      }`}
      onClick={onClose}
    >
      <div
        className={`modal__box ${className}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {!hideTitle && (
          <div className="modal__title">
            <div>{title}</div>
            <div className="modal__close-btn" onClick={onClose}>
              <X />
            </div>
          </div>
        )}
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );

  return portalId && document.getElementById(portalId)
    ? ReactDOM.createPortal(Modal, document.getElementById(portalId) as Element)
    : Modal;
};

export default Modal;
