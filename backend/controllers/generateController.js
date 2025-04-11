const axios = require('axios');

const generateImage = async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await axios.post(
      'https://api-inference.huggingface.co/models/prompthero/openjourney',
      { inputs: prompt },
      {
        headers: {
          Authorization: `Bearer ${process.env.HUGGING_FACE_API_KEY}`,
        },
        responseType: 'arraybuffer',
      },
    );

    const imageBase64 = Buffer.from(response.data, 'binary').toString('base64');
    res.status(200).json({ image: `data:image/png;base64,${imageBase64}` });
  } catch (error) {
    console.error('Generation Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Image generation failed.' });
  }
};

module.exports = { generateImage };
