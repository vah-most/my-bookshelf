import React from "react";
import { Button } from "@mui/material";

import Modal from "@/components/Modal";

import "./Prompt.scss";

interface IPromptProps {
  title?: string;
  message: string;
  onOk: () => void;
  onCancel: () => void;
  className?: string;
}

const Prompt = ({
  className,
  title,
  message,
  onOk,
  onCancel,
}: IPromptProps) => {
  return (
    <Modal
      className={`prompt-modal ${className}`}
      onClose={() => onCancel()}
      title={title ? title : "Warning"}
      visible={true}
      portalId="portal-prompt-id"
    >
      <div className="prompt-modal__box">
        <div className="prompt-modal__message">{message}</div>
        <div className="prompt-modal__btns">
          <Button
            data-testid="prompt-modal__ok-btn"
            variant="contained"
            className="prompt-modal__ok-btn"
            onClick={onOk}
          >
            OK
          </Button>
          {onCancel && (
            <Button
              data-testid="prompt-modal__cancel-btn"
              variant="contained"
              className="prompt-modal__cancel-btn"
              onClick={onCancel}
            >
              Cancel
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Prompt;
