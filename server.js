const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON payloads and serve static files from the 'public' folder
app.use(express.json());
app.use(express.static('public'));

// Predefined FAQ Knowledge Base
const faqData = [
  { question: "what is your name", answer: "I am FAQBot, your helpful assistant!" },
  { question: "what are your hours", answer: "We are open 24/7 online!" },
  { question: "how can i contact support", answer: "You can reach support at support@example.com." },
  { question: "where are you located", answer: "We are entirely based in the cloud!" }
];

// POST route to handle incoming chat messages
app.post('/api/chat', (req, res) => {
  const userMessage = req.body.message ? req.body.message.toLowerCase().trim() : "";
  
  // Default fallback answer
  let botAnswer = "Sorry, I don't have an answer for that question.";

  // Simple string matching to find a matching FAQ
  for (const item of faqData) {
    if (userMessage.includes(item.question)) {
      botAnswer = item.answer;
      break; 
    }
  }

  // Send the response back to the client
  res.json({ reply: botAnswer });
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
