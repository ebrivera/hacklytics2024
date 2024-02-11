// get from the .env file in the root directory the API key for OpenAI

require("dotenv").config();
const fs = require("fs").promises;
const key = process.env.OPENAI_API_KEY;

const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: key,
});

const predict = async function (prompt) {
  const response = await openai.images.generate({
    prompt: prompt,
    n: 1,
    size: "1024x1024",
  });
  const imageUrl = response.data.images[0].url;
  console.log(imageUrl);
  return imageUrl;
};

const prompt = "A realistic 360 degree background image from the perspective of an individual standing in their living room looking out the window.";

predict(prompt);
