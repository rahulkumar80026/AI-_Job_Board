import React, { useState, useRef } from "react";
import toast from "react-hot-toast";
import * as pdfjsLib from "pdfjs-dist";
// Set worker source from CDN
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const ResumeUpload = ({ onUpload }) => {
  const [resumeText, setResumeText] = useState("");
  const fileInputRef = useRef(null); // ref to trigger file input

  // file upload handler
  const handleChange = async (e) => {
    const file = e.target.files[0];

    // Add notification
    if (!file) {
      toast.error("No file selected ❌");
      return;
    }

    // TXT file Handling
    try {
      if (file.type === "text/plain") {
        // Read the file
        const reader = new FileReader();

        reader.onload = (event) => {
          const text = event.target.result;
          setResumeText(text);
          onUpload(text);
          toast.success("Text resume uploaded successfully ✅");
        };
        reader.readAsText(file);
      }

      // Pdf file handling
      else if (file.type === "application/pdf" || file.name.endsWith(".pdf")) {
        console.log("PDF file detected ✅");
        const reader = new FileReader();
        console.log("PDF file loaded 📄");

        reader.onload = async (e) => {
          const typedArray = new Uint8Array(e.target.result);
          const pdf = await pdfjsLib.getDocument({ data: typedArray }).promise;

          let text = "";
          for (let i = 1; i <= pdf.numPages; i++) {
            const page = await pdf.getPage(i);
            const content = await page.getTextContent();
            const strings = content.items.map((item) => item.str);
            text += strings.join(" ") + "\n";
          }
          setResumeText(text);
          console.log("PDF processed ✅");
          onUpload(text);
          toast.success("PDF resume uploaded ✅");
        };
        reader.readAsArrayBuffer(file);
      } else {
        toast.error("Only .txt or .pdf files allowed 🚫");
      }
    } catch (error) {
      console.error("Error reading resume", error);
      toast.error("Failed to upload 😞");
    }
  };

  const handleClick = () => {
    fileInputRef.current.click(); // trigger file input when button is clicked
  };

  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">Upload Resume (.txt/pdf)</label>

      {/* Hidden file input */}
      <input
        type="file"
        accept=".txt,application/pdf"
        onChange={handleChange}
        ref={fileInputRef}
        className="hidden"
      />

      {/* Visible button */}
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
      >
        Upload Resume Here
      </button>
    </div>
  );
};

export default ResumeUpload;
