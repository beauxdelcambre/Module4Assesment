const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.



app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["There’s no such thing as an ordinary cat.", "It’s not the amount of time you devote, but what you devote to the time that counts.", "Love lights up the world.", "Listen to everyone. Ideas come from everywhere.", "Nature, time, and patience are the three great physicians."];

  
  let randomIndex = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomIndex]

  res.status(200).send(randomFortune)

})

app.get("/api/inspire", (req, res) => {
  const inspire = ["The measure of intelligence is the ability to change. - Albert Einstein","“Nothing is impossible. The word itself says ‘I’m possible!'” — Audrey Hepburn", "Do not allow people to dim your shine because they are blinded. Tell them to put some sunglasses on. — Lady Gaga", " “Believe you can and you’re halfway there. – Theodore Roosevelt"]

  let randomIndex = Math.floor(Math.random() * inspire.length)
  let randomInspire = inspire[randomIndex]

  res.status(200).send(randomInspire)
})

// app.post(`/api/books`, (req, res) => {
//   const books = 
// })



app.listen(4000, () => console.log("Server running on 4000"));


