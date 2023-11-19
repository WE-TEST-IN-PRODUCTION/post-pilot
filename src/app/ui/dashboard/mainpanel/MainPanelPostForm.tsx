import React, { useRef, useState } from "react";
import { ButtonPost, ButtonPostProps } from "../../buttons/ButtonPost";

interface MainPanelPostFormProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
}

export const MainPanelPostForm: React.FC<MainPanelPostFormProps> = ({ showModal, setShowModal }) => {
  const [selectedDate, setSelectedDate] = useState<any>(null);
  const [selectedHour, setSelectedHour] = useState<any>(null);
  const [userMessage, setUserMessage] = React.useState<string>("");
  const [timeInterval, setTimeInterval] = useState<number>(0); // [minutes]

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setUserMessage(event.target.value);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeInterval(parseInt(event.target.value));
  };


  const buttonProps: ButtonPostProps = {
    children: "Enviar post",
    message: userMessage,
    className: "p-2 rounded-md font-semibold border-2 border-fun-blue-500 bg-fun-blue-400 hover:bg-fun-blue-300",
    timeIntervalInMinutes: timeInterval === 0 ? undefined : timeInterval,
    disabled: false,
    closeModal: () => setShowModal(!showModal),
  };

  return (
    <div className="relative z-10 text-grey" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="w-full h-screen flex justify-center items-center fixed inset-0">
          <div className="flex flex-col space-y-4 bg-[#323637] rounded-md px-24 py-16">
            <h1 className="text-center text-4xl">New post</h1>
            <div className="w-full h-full p-2">
              <div className="w-full h-full ">
                <label htmlFor="postTitle" className="font-semibold">
                  Post content *:
                </label>
                <textarea
                  onChange={handleTextareaChange}
                  id="postContent"
                  name="postContent"
                  className="w-full h-36 rounded-lg p-2 text-black"
                  placeholder="Your message"
                ></textarea>
              </div>
            </div>

            <div className="p-2 mt-4 flex flex-col space-y-4">
              <label htmlFor="repetition" className="font-semibold col-span-5">
                When do you want to post it?
              </label>
              <div className="flex flex-col">
                <label htmlFor="from" className="text-white">
                  Day
                </label>
                <input type="date" id="from" name="from" className="p-1 text-black" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="time" className="text-white">
                  Post in
                </label>
                <select className="text-black" id="timeSelect" value={timeInterval} onChange={handleSelectChange}>
                  <option value="0">YA</option>
                  <option value="3">3 minutos después</option>
                  <option value="5">5 minutos después</option>
                  <option value="10">10 minutos después</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row justify-between mt-4">
              <button className="p-2 rounded-md font-semibold border-2 border-white hover:text-black hover:bg-white" onClick={() => setShowModal(!showModal)}>Close</button>
              <ButtonPost {...buttonProps} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPanelPostForm;
