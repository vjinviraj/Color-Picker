import React, { useState } from "react";

const ImageUploader = ({ onImageUpload }) => {
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
        setError("");
        onImageUpload(file); // Send file to parent
      };
      reader.readAsDataURL(file);
    } else {
      setError("Please upload a valid image file.");
      setPreview(null);
    }
  };

  return (
    <div className="bg-[#1E1E1E] rounded-xl shadow-md p-6 w-full max-w-md mx-auto font-inter border border-[#2E2E2E]">
      <h2 className="text-xl font-semibold text-[#FAFAFA] mb-4">
        Upload an Image
      </h2>

      <label
        htmlFor="fileUpload"
        className="w-full flex flex-col items-center justify-center border-2 border-dashed border-[#2E2E2E] bg-[#121212] text-[#B3B3B3] hover:bg-[#1E1E1E] cursor-pointer rounded-lg p-6 transition duration-300"
      >
        {preview ? (
          <div className="relative w-full">
            <div className="absolute inset-0 bg-black bg-opacity-20 rounded-md"></div>
            <img
              src={preview}
              alt="Preview"
              className="rounded-md max-h-60 object-contain w-full"
            />
          </div>
        ) : (
          <>
            <span className="text-sm">Click to upload or drag an image here</span>
            <span className="text-xs mt-1 text-[#737373]">PNG, JPG, JPEG up to 5MB</span>
          </>
        )}
        <input
          id="fileUpload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </label>

      {error && (
        <p className="text-sm text-[#EF4444] mt-3">{error}</p>
      )}

      {preview && (
        <p className="text-sm text-[#10B981] mt-3">Image uploaded successfully!</p>
      )}
    </div>
  );
};

export default ImageUploader;