import { useState } from "react";
import axios from "axios";

const ImageForm = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    try {
      setLoading(true);
      const res = await axios.post("https://ai-image-generator-hn9m.onrender.com/api/generate", { prompt });
      setImage(res.data.image);
    } catch (err) {
      console.error("Error generating image:", err.message);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Enter a prompt..."
        className="input input-bordered w-full"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button onClick={generateImage} className="btn btn-primary w-full" disabled={loading}>
        {loading ? "Generating..." : "Generate Image"}
      </button>
      {image && <img src={image} alt="Generated" className="rounded-lg shadow-xl max-h-[500px] mx-auto" />}
    </div>
  );
};

export default ImageForm;
