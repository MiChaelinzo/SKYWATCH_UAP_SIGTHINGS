import Replicate from 'replicate';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { value } = req.body;

  try {
    const replicate = new Replicate({
      auth: process.env.AI_API_KEY,
    });


    const output = await replicate.run(
      "stability-ai/stable-diffusion:db21e45d3f7023abc2a46ee38a23973f6dce16bb082a930b0c49861f96d1e5bf",
      // "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
      {
        input: {
          prompt: "Realistic UFO or UAP",
          //   image_dimensions: "1024x1024",
          //   num_inference_steps: 50,
          //   num_outputs: 4,
          //   guideance_scale: 6,
          //   scheduler: "PNDM",
             image_dimensions: "512x512",
             num_inference_steps: 20,
             //num_inference_steps: 12,
             num_outputs: 1,
             guideance_scale: 4.5,
             //guideance_scale: 3.5,
             scheduler: "K_EULER" ,
        },
      },
    );


    console.log(output)
    res.status(200).json(output)
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

export default handler;
