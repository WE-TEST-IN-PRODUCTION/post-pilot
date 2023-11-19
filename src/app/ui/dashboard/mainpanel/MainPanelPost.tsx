"use client";

import React from "react";
import Image from "next/image";
import MainPanelPostForm from "./MainPanelPostForm";

interface MainPanelPostProps {
  picture: string;
  name: string;
}

const MainPanelPost: React.FC<MainPanelPostProps> = ({ name, picture }) => {

  const [showModal, setShowModal] = React.useState<boolean>(false);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
      {showModal ? <MainPanelPostForm showModal={showModal} setShowModal={setShowModal} /> : null}
      <div className="grid grid-cols-1 gap-4 w-full mx-auto justify-items-center">
        <div className="h-16 rounded-lg bg-white w-fit flex items-center justify-center">
          <Image src={picture} alt={name} width={50} height={50} className="rounded-full ml-4" />
          <button
            className="h-full w-full p-4 rounded-xl"
            onClick={() => {
              setShowModal(!showModal);
            }}
          >
            <input className="h-full w-full outline-none" placeholder="¿Qué estás pensando?" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPanelPost;
