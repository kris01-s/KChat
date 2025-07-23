import React, { ReactElement } from "react";
import { Button } from "../ui/button.js";
import { cn } from "@/lib/utils.js";

interface IconButtonProps {
  label: string;
  icon: ReactElement;
  onClick: () => void;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  label,
  onClick,
  icon,
  className,
}) => {
  return (
    <Button
      onClick={onClick}
      className={cn(
        className,
        "flex-1 bg-[var(--background)] border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--background)]/20 hover:border-[var(--muted)] rounded-xl py-3 transition-all duration-200"
      )}
    >
      {icon}
      {label}
    </Button>
  );
};

export default IconButton;
