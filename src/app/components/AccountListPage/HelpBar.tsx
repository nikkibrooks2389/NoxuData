import React from "react";
import SuggestionBox from "./SuggestionBox";
import ChatComponent from "./ChatComponent";

interface HelpBarProps {
  // Add any props you need here
}

const HelpBar: React.FC<HelpBarProps> = () => {
  return (
    <div
      className="flex justify-center bg-white border-t border-gray-300 "
      style={{ height: "20vh" }}
    >
      <div className="custom-min-width">
        <SuggestionBox
          suggestions={[
            "How do I check my balance?",
            "How do I transfer money?",
            "How do I pay my bills?",
          ]}
        />
        <ChatComponent />
      </div>
    </div>
  );
};

export default HelpBar;
