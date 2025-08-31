import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

// Correct HuggingFace model endpoint for CLIP embeddings
const HF_API_URL =
  "https://api-inference.huggingface.co/models/nomic-ai/nomic-embed-vision-v1.5";
const HF_TOKEN = process.env.HF_TOKEN;

// Generate embedding from an image URL
export const getImageEmbedding = async (imageUrl) => {
  const response = await fetch(HF_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${HF_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs: imageUrl }),
  });

  if (response.status === 401) {
    throw new Error(`Unauthorized — check your HF_TOKEN`);
  }
  if (response.status === 404) {
    throw new Error(`Model not found — check your HF_API_URL: ${HF_API_URL}`);
  }

  const result = await response.json();
  if (result.error) {
    throw new Error(`HuggingFace API error: ${result.error}`);
  }

  // Typically returns [[…vector…]] or directly a vector
  const vector = Array.isArray(result[0]) ? result[0] : result;

  return {
    vector,
    dimension: vector.length,
    model: "nomic-ai/nomic-embed-vision-v1.5",
  };
};