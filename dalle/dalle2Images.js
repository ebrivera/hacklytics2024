// get from the .env file in the root directory the API key for OpenAI

require("dotenv").config();
const fs = require("fs").promises;
const key = process.env.OPENAI_API_KEY;

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: key,
});
const openai = new OpenAIApi(configuration);

const predict = async function () {
  const response = await openai.createImage({
    prompt:
      "A realistic 360 degree background image from the perspective of an individual standing in their living room looking out the window.",
    n: 1,
    size: "1024x1024",
  });
  console.log(response.data);
  return response.data;
};

predict();
