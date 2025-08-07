import { Lock, Mail } from "lucide-react";
import AuthHeader from "@/components/custom/AuthHeader.js";
import React from "react";
import TextInput from "@/components/custom/TextInput.js";

import {
  ScreenType,
  SocialSection,
} from "@/components/custom/SocialSection.js";
import ActionButton from "@/components/custom/ActionButton.js";

export default function Register() {
  return (
    <div className="bg-[var(--background)] w-full flex  items-center h-screen overflow-y-auto px-2 sm:px-4">
      <div className="max-w-screen-sm mx-auto my-10 rounded-3xl bg-[var(--background)] border border-[var(--border)] px-6 sm:px-10 md:px-16 py-10 shadow-2xl">
        <div className="mx-2 sm:mx-5">
          <AuthHeader
            title="Welcome to KChat!"
            subtitle="Create your Kchat account"
          />
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col items-start gap-6">
          <TextInput
            label="Full Name"
            placeholder="Your full name"
            type="text"
            id="name"
            icon={<Mail />}
          />
          <TextInput
            label="Email Address"
            placeholder="your@email.com"
            type="email"
            id="email"
            icon={<Mail />}
          />
          <TextInput
            label="Password"
            placeholder="******"
            type="password"
            id="password"
            icon={<Lock />}
          />
          <TextInput
            label="Confirm Password"
            placeholder="******"
            type="password"
            id="password-confirm"
            icon={<Lock />}
          />

          <ActionButton label={"Create Account"} onClick={() => {}} />

          <SocialSection screenType={ScreenType.register} />
        </div>
      </div>
    </div>
  );
}
