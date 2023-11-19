"use client";

import Image from "next/image";
import { FC } from "react";
import useAuth from "../../hooks/useAuth";
import Head from "next/head";
import Swal from "sweetalert2";

export interface LinkedInButtonProps {
  width?: number;
  height?: number;
}

export const LinkedInButton: FC<LinkedInButtonProps> = ({ width, height }) => {
  const { authenticate } = useAuth();
  
const showToast = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Signed in successfully',
    });
  };
  return (
    <a onClick={() => {
        authenticate();
        showToast();
      }} className="cursor-pointer">
      <Image
        src="/assets/linkedin.png"
        alt="LinkedIn"
        width={width ?? 300}
        height={height ?? 80}
      />
    </a>
  );
};
