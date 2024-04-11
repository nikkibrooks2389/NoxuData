import React, { useState } from "react";
import Button from "../UI/Button/Button";
import SendImage from "../../../../public/assets/send-image.png";

const ChatComponent: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex items-center justify-between rounded-lg bg-white mb-4">
      {/* <img src={ChatImage.src} alt="Chat" className="p-2" /> */}
      <select
        value={selectedOption}
        onChange={handleOptionChange}
        className="border p-2 rounded-bl rounded-tl"
      >
        <option value="option1">Chat</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <div
        className="border rounded-tr rounded-br flex-1 mr-4 p-2 flex items-center"
        style={{ userSelect: "none" }}
      >
        <input
          type="text"
          className="flex-1 bg-transparent outline-none"
          placeholder="Start a new chat"
        />
        <button className="rounded-md">
          <span role="img" aria-label="Send">
            <img src={SendImage.src} className="w-6 h-6" />
          </span>
        </button>
      </div>

      <Button
        buttonType="outlined-warning"
        onClick={() => alert("Button clicked!")}
        disabled={false}
      >
        End Chat
      </Button>
    </div>
  );
};

export default ChatComponent;
