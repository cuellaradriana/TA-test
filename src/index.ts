import 'dotenv/config';
import express, { Request, Response } from 'express';
import axios from 'axios';

const PORT = process.env.PORT || 3000;
const API_URL: string =
    process.env.API_URL ||
    'https://ajoaquinlizarraga.github.io/apipublic/mydata/people/people.json';

const server = express();
server.use(express.json());

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

server.get('/soyTA', async (req: Request, res: Response) => {
    try {
        const response = await axios.get(API_URL);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
});
