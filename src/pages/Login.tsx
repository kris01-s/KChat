import { Lock, Mail } from "lucide-react";
import AuthHeader from "@/components/custom/AuthHeader.js";
import React from "react";
import TextInput from "@/components/custom/TextInput.js";
import { Button } from "@/components/ui/button.js";
import { FacebookIcon, GoogleIcon } from "@/lib/constants/svg.js";
import ActionButton from "@/components/custom/ActionButton.js";
import IconButton from "@/components/custom/IconButton.js";

export default function Login() {
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
    <div className="bg-[var(--background)] w-screen h-screen flex justify-center items-center px-2 sm:px-4">
      <div className="rounded-3xl bg-[var(--background)] border border-[var(--border)] py-8 px-6 sm:px-10 md:px-16 shadow-2xl">
        <div className="mx-2 sm:mx-5">
          <AuthHeader
            title="Welcome to KChat!"
            subtitle="Let the chatting begin!"
          />
        </div>

        <div className="mt-12 sm:mt-16 flex flex-col items-start gap-6">
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
          <Button className="bg-transparent shadow-none text-[var(--destructive)] self-end font-semibold text-sm">
            Forgot your password?
          </Button>

          <div className="flex flex-col w-full gap-3 mt-3">
            <ActionButton label="Sign In" onClick={() => {}} />

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
          </div>

          <div className="mt-8 text-center self-center">
            <p className="text-[var(--muted-foreground)] text-sm">
              Already have an account?
              <Button className="ml-1 bg-transparent shadow-none text-[var(--destructive)] hover:text-[var(--foreground)] font-semibold transition-colors p-0 h-auto">
                Sign in here
              </Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
