import express, { Request, Response } from 'express';
import next from 'next';

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV === 'development';

const app = next({ dev });

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/ping', (_req, res) => {
    res.json({ works: true });
  });

  server.all('*', async (req: Request, res: Response) => {
    return handle(req, res);
  });
  server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
