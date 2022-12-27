import express from 'express';
import mongoose from 'mongoose';
import { routes } from './routes';

mongoose.connect('mongodb://localhost:27017')

  .then(() => {
    const app = express();
    const port = 3001;

    app.use(routes);

    app.listen(port, () => {
      console.log(`${port}`);
    });
  })

  .catch(() => console.log('error'));

