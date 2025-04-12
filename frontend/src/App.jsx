import { ToastContainer } from "react-toastify"; 
import ThemeToggle from "./components/ThemeToggle";
import ImageForm from "./components/ImageForm";

function App() {
  return (
    <div className="min-h-screen p-4 bg-base-200 text-base-content">
      <div className="max-w-2xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">PixelCrafter - AI Image Generator</h1>
        <ThemeToggle />
        <ImageForm />
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000} 
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored" 
      />
    </div>
  );
}

export default App;
