import React from "react";

import { FacebookIcon, GoogleIcon } from "@/lib/constants/svg.js";
import IconButton from "./IconButton.js";
import { Button } from "../ui/button.js";
import { Constants } from "@/lib/constants/constants.js";
import { ScreenType } from "@/lib/constants/enums.js";

interface SocialSectionProps {
  screenType?: ScreenType;
}

export const SocialSection = ({
  screenType = ScreenType.login,
}: SocialSectionProps) => {
  const socialButtons = [
    {
      label: Constants.AUTH.SOCIAL_BUTTONS.FACEBOOK,
      icon: <FacebookIcon />,
      onClick: () => {},
    },
    {
      label: Constants.AUTH.SOCIAL_BUTTONS.GOOGLE,
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
            {Constants.AUTH.FOOTER.CONTINUE_WITH}
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
            ? Constants.AUTH.FOOTER.DONT_HAVE_ACCOUNT
            : Constants.AUTH.FOOTER.ALREADY_HAVE_ACCOUNT}
          <Button
            onClick={() => {}}
            className="ml-1 bg-transparent shadow-none text-[var(--destructive)] hover:text-[var(--foreground)] font-semibold transition-colors p-0 h-auto"
          >
            {screenType === ScreenType.login
              ? Constants.AUTH.FOOTER.SIGN_UP_HERE
              : Constants.AUTH.FOOTER.SIGN_IN_HERE}
          </Button>
        </p>
      </div>
    </div>
  );
};
