// This is the function where the call to the API is made. Returns the summarized text as a string.
const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

async function summarizeText(text) {
  console.log("Summarizing with Gemini 2.5 Flash..\n");

  // Initialize Google Generative AI with the API key
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  
  // Use Gemini 2.5 Flash model
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

  // Create a prompt for text summarization
  const prompt = `Please provide a concise summary of the following text. The summary should be clear, accurate, and capture the main points while being significantly shorter than the original text:

${text}

Summary:`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const summary = response.text();
    
    console.log("Summary generated successfully");
    return summary;
  }
  catch (error) {
    console.log("Error generating summary:", error);
    throw error;
  }
}

// Allows for summarizeText() to be called outside of this file
module.exports = summarizeText;