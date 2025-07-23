import React from "react";
import { Button } from "../ui/button.js";

interface ActionButtonProps {
  label: string;
  onClick: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, onClick }) => {
  return (
    <Button
      onClick={onClick}
      className="w-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] hover:from-[var(--secondary)] hover:to-[var(--primary)] text-[var(--foreground)] font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-lg hover:shadow-[var(--primary)]/30 border-0 h-11"
    >
      {label}
    </Button>
  );
};

export default ActionButton;
