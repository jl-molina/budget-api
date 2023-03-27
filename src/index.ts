import express from 'express';
import { config } from 'dotenv';
import routerApi from './routes';
config();

const app = express();
const PORT = process.env.PORT;


app.get('/ping', (_req, res) => {
    res.send('pong');
});

app.use(express.json());
routerApi(app);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});