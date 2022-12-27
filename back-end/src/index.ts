import express from 'express';
import mongoose from 'mongoose';
import { routes } from './routes';
import path from 'node:path';

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://localhost:27017')

  .then(() => {
    const app = express();
    const port = 3001;

    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

    app.use(express.json());

    app.use(routes);

    app.listen(port, () => {
      console.log(`${port}`);
    });
  })

  .catch(() => console.log('error'));

