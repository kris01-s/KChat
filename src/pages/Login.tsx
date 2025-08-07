import { Lock, Mail } from "lucide-react";
import AuthHeader from "@/components/custom/AuthHeader.js";
import React from "react";
import TextInput from "@/components/custom/TextInput.js";
import { Button } from "@/components/ui/button.js";
import { SocialSection } from "@/components/custom/SocialSection.js";
import ActionButton from "@/components/custom/ActionButton.js";
import { Constants } from "@/lib/constants/constants.js";

export default function Login() {
  return (
    <div className="bg-[var(--background)] w-screen h-screen flex justify-center items-center px-2 sm:px-4">
      <div className="rounded-3xl bg-[var(--background)] border border-[var(--border)] py-8 px-6 sm:px-10 md:px-16 shadow-2xl">
        <div className="mx-2 sm:mx-5">
          <AuthHeader
            title={Constants.LOGIN.HEADER.TITLE}
            subtitle={Constants.LOGIN.HEADER.SUBTITLE}
          />
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col items-start gap-6">
          <TextInput
            label={Constants.LOGIN.FORM.EMAIL_LABEL}
            placeholder={Constants.LOGIN.FORM.EMAIL_PLACEHOLDER}
            type="email"
            id="email"
            icon={<Mail />}
          />
          <TextInput
            label={Constants.LOGIN.FORM.PASSWORD_LABEL}
            placeholder={Constants.LOGIN.FORM.PASSWORD_PLACEHOLDER}
            type="password"
            id="password"
            icon={<Lock />}
          />
          <Button className="bg-transparent shadow-none text-[var(--destructive)] self-end font-semibold text-sm">
            {Constants.LOGIN.FORM.FORGOT_PASSWORD}
          </Button>

          <ActionButton
            label={Constants.LOGIN.FORM.ACTION_BUTTON_LABEL}
            onClick={() => {}}
          />
          <SocialSection />
        </div>
      </div>
    </div>
  );
}
