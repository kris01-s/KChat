import React from "react";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({
  title,
  subtitle,
}: AuthHeaderProps) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-[90px] h-[90px]">
        <img
          className="w-full h-full object-cover rounded-full border-8 border-[var(--border)]"
          src="src/assets/logo.jpeg"
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <p className="text-4xl text-[var(--foreground)] font-bold">{title}</p>
        <p className="text-[var(--foreground)]">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthHeader;
