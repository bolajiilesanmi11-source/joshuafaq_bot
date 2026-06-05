const readline = require('readline');

// Predefined FAQ Knowledge Base
const faqData = [
  { question: "what is your name", answer: "I am FAQWorker, your background assistant!" },
  { question: "what are your hours", answer: "I run 24/7 in the background!" },
  { question: "how can i contact support", answer: "You can reach support at support@example.com." },
  { question: "where are you located", answer: "I live directly in your server terminal!" }
];

// Set up the terminal interface for reading input and writing output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("==================================================");
console.log("🤖 FAQ Chatbot Background Worker Activated!");
console.log("Type your question and press Enter.");
console.log("Type 'exit' or 'quit' to stop the worker.");
console.log("==================================================\n");

// Function to handle the interactive loop
function askQuestion() {
  rl.question('You: ', (input) => {
    const cleanedInput = input.toLowerCase().trim();

    // Allow the user to safely exit the script
    if (cleanedInput === 'exit' || cleanedInput === 'quit') {
      console.log("Bot: Goodbye!");
      rl.close();
      process.exit(0);
    }

    // Default fallback answer
    let botAnswer = "Sorry, I don't have an answer for that question.";

    // Simple string matching logic
    for (const item of faqData) {
      if (cleanedInput.includes(item.question)) {
        botAnswer = item.answer;
        break;
      }
    }

    // Print the bot's answer to the logs
    console.log(`Bot: ${botAnswer}\n`);

    // Call the function again to keep the background worker alive and listening
    askQuestion();
  });
}

// Start the continuous loop
askQuestion();
