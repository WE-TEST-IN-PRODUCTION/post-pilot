"use client";

import React, { useState } from "react";
import { ButtonPost, ButtonPostProps } from "../../buttons/ButtonPost";

const MainPanelPostForm: React.FC = () => {
  const [userMessage, setUserMessage] = useState<string>("");

  // Manejar cambios en el textarea
  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserMessage(event.target.value);
  };

  const buttonProps: ButtonPostProps = {
    children: "Enviar post",
    message: userMessage,
    className: "p-2 rounded-md font-semibold border-2",
    timeIntervalInMinutes: 1,
    disabled: false,
  };

  return (
    <div className="p-8 text-white flex flex-col items-center space-y-4">
      <h1 className="font-bold">Enviar post</h1>
      <textarea
        className="resize-none h-24 w-72 text-black"
        placeholder="Escribe tu publicación aquí"
        value={userMessage}
        onChange={handleTextareaChange}
      />
      <ButtonPost {...buttonProps} />
    </div>
  );
};

export default MainPanelPostForm;
