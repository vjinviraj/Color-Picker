import React, { useState, useEffect } from "react";

const ColorPicker = ({ image, onColorSelect }) => {
  const [colors, setColors] = useState([]);
  const [copied, setCopied] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (image) {
      extractColors(image);
    }
  }, [image]);

  const extractColors = (imageFile) => {
    setIsLoading(true);
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      const extractedColors = [];
      const steps = 12;
      
      // Sample colors from different parts of the image
      for (let i = 0; i < steps; i++) {
        const x = Math.floor((i / steps) * img.width);
        const y = Math.floor((i / steps) * img.height);
        const pixel = ctx.getImageData(x, y, 1, 1).data;
        const hex = `#${((1 << 24) + (pixel[0] << 16) + (pixel[1] << 8) + pixel[2]).toString(16).slice(1)}`;
        extractedColors.push(hex);
      }
      
      setColors(extractedColors);
      setIsLoading(false);
    };
    
    img.src = URL.createObjectURL(imageFile);
  };

  const handleCopy = (color, e) => {
    e.stopPropagation();
    navigator.clipboard.writeText(color);
    setCopied(color);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="bg-[#1E1E1E] rounded-xl shadow-md p-6 w-full max-w-3xl mx-auto font-inter border border-[#2E2E2E]">
      <h2 className="text-xl font-semibold mb-4 text-[#FAFAFA]">
        Extracted Colors
      </h2>

      {isLoading ? (
        <p className="text-sm text-[#B3B3B3]">
          Extracting colors...
        </p>
      ) : colors.length === 0 ? (
        <p className="text-sm text-[#B3B3B3]">
          No colors extracted yet.
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {colors.map((color, index) => (
            <div
              key={index}
              className="rounded-md overflow-hidden shadow-sm hover:shadow-md transition cursor-pointer border border-[#2E2E2E] bg-[#121212]"
              onClick={() => onColorSelect(color)}
            >
              <div
                className="h-16 w-full"
                style={{ backgroundColor: color }}
              />
              <div className="text-center py-2 px-1">
                <p
                  className="text-sm transition text-[#FAFAFA] hover:text-[#A78BFA]"
                  onClick={(e) => handleCopy(color, e)}
                >
                  {color}
                </p>
                {copied === color && (
                  <p className="text-xs mt-1 text-[#10B981]">
                    Copied!
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorPicker;