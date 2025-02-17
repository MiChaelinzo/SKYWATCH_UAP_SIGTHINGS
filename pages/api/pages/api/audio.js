// pages/api/audio.js
// API endpoint for handling audio messages (upload and potentially retrieval)

import { IncomingForm } from 'formidable'; // For handling file uploads
import fs from 'fs';

export const config = {
    api: {
        bodyParser: false, // Disable built-in bodyParser for formidable
    },
};


export default async function handler(req, res) {
    if (req.method === 'POST') {
        // --- Audio File Upload ---
        // In a real application, you would:
        // 1. Authenticate the user uploading the audio (if needed).
        // 2. Use a library like 'formidable' or 'multer' to handle file uploads.
        // 3. Validate the file type and size.
        // 4. Store the audio file in a storage service (e.g., cloud storage like AWS S3, Google Cloud Storage, or local storage).
        // 5. Save metadata about the audio (user ID, timestamp, storage URL, etc.) in a database.
        // 6. Return the URL or ID of the stored audio file.

        const form = new IncomingForm();

        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error("Error parsing form data:", err);
                return res.status(500).json({ error: "Error processing audio upload" });
            }

            const audioFile = files.audio; // Assuming the field name in the form is 'audio'

            if (!audioFile) {
                return res.status(400).json({ error: "No audio file uploaded" });
            }

            // --- Placeholder: Simulate saving audio file ---
            // In a real implementation, you would upload to cloud storage or save locally.
            const oldPath = audioFile[0].filepath;
            const newFileName = `audio_${Date.now()}_${audioFile[0].originalFilename}`; // Generate unique filename
            const newPath = `./public/uploads/${newFileName}`; // Example: Save in public/uploads

            try {
                await fs.promises.copyFile(oldPath, newPath); // Move the file
                const audioUrl = `/uploads/${newFileName}`; // URL to access the file (assuming public/uploads is served statically)

                // --- Placeholder: Save metadata in database ---
                console.log(`Audio file saved at: ${newPath}, URL: ${audioUrl}`);
                // In a real app, save metadata to a database

                return res.status(200).json({ success: true, audioUrl: audioUrl });

            } catch (fileError) {
                console.error("Error saving audio file:", fileError);
                return res.status(500).json({ error: "Error saving audio file" });
            }
        });


    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
