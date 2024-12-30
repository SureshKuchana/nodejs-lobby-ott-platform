import express, { Response } from 'express';

// INTIALIZE APP
const app = express();

// PORT
const PORT = process.env.PORT || 3333;

// home path
app.get('/', (_, res: Response) => {
  res.json({
    Hello: 'Wrold',
  });
});

// Define the port and start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
