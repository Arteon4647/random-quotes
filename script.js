const quotes = [
  {
    quote: "The only way to do great work is to love what you do",
    author: "Steve Jobs",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower",
    author: "Steve Jobs",
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts",
    author: "Winston Churchill",
  },
  {
    quote: "Do what you can, with what you have, where you are",
    author: "Theodore Roosevelt",
  },
  {
    quote: "It does not matter how slowly you go as long as you do not stop",
    author: "Confucius",
  },
  {
    quote: "Believe you can and you're halfway there",
    author: "Theodore Roosevelt",
  },
  {
    quote: "The best way to predict the future is to create it",
    author: "Peter Drucker",
  },
  {
    quote: "Happiness depends upon ourselves",
    author: "Aristotle",
  },
  {
    quote: "Everything you've ever wanted is on the other side of fear",
    author: "George Addair",
  },
];

const quoteElement = document.getElementById("quote");
const quoteAuthorElement = document.getElementById("quote-author");
const generateBtn = document.getElementById("generate-btn");

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  const { quote, author} = randomQuote;

  quoteElement.textContent = quote;
  quoteAuthorElement.textContent = author;
}

generateBtn.addEventListener("click", generateRandomQuote);
