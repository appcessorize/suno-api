import { useState } from "react";

async function generateCustomAudio(data) {
  try {
    const response = await fetch("/api/custom_generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Something went wrong");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error generating custom audio:", error);
    throw error;
  }
}

export default function CustomSong() {
  const [prompt, setPrompt] = useState("");
  const [tags, setTags] = useState("");
  const [title, setTitle] = useState("");
  const [makeInstrumental, setMakeInstrumental] = useState(false);
  const [waitAudio, setWaitAudio] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    setLoading(true); // Set loading to true when request starts
    setError(null);
    setResult(null);

    try {
      const data = {
        prompt,
        tags: tags.split(",").map((tag) => tag.trim()),
        title,
        make_instrumental: makeInstrumental,
        wait_audio: waitAudio,
      };

      const response = await generateCustomAudio(data);
      setResult(response);
      setError(null);
    } catch (err) {
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false); // Set loading to false when request finishes
    }
  };

  return (
    <div className="flex flex-col justify-center gap-6 m-8">
      <input
        className="p-2 rounded"
        type="text"
        placeholder="Prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <input
        className="p-2 rounded"
        type="text"
        placeholder="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <input
        className="p-2 rounded"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={makeInstrumental}
          onChange={(e) => setMakeInstrumental(e.target.checked)}
        />
        Make Instrumental
      </label>
      <label>
        <input
          type="checkbox"
          checked={waitAudio}
          onChange={(e) => setWaitAudio(e.target.checked)}
        />
        Wait for Audio
      </label>
      <button
        onClick={handleGenerate}
        className="bg-red-500 text-white p-4 rounded shadow flex justify-center items-center"
        disabled={loading}
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM2 12a10 10 0 0110-10v4a6 6 0 00-6 6H2z"
            ></path>
          </svg>
        ) : (
          "Generate Audio"
        )}
      </button>

      {error && <div>Error: {error}</div>}
      {result && (
        <div>
          Audio generated: <audio controls src={result.audioUrl}></audio>
        </div>
      )}
    </div>
  );
}
