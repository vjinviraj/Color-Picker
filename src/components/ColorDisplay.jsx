import React from "react";

const ColorDisplay = ({ selectedColor }) => {
  if (!selectedColor) return null;

  return (
    <div className="bg-[#1E1E1E] border border-[#2E2E2E] shadow-lg rounded-xl p-6 max-w-xl mx-auto font-inter">
      <h2 className="text-lg font-semibold mb-4 text-[#FAFAFA]">
        Selected Color
      </h2>

      <div className="flex items-center space-x-6">
        {/* Color Preview Box */}
        <div
          className="w-24 h-24 rounded-lg shadow-md border border-[#2E2E2E]"
          style={{ backgroundColor: selectedColor }}
        />

        {/* Color Details */}
        <div className="space-y-2">
          <p className="text-sm text-[#B3B3B3]">
            <span className="font-medium">HEX:</span> {selectedColor}
          </p>
          
          <button
            className="px-4 py-1 rounded-md text-sm text-white transition bg-[#7C3AED] hover:bg-[#A78BFA]"
            onClick={() => navigator.clipboard.writeText(selectedColor)}
          >
            Copy HEX
          </button>
        </div>
      </div>
    </div>
  );
};

export default ColorDisplay;