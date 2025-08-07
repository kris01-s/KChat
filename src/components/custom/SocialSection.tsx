import React from "react";

import { FacebookIcon, GoogleIcon } from "@/lib/constants/svg.js";
import IconButton from "./IconButton.js";
import { Button } from "../ui/button.js";

export enum ScreenType {
  login,
  register,
}

interface SocialSectionProps {
  screenType?: ScreenType;
}

export const SocialSection = ({
  screenType = ScreenType.login,
}: SocialSectionProps) => {
  const socialButtons = [
    {
      label: "Facebook",
      icon: <FacebookIcon />,
      onClick: () => {},
    },
    {
      label: "Google",
      icon: <GoogleIcon />,
      onClick: () => {},
    },
  ];

  return (
    <div className="flex flex-col w-full gap-3 mt-3">
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[var(--border)]"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-[var(--background)] text-[var(--muted-foreground)]">
            or continue with
          </span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        {socialButtons.map((button, index) => (
          <IconButton
            key={index}
            label={button.label}
            icon={button.icon}
            onClick={button.onClick}
          />
        ))}
      </div>

      <div className="mt-8 text-center self-center">
        <p className="text-[var(--muted-foreground)] text-sm">
          {screenType === ScreenType.login
            ? `Don't have an account?`
            : `Already have an account?`}
          <Button
            onClick={() => {}}
            className="ml-1 bg-transparent shadow-none text-[var(--destructive)] hover:text-[var(--foreground)] font-semibold transition-colors p-0 h-auto"
          >
            {screenType === ScreenType.login ? `Sign up here` : `Sign in here`}
          </Button>
        </p>
      </div>
    </div>
  );
};
