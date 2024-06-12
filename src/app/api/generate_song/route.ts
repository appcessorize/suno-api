import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
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
    return NextResponse.json(songData);
  } catch (error) {
    return NextResponse.json(
      { error: "Error generating song" },
      { status: 500 }
    );
  }
}
