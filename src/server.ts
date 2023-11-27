import mongoose from 'mongoose';

import app from './app';
import config from './app/config';

const main = async () => {
  try {
    await mongoose.connect(config.DATABASE_URL as string);

    app.listen(config.port, () => {
      console.log(`Server is runing in this port ${config.port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

main();
