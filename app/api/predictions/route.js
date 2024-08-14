import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
    auth: process.env.AI_API_KEY,
});

export async function POST(request) {
    if (!process.env.AI_API_KEY) {
        throw new Error(
            'The AI_API_KEY environment variable is not set. See README.md for instructions on how to set it.'
        );
    }

    const { prompt } = await request.json();

    const options = {
        version: '8beff3369e81422112d93b89ca01426147de542cd4684c244b673b105188fe5f',
        // input: { prompt }
        input: {
            prompt: "Realistic UFO or UAP",
            //image_dimensions: "1024x1024",
            //num_inference_steps: 50,
            //num_outputs: 4,
            //guideance_scale: 6,
            //scheduler: "PNDM",
            image_dimensions: "512x512",
            num_inference_steps: 20,
            // num_inference_steps: 12,
            num_outputs: 1,
            guideance_scale: 4.5,
            //guideance_scale: 3.5,
            // scheduler: "K_EULER",
        },
    }

    const prediction = await replicate.predictions.create(options);

    if (prediction?.error) {
        return NextResponse.json({ detail: prediction.error }, { status: 500 });
    }

    return NextResponse.json(prediction, { status: 201 });
}
