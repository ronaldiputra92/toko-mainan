"use client";

import { useEffect, useState } from "react";
import Modal from "../ui/modal";
import { Button } from "../ui/button";

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading: boolean;
}

export function AlertModal({
  isOpen,
  onClose,
  onConfirm,
  loading,
}: AlertModalProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div>
      <Modal
        title="Are you sure?"
        description="This action cannot be undone."
        isOpen={isOpen}
        onClose={onClose}
      >
        <div className="pt-6 space-x-2 flex items-center justify-end w-full">
          <Button
            disabled={loading}
            variant={"destructive"}
            onClick={onConfirm}
          >
            Continue
          </Button>
          <Button disabled={loading} variant={"secondary"} onClick={onClose}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
}
