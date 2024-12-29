import express from 'express';

// INTIALIZE APP
const app = express();

// PORT
const PORT = 3333 || process.env.PORT;

// home path
app.get("/", (_, res) => {
  res.json({
    "Hello" : "Wrold"
  })
})

// Define the port and start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

