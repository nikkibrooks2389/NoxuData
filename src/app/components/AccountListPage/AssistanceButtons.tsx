import React from "react";
import Button from "../UI/Button/Button";

const primaryButtonStyle = {
  fontWeight: "bold",
  color: "#f0671a",
  margin: "0",
};

const AssistanceButtons: React.FC = () => {
  return (
    <div className="flex my-3">
      <Button
        buttonType="primary"
        onClick={() => alert("Button clicked!")}
        disabled={false}
        style={{
          ...primaryButtonStyle,
          borderRadius: "10px 0 0 10px",
          borderRight: "none",
        }}
      >
        <span className="inline-block rotate-180 transform mr-2">&#9432;</span>
        <span>Not Confident</span>
      </Button>
      <Button
        buttonType="primary"
        onClick={() => alert("Button clicked!")}
        disabled={false}
        style={{
          ...primaryButtonStyle,
          borderRadius: "0 10px 10px 0",
        }}
      >
        Human Help
      </Button>
    </div>
  );
};

export default AssistanceButtons;
