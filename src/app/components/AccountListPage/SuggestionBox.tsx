import React from "react";
import Button from "../UI/Button/Button";

interface SuggestionBoxProps {
  suggestions: string[];
}

const SuggestionBox: React.FC<SuggestionBoxProps> = ({ suggestions }) => {
  return (
    <div className="my-4 inline-flex flex-wrap gap-2">
      {suggestions.map((suggestion, index) => (
        <Button
          disabled={false}
          onClick={() => alert("Button clicked!")}
          buttonType="primary"
        >
          {suggestion}
        </Button>
      ))}
    </div>
  );
};

export default SuggestionBox;
