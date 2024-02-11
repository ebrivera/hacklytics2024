// api/generate-image.js
require("dotenv").config();
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
