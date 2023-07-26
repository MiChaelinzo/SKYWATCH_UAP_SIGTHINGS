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
      "stability-ai/stable-diffusion:ac732df83cea7fff18b8472768c88ad041fa750ff7682a21affe81863cbe77e4",
      {
        input: {
          prompt: "Realistic UFO or UAP",
          image_dimensions: "1024x1024",
          num_inference_steps: 50,
          num_outputs: 4,
          guideance_scale: 6,
          scheduler: "PNDM" , 
        },
      },
    );


    console.log(output)
    res.status(200).json(output)
    //res.status(200).json([
     //   'https://replicate.delivery/pbxt/neqGIe66cYuPOUPM0JqokMfqsX9CRYgvkycUxyqlCKUjwJchA/out-0.png'
    //  ]
    //);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error', error });
  }
};

export default handler;