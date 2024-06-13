"use client";

import { useState } from "react";
import axios from "axios";

export default function CustomSong() {
  const [prompt, setPrompt] = useState("");
  const [tags, setTags] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [songUrl, setSongUrl] = useState(null);
  const [error, setError] = useState(null);

  const generateSong = async () => {
    setLoading(true);
    setError(null);
    setSongUrl(null);

    try {
      const data = {
        prompt,
        tags: tags.split(",").map((tag) => tag.trim()),
        title,
        make_instrumental: false,
        wait_audio: true,
      };

      const response = await axios.post("/api/generate_song", data);
      const songData = response.data;

      // Assuming songData contains the song details directly
      setSongUrl(songData.audio_url);
      setLoading(false);
    } catch (error) {
      console.error(
        "Error generating song:",
        error.response || error.message || error
      );
      setError(
        "Failed to generate song. " +
          (error.response?.data?.error || error.message)
      );
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Suno AI Music Generator</h1>

      <div className="form">
        <input
          type="text"
          placeholder="Prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Tags (comma separated)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="input"
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
        />
        <button
          onClick={generateSong}
          disabled={loading}
          className="bg-red-500 text-white rounded p-6 shadow"
        >
          {loading ? "Generating..." : "Generate Custom Song"}
        </button>
      </div>

      {loading && <div className="spinner">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {songUrl && (
        <div>
          <h2>{title}</h2>
          <audio controls>
            <source src={songUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}

      <style jsx>{`
        .container {
          text-align: center;
          margin-top: 50px;
        }
        .form {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .input {
          padding: 10px;
          border-radius: 5px;
          border: 1px solid #ccc;
          width: 300px;
        }
        .spinner {
          margin: 20px 0;
        }
        .error {
          color: red;
          margin: 20px 0;
        }
      `}</style>
    </div>
  );
}
