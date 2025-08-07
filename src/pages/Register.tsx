import { Lock, Mail } from "lucide-react";
import AuthHeader from "@/components/custom/AuthHeader.js";
import React from "react";
import TextInput from "@/components/custom/TextInput.js";

import { SocialSection } from "@/components/custom/SocialSection.js";
import ActionButton from "@/components/custom/ActionButton.js";
import { Constants } from "@/lib/constants/constants.js";
import { ScreenType } from "@/lib/constants/enums.js";

export default function Register() {
  return (
    <div className="bg-[var(--background)] w-full flex  items-center h-screen overflow-y-auto px-2 sm:px-4">
      <div className="max-w-screen-sm mx-auto my-10 rounded-3xl bg-[var(--background)] border border-[var(--border)] px-6 sm:px-10 md:px-16 py-10 shadow-2xl">
        <div className="mx-2 sm:mx-5">
          <AuthHeader
            title={Constants.REGISTER.HEADER.TITLE}
            subtitle={Constants.REGISTER.HEADER.SUBTITLE}
          />
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col items-start gap-6">
          <TextInput
            label={Constants.REGISTER.FORM.NAME_LABEL}
            placeholder={Constants.REGISTER.FORM.NAME_PLACEHOLDER}
            type="text"
            id="name"
            icon={<Mail />}
          />
          <TextInput
            label={Constants.REGISTER.FORM.EMAIL_LABEL}
            placeholder={Constants.REGISTER.FORM.EMAIL_PLACEHOLDER}
            type="email"
            id="email"
            icon={<Mail />}
          />
          <TextInput
            label={Constants.REGISTER.FORM.PASSWORD_LABEL}
            placeholder={Constants.REGISTER.FORM.CONFIRM_PASSWORD_PLACEHOLDER}
            type="password"
            id="password"
            icon={<Lock />}
          />
          <TextInput
            label={Constants.REGISTER.FORM.CONFIRM_PASSWORD_LABEL}
            placeholder={Constants.REGISTER.FORM.CONFIRM_PASSWORD_PLACEHOLDER}
            type="password"
            id="password-confirm"
            icon={<Lock />}
          />

          <ActionButton
            label={Constants.REGISTER.FORM.ACTION_BUTTON_LABEL}
            onClick={() => {}}
          />

          <SocialSection screenType={ScreenType.register} />
        </div>
      </div>
    </div>
  );
}
