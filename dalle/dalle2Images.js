// api/generate-image.js
require("dotenv").config();
<<<<<<< HEAD
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
=======
const { Configuration, OpenAIApi } = require("openai");

module.exports = async (req, res) => {
  if (req.method === "POST") {
    const prompt = req.body.prompt;

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    try {
      const response = await openai.createImage({
        prompt: `360 monoscopic image of ${prompt}`,
        n: 1,
        size: "1024x1024",
      });

      res.status(200).json({ imageUrl: response.data.images[0] });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
>>>>>>> 903bf3d1a13fce88f91951284e8c20277a7222bb
