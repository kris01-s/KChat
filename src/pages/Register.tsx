import { Lock, Mail } from "lucide-react";
import AuthHeader from "@/components/custom/AuthHeader.js";
import React from "react";
import TextInput from "@/components/custom/TextInput.js";
import { Button } from "@/components/ui/button.js";
import { FacebookIcon, GoogleIcon } from "@/lib/constants/svg.js";
import ActionButton from "@/components/custom/ActionButton.js";
import IconButton from "@/components/custom/IconButton.js";

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

export default function Register() {
  return (
    <div className="bg-[var(--background)] w-full h-screen overflow-y-auto px-2 sm:px-4">
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

          <div className="flex flex-col w-full gap-3 mt-3">
            <ActionButton label="Create Account" onClick={() => {}} />

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[var(--border)]" />
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
          </div>

          <div className="mt-8 text-center self-center">
            <p className="text-[var(--muted-foreground)] text-sm">
              Don't have an account?
              <Button className="ml-1 bg-transparent shadow-none text-[var(--destructive)] hover:text-[var(--foreground)] font-semibold transition-colors p-0 h-auto">
                Sign up here
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
