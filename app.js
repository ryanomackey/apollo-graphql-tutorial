import express from 'express';
import cors from 'cors';

const PORT = 3000;
const app = express();

app.use('*', cors());

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
