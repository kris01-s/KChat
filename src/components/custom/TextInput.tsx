import React from "react";
import { ReactElement } from "react";
import { Label } from "../ui/label.js";
import { Input } from "../ui/input.js";

interface TextInputProps {
  label: string;
  id: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
  icon: ReactElement<{ className?: string }>;
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  id,
  type,
  icon,
  placeholder,
}: TextInputProps) => {
  return (
    <div className="grid w-full items-center gap-3">
      <Label className="font-semibold text-[var(--foreground)]" htmlFor={id}>
        {label}
      </Label>
      <div className="relative">
        {React.cloneElement(icon, {
          className:
            "absolute left-3 top-1/2 -translate-y-1/2 text-[var(--secondary)] w-5 h-5",
        })}
        <Input
          className="border-[var(--border)] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-[var(--foreground)] text-sm rounded-xl px-4 pl-10 h-11"
          id={id}
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default TextInput;
