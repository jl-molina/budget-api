import express from 'express';
import { config } from 'dotenv';
config();

const app = express();
const PORT = process.env.PORT;


app.get('/ping', (_req, res) => {
    res.send('pong');
});

app.use(express.json());
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});