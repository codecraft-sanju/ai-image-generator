import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

const ImageForm = () => {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    try {
      setLoading(true);
      setImage(null); 
      const res = await axios.post("https://ai-image-generator-hn9m.onrender.com/api/generate", { prompt });
      setImage(res.data.image);
      toast.success("Image generated successfully!"); 
    } catch (err) {
      console.error("Error generating image:", err.message);
      toast.error("Something went wrong!");
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
      <button 
        onClick={generateImage} 
        className="btn btn-primary w-full flex justify-center items-center gap-2"
        disabled={loading}
      >
        {loading && (
          <span className="loading loading-spinner loading-sm"></span>
        )}
        {loading ? "Generating..." : "Generate Image"}
      </button>

      {loading && (
        <div className="animate-pulse bg-base-200 rounded-lg h-[300px] w-full max-w-lg mx-auto shadow-md" />
      )}

      {!loading && image && (
        <img 
          src={image} 
          alt="Generated" 
          className="rounded-lg shadow-xl max-h-[500px] mx-auto" 
        />
      )}
    </div>
  );
};

export default ImageForm;
