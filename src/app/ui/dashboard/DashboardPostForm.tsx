"use client";

import React, { use, useEffect, useState } from "react";
import { ButtonPost, ButtonPostProps } from "../buttons/ButtonPost";
import Image from "next/image";
import { UserInfoResponse } from "../../api/types/auth.type";

const DashboardPostForm = () =>{
  const [userMessage, setUserMessage] = useState<string>("");
  const [user, setUser] = useState<UserInfoResponse | null>(null);

  
  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setUserMessage(event.target.value);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/user");
        if (response.ok) {
          const userData: UserInfoResponse = await response.json();
          setUser(userData);
        } else {
          throw new Error(`Failed to fetch user data: ${response.status}`);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);


  const buttonProps: ButtonPostProps = {
    children: "Enviar post",
    message: userMessage,
    className: "p-2 rounded-md font-semibold border-2",
    timeIntervalInMinutes: 1,
    disabled: false,
  };

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"  >
      <div className="grid grid-cols-1 gap-4 w-full mx-auto justify-items-center">
        <div className="h-16 rounded-lg bg-white w-fit flex items-center justify-center">
         {user && (
            <Image src={user.picture} alt={user.name} width={50} height={50} className="rounded-full ml-4" />
          )}
          <button
            className="h-full w-full p-4 rounded-xl"
            onClick={() => {
              console.log("Abre modal ");
            }}
          >
            <input
              className="h-full w-full outline-none"
              placeholder="¿Qué estás pensando?"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardPostForm;
