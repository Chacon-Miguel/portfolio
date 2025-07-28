"use client";

import { useState } from "react";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form"

export default function Home() {
  const [file, setFile] = useState<File | null>(null);
  const [processedUrl, setProcessedUrl] = useState<string | null>(null);
  const [effect, setEffect] = useState("speedup");

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("effect", effect);

    const res = await axios.post("http://localhost:3000/process-audio/", formData, {
      responseType: "blob",
    });

    const url = URL.createObjectURL(res.data);
    setProcessedUrl(url);
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Audio Processor</h1>
      <input type="file" accept=".wav" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <select value={effect} onChange={(e) => setEffect(e.target.value)}>
        <option value="speedup">Speed Up</option>
      </select>
      <button onClick={handleUpload} className="bg-blue-500 text-white p-2 mt-2 rounded">
        Upload and Process
      </button>

      {processedUrl && (
        <div className="mt-4">
          <audio controls src={processedUrl}></audio>
          <a href={processedUrl} download="processed.wav" className="block mt-2 underline">
            Download Processed File
          </a>
        </div>
      )}
    </div>
  );
}
