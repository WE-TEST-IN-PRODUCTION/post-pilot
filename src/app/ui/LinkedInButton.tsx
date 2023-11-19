"use client";

import Image from "next/image";
import { FC } from "react";
import useAuth from "../hooks/useAuth";

export interface LinkedInButtonProps {
  width?: number;
  height?: number;
}

export const LinkedInButton: FC<LinkedInButtonProps> = ({ width, height }) => {
  const { authenticate } = useAuth();

  return (
    <a onClick={authenticate} className="cursor-pointer">
      <Image
        src="/assets/linkedin.png"
        alt="LinkedIn"
        width={width ?? 300}
        height={height ?? 80}
      />
    </a>
  );
};
