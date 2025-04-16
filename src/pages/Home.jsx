import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ImageUploader from "../components/ImageUploader";
import ColorPicker from "../components/ColorPicker";
import ColorDisplay from "../components/ColorDisplay";
import Footer from "../components/Footer";

const Home = () => {
  const [image, setImage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div className="min-h-screen bg-[#121212] font-inter text-[#FAFAFA]">
      <Navbar />

      <main className="py-12 px-4 sm:px-10 max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#FAFAFA] text-center mb-6">
          🎨 Image-Based Color Picker
        </h1>

        <p className="text-[#B3B3B3] text-center max-w-xl mx-auto mb-10">
          Upload an image to extract and explore beautiful color palettes instantly. Click on any color to view its details and copy the hex code!
        </p>

        {/* Image Uploader */}
        <ImageUploader onImageUpload={setImage} />

        {/* Color Picker */}
        {image && (
          <div className="mt-10">
            <ColorPicker image={image} onColorSelect={setSelectedColor} />
          </div>
        )}

        {/* Color Display */}
        {selectedColor && (
          <div className="mt-8">
            <ColorDisplay selectedColor={selectedColor} />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;