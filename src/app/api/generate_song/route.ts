import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const payload = {
      prompt:
        "A hip-hop song about the months of the year, with catchy lyrics and a groovy beat.",
      make_instrumental: false,
      wait_audio: false,
    };

    try {
      const response = await axios.post(
        "https://suno-api-kappa-topaz.vercel.app/api/generate",
        payload,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const songData = response.data;
      res.status(200).json(songData);
    } catch (error) {
      res.status(500).json({ error: "Error generating song" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
